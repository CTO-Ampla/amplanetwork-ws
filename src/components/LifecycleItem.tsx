import * as React from "react";
import { useResponsive } from "ahooks/es/useResponsive";
import Col from 'antd/lib/col';
import Flex from 'antd/lib/flex';
import Row from 'antd/lib/row';
import styled from "@mui/system/styled";

type TLifeCycleItemPropsType = {
 icon       : string;
 bullets    : string[];
 isLeftPic  : boolean;
 xs        ?: number;
 md        ?: number;
 ext       ?: string;
 noLine    ?: boolean;
};

const style = {
  width          : "1200px",
  display        : "flex",
  justifyContent : "space-between",
  alignItems     : "center",
} as React.CSSProperties

const Div = styled('div')``;
const Span = styled('span')``;


export const LifeCycleItem = (props: TLifeCycleItemPropsType) => {
  const rs =  useResponsive() as {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
  };

  const md = <>
    <Col xs={24} md={props.md ?? 8} style={{marginBottom: 35, marginTop: 35}}>
      <Row align={"stretch"} justify={"center"}>
        <Col xs={24} style={{ display: "flex" }}>
          <Flex justify="center" align="center" style={{ width: "100%" }}>
            <img src={`assets/ico-${props.icon}.${props.ext ?? "png"}`} alt="" className="img-fluid" style={{ height: "40px", marginLeft: 10 }} />
          </Flex>
        </Col>
        <Col xs={24}>
          <ul style={{ listStyleType: "none", textAlign: "center", paddingLeft: 15, paddingRight: 15 }}>
            {props.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul>
        </Col>
      </Row>
    </Col>
  </>


  const xs = (props.isLeftPic
    ? <Col xs={24} md={8}>
      <Row align={"stretch"} justify={"center"}>
        <Col xs={4} style={{display: "flex"}}>
          <Flex justify="center" align="center" style={{width:"100%"}}>
            <img src={`assets/ico-${props.icon}.${props.ext ?? "png"}`} alt="" className="img-fluid" style={{ height: "40px", marginLeft: 10 }} />
          </Flex>
        </Col>
        <Col xs={20}>
          <ul style={{listStyleType: "none", textAlign: "left", paddingLeft: 15, paddingRight: 15}}>
            {props.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul>
        </Col>
      </Row>
      {!props.noLine && <hr style={{border: "none", borderBottom: "1px solid #b749bf", width: "75%", paddingTop: 3,paddingBottom: 3}}/>}
    </Col>
    : <Col xs={24} md={8}>
    <Row align={"stretch"} justify={"center"}>
        <Col xs={20}>
        <ul style={{listStyleType: "none", textAlign: "right", paddingLeft: 15, paddingRight: 15}}>
            {props.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
          </ul>
        </Col>
        <Col xs={4} style={{display:"flex", justifyContent:"flex-end"}}>
          <Flex justify="center" align="center" style={{width:"100%"}}>
            <img src={`assets/ico-${props.icon}.${props.ext ?? "png"}`} alt="" className="img-fluid" style={{ height: "40px", marginRight: 10 }} />
          </Flex>
        </Col>
    </Row>
    {!props.noLine && <hr style={{border: "none", borderBottom: "1px solid #1b3755", width: "75%", paddingTop: 3,paddingBottom: 3}}/>}
  </Col>);


 return <>
    {rs.md ? md : xs}
 </>;
};
