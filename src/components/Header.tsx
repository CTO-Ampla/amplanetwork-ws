import Button  from "antd/lib/button";
import * as React from "react";
import { useResponsive } from "ahooks/es/useResponsive";
import Col from 'antd/lib/col';
import Flex from 'antd/lib/flex';
import Row from 'antd/lib/row';

type THeaderPropsType = {
};

const style = {
  flex           : 1,
  display        : "flex",
  flexDirection  : "column",
  justifyContent : "flex-start",
  alignItems     : "center",
  width          : "100%",
} as React.CSSProperties

export const Header = (props: THeaderPropsType) => {
  const rs =  useResponsive() as {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
  };

  document.title = "Ampla Network"//`${rs.xs ? "XS " : ""}${rs.sm ? "SM " : ""}${rs.md ? "MD " : ""}${rs.lg ? "LG " : ""}${rs.xl ? "XL" : ""}`

 return <>
    <Row align={"middle"} style={{
      width    : "100%",
      maxWidth : "1200px",
      marginBottom: rs.md ? 40 : 0
    }}>
      <Col md={12} xs={24}>
        <Flex justify={rs.md ? "start" : "center"} style={{marginBottom: rs.md ? 0 : 20}}>
          <img src="assets/logo.png" alt="Digicon" className="img-fluid" style={{minHeight: "80px", maxHeight: "80px"}} />
        </Flex>
      </Col>
      <Col md={12} xs={24}>
        <Flex justify={rs.md ? "end" : "center"} style={{marginBottom: rs.md ? 0 : 40}}>
          <Button type="primary" style={{width: rs.md ? 106 : 200, fontSize: "15px", fontWeight: "bolder", height: "45px"}} onClick={() => {
            document.querySelector("#app > div")!.scrollBy({top: 5000, behavior: "smooth"});
          }}>Contact Us</Button>
        </Flex>
      </Col>
    </Row>
 </>;
};
