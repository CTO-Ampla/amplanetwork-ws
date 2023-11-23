import * as React from "react";
import { useResponsive } from "ahooks/es/useResponsive";
import Col from 'antd/lib/col';
import Flex from 'antd/lib/flex';
import Row from 'antd/lib/row';
import styled from "@mui/system/styled";
import { LifeCycleItem } from "./LifecycleItem";

type TLifecyclePropsType = {
};

const style = {
  width          : "1200px",
  display        : "flex",
  justifyContent : "space-between",
  alignItems     : "center",
} as React.CSSProperties

const Div = styled('div')``;
const Span = styled('span')``;


export const Lifecycle = (props: TLifecyclePropsType) => {
  const rs =  useResponsive() as {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
  };

  //document.title = `${rs.xs ? "XS " : ""}${rs.sm ? "SM " : ""}${rs.md ? "MD " : ""}${rs.lg ? "LG " : ""}${rs.xl ? "XL" : ""}`



  return <>
    <Div sx={{
      width          : "100%",
      display        : "flex",
      justifyContent : "center",
      alignItems     : "center",
      flexDirection  : "column",
      paddingTop     : "20px",
      paddingBottom  : "20px",
      backgroundColor: "#f5f5f5"
    }}>
      <Row align={"middle"} style={{
        width           : "100%",
        maxWidth        : "1200px",
        paddingTop      : "20px",
        paddingBottom   : "20px",
      }}>
        <Col xs={24}>
          <Flex vertical align="center" justify={rs.md ? "center" : "center"} style={{ marginBottom: rs.md ? 0 : 20 }}>
            <h1 className="main" style={{margin:0, fontSize: rs.md ? 30 : 30 }}>Lifecycle</h1>
            <p className="second" style={{margin:0, fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center"}}>
              Our process is simple and efficient
            </p>
          </Flex>
        </Col>
      </Row>
      <Row className="second">

        <LifeCycleItem icon="task" bullets={["Your project is converted in tasks", "Tasks are dispatched in 2 weeks milestones"]} isLeftPic={true} />
        <LifeCycleItem icon="screen" bullets={["Developpers do one task", "Then take another one till the end"]} isLeftPic={false} />
        <LifeCycleItem icon="qa" bullets={["When the tasks are done", "A QA will test each of them"]} isLeftPic={true} />
        <LifeCycleItem icon="cloud" bullets={["After QA tests", "We prepare a push online"]} isLeftPic={false} />
        <LifeCycleItem icon="video" bullets={["A video of the milestone is recorded", "This will be your material to assist you in your tests"]} isLeftPic={true} />
        <LifeCycleItem icon="email" bullets={["We send your access for testing","Directly to your mailbox"]} isLeftPic={false} noLine/>

      </Row>
    </Div>
  </>;
};
