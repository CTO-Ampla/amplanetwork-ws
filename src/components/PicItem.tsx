import * as React from "react";
import { useResponsive } from "ahooks/es/useResponsive";
import Col from 'antd/lib/col';
import Flex from 'antd/lib/flex';
import Row from 'antd/lib/row';
import styled from "@mui/system/styled";

type TPicItemPropsType = {
  description ?: React.ReactNode;
  picture     ?: string;
  iswhiteBg   ?: boolean;
  isPicRight  ?: boolean;
};

const Div = styled('div')``;
const Span = styled('span')``;

export const PicItem = (props: TPicItemPropsType) => {
  const rs =  useResponsive() as {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
  };

  const description = (
    <Div className="banner-content"
      sx={{
        paddingLeft    : "5px",
        paddingRight   : "5px",
        textAlign      : "left"
      }}
    >
      <p className="second" style={{fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center"}}>
        {props.description}
      </p>
    </Div>
  );

  const picture = (
    <img src={props.picture} alt="" className="img-fluid" style={{maxWidth: "45%"}} />

  );

  const area1 =  <Col md={12} xs={24}>
        <Flex justify={rs.md ? "center" : "center"} style={{marginBottom: rs.md ? 0 : 20}}>
          {picture}
        </Flex>
      </Col>;

  const area2 = <Col md={12} xs={24}>
    <Flex justify="center">
      {description}
    </Flex>
  </Col>;

 return <>
  <Div sx={{
    backgroundColor : props.iswhiteBg ? "#fff" : "#f5f5f5",
    width           : "100%",
    textAlign       : "center",
    display         : "flex",
    justifyContent  : "center"
  }}>
    <Row align={"middle"} style={{
      width           : "100%",
      maxWidth        : "1200px",
      paddingTop      : "20px",
      paddingBottom   : "20px",
    }}>

      {rs.md ? (props.isPicRight ? area2 : area1) :  area1}
      {rs.md ? (props.isPicRight ? area1 : area2) : area2}
      </Row>
  </Div>
 </>;
};
