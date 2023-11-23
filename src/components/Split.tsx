import * as React from "react";

export type TSplitDef =  Partial<{
  type    : "h" | "v" | "hr" | "vr";
  size    : number | string;
  width   : number | string;
  height  : number | string;
  def     : (string | number | TSplitDef)[];
  vScroll : boolean;
  hScroll : boolean;
}>;
export type TSplitProps = {
  style   ?: React.CSSProperties;
  width   ?: number | string;
  height  ?: number | string;
  splits   : React.ReactNode[];
} & TSplitDef;

function createElements(_def: string | number | TSplitDef, splits: React.ReactNode[]) {
  let def = {} as TSplitDef;

  if (typeof _def === "string" || typeof _def === "number") {
    def.size = _def;
  } else {
    def = _def;
  }

  def.type = def.type || "h";
  def.size = def.size || 1;

  const style = {
    flex           : 1,
    display        : "flex",
    overflowX      : def.hScroll ? "auto" : "hidden",
    overflowY      : def.vScroll ? "auto" : "hidden",
    justifyContent : "flex-start",
    alignItems     : "stretch",
  } as React.CSSProperties;

  if (typeof def.size === "number") {
    style.flex = def.size;
  }

  if (def.width) {
   style.minWidth =
    style.width    =
    style.maxWidth = def.width;
  }

  if (def.height) {
    style.minHeight =
    style.height    =
    style.maxHeight = def.height;
  }

  def.type[0] === "h" && (style.flexDirection = def.type === "h"
  ? "row"
  : "row-reverse");

  def.type[0] === "v" && (style.flexDirection = def.type === "v"
      ? "column"
      : "column-reverse");


  const children = [] as React.ReactNode[];
  def.def?.forEach((def, i) => {
    children.push(createElements(def, splits));
  });

  return <div style={style}>{children.length ? children : splits.shift()}</div>;
}

export const Split = (props: TSplitProps) => {

  const elt = createElements({...props}, [...props.splits]);
  const style = {
    display        : "flex",
    flexDirection  : "row",
    justifyContent : "stretch",
    alignItems     : "stretch",
    ...props.style
  } as React.CSSProperties;

  if (props.width) {
    style.width = props.width;
    style.minWidth = props.width;
    style.maxWidth = props.width;
  }

  if (props.height) {
    style.height = props.height;
    style.minHeight = props.height;
    style.maxHeight = props.height;
  }

 return <>
  <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "100px"}}>
    <div style={style}>
      {elt}
    </div>
  </div>
 </>;
};

