import * as React from "react";
import { useResponsive } from "ahooks";
import { Col, Flex, Row } from 'antd/lib';
import { styled } from "@mui/system";
import { LifeCycleItem } from "./LifecycleItem";

type TCoveragePropsType = {
};

const style = {
  width          : "1200px",
  display        : "flex",
  justifyContent : "space-between",
  alignItems     : "center",
} as React.CSSProperties

const Div = styled('div')``;
const Span = styled('span')``;


export const Coverage = (props: TCoveragePropsType) => {
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
      backgroundColor: "#ffffff"
    }}>
      <Row align={"middle"} style={{
        width           : "100%",
        maxWidth        : "1200px",
        paddingTop      : "20px",
        paddingBottom   : "20px",
      }}>
        <Col xs={24}>
          <Flex vertical align="center" justify={rs.md ? "center" : "center"} style={{ marginBottom: rs.md ? 0 : 20 }}>
            <h1 className="main" style={{margin:0, fontSize: rs.md ? 30 : 30 }}>Coverage</h1>
            <p className="second" style={{margin:0, fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center"}}>
              Our coverage starts from mobile, to reach the Desktop<br /> and all the way to the Web
            </p>
          </Flex>
        </Col>
      </Row>
      <Row className="second">

        <LifeCycleItem icon="mobile" bullets={["Native mobile application","Responsive website","Progressive Web App"]} isLeftPic={true} />
        <LifeCycleItem icon="web" bullets={["Marketing Website", "Complex application", "Frontend and Admin Backoffice"]} isLeftPic={false} />
        <LifeCycleItem icon="desktop" bullets={["Standalone executable", "Desktop cross plateform", "Windows / Mac / Linux"]} isLeftPic={true} noLine/>

      </Row>
      </Div>

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
            <h1 className="main" style={{margin:0, fontSize: rs.md ? 30 : 30 }}>Stack</h1>
            <p className="second" style={{margin:0, fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center"}}>
              Our technical stack does not spread across all technologies,<br /> but we are experts in the following ones
            </p>
          </Flex>
        </Col>
      </Row>
      <Row className="second">

        <LifeCycleItem md={6} ext="svg" icon="react" bullets={["React Native for the mobile", "React for the web & Desktop"]} isLeftPic={true} />
        <LifeCycleItem md={6} ext="svg" icon="node" bullets={["Node JS for the backend" ,"Fast iteration for fast delivery"]} isLeftPic={false} />
        <LifeCycleItem md={6} ext="svg" icon="electron" bullets={["Electron for the Desktop", "One Tech, all plateforms"]} isLeftPic={true} />
        <LifeCycleItem md={6} ext="svg" icon="ts" bullets={["Typescript everywhere","One language to rule them all"]} isLeftPic={false} noLine/>

      </Row>
    </Div>
  </>;
};
