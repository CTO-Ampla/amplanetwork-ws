import * as React from "react";
import { useResponsive } from "ahooks/es/useResponsive";
import Col from 'antd/lib/col';
import Flex from 'antd/lib/flex';
import Row from 'antd/lib/row';
import styled from "@mui/system/styled";

type TFooterPropsType = {
};

const style = {
  width          : "1200px",
  display        : "flex",
  justifyContent : "space-between",
  alignItems     : "center",
} as React.CSSProperties

const Div = styled('div')``;


export const Footer = (props: TFooterPropsType) => {
  const rs =  useResponsive() as {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
  };

  const [email, setEmail] = React.useState("CLick here to show the email");

  function displayEmail() {
    setEmail("info@amplanetwork.com");
  }

  return <>
  <Div sx={{
    backgroundColor : "#1b3755",
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

      <Col xs={24} md={8}>
        <Flex vertical style={{color: "#fff", textAlign: rs.md ? "left" : "center"}} align={rs.md ? "flex-start" : "center"}>
          <img src="assets/logot2.png" alt="Digicon" className="img-fluid" style={{minHeight: "100px", maxHeight: "100px"}}  />
          <p>Ampla Network is a 100% online IT<br />Services company with unique<br />building processes.</p>
        </Flex>
        {!rs.md && <hr style={{border: "none", borderBottom: "1px solid #fff"}}/>}
      </Col>

      <Col xs={24} md={8}>
        <Flex vertical style={{color: "#fff", textAlign: rs.md ? "left" : "center"}} align={rs.md ? "flex-start" : "center"}>
          <h3>Location</h3>
          <p>
            Compass Building,<br />
            Al Shohada Road,<br />
            AL Hamra Industrial Zone-FZ,<br />
            <br />
            Ras Al Khaimah,<br />
            United Arab Emirates
          </p>
        </Flex>
        {!rs.md && <hr style={{border: "none", borderBottom: "1px solid #fff"}}/>}
      </Col>

      <Col xs={24} md={8}>
        <Flex vertical style={{color: "#fff", textAlign: rs.md ? "left" : "center"}} align={rs.md ? "flex-start" : "center"}>
          <h3 id="nc">Contact us</h3>
          <p>
            <span>Email :  </span><span onClick={() => displayEmail()} style={{color: "#b749bf", fontWeight: "bolder", cursor: email.includes("@") ? "default" : "pointer"}}>{email}</span>
            <div style={{marginBottom: 10}}/>
            <span>Linkedin :  </span><a href="https://www.linkedin.com/company/ampla-network/" style={{color: "#b749bf", fontWeight: "bolder", cursor: "pointer"}}>Linkedin Ampla Network</a>
            <div style={{marginBottom: 10}}/>
            <span>Whatsapp :  </span><a href="https://api.whatsapp.com/send/?phone=971585985932&text&type=phone_number&app_absent=0" style={{color: "#b749bf", fontWeight: "bolder", cursor: "pointer"}}>Whatsapp Ampla Network</a>
          </p>
        </Flex>
      </Col>

      </Row>
    </Div>
  </>;
};
