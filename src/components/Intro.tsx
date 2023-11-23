import * as React from "react";
import { useResponsive } from "ahooks";
import { Col, Flex, Row } from 'antd/lib';
import { styled } from "@mui/system";

type TIntroPropsType = {
};

const style = {
  width          : "1200px",
  display        : "flex",
  justifyContent : "space-between",
  alignItems     : "center",
} as React.CSSProperties

const Div = styled('div')``;


export const Intro = (props: TIntroPropsType) => {
  const rs =  useResponsive() as {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
  };

  //document.title = `${rs.xs ? "XS " : ""}${rs.sm ? "SM " : ""}${rs.md ? "MD " : ""}${rs.lg ? "LG " : ""}${rs.xl ? "XL" : ""}`

  const description = (
    <Div className="banner-content"
      sx={{
        paddingLeft    : "5px",
        paddingRight   : "5px",
      }}
    >
      <h1 className="second" style={{fontSize: rs.md ? "px" : 45}}>Ampla Network</h1>
      <h1 className="main" style={{fontSize: rs.md ? 55 : 45}}>IT as a Service</h1>
      <p className="second" style={{fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15}}>
        We use our knowledge and experience to fit your needs.
        <br />Enjoy the power of a cloud company
      </p>
    </Div>
  );

  const picture = (
    <img src="assets/vector-coding2.png" alt="" className="img-fluid" style={{maxWidth: "65%"}} />

  );

  const area1 = <Col md={12} xs={24}>
    <Flex justify={rs.md ? "start" : "center"} style={{marginBottom: rs.md ? 0 : 20}}>
      {description}
    </Flex>
  </Col>

  const area2 = <Col md={12} xs={24}>
  <Flex justify="center">
    {picture}
  </Flex>
  </Col>

  return <>
  <Div sx={{
    backgroundColor : "#f5f5f5",
    width           : "100%",
    display         : "flex",
    justifyContent  : "center",
  }}>
    <Row align={"middle"} style={{
      width           : "100%",
      maxWidth        : "1200px",
      paddingTop      : "20px",
      paddingBottom   : "20px",
    }}>
        {rs.md ? area1 : area1}
        {rs.md ? area2 : area2}
      </Row>
    </Div>
  </>;
};
