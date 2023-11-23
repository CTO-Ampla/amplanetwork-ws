import * as React from "react";
import { useResponsive } from "ahooks";
import { Col, Flex, Row } from 'antd/lib';
import { styled } from "@mui/system";

type TWhoPropsType = {
};

const style = {
  width          : "1200px",
  display        : "flex",
  justifyContent : "space-between",
  alignItems     : "center",
} as React.CSSProperties

const Div = styled('div')``;
const Span = styled('span')``;


export const Who = (props: TWhoPropsType) => {
  const rs =  useResponsive() as {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
  };

  const [price, setPrice] = React.useState("250 USD");


  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Coordonnées approximatives des Émirats Arabes Unis
        const UAE_BOUNDS = {
          north: 26.209816,
          south: 22.0,
          west: 51.0,
          east: 57.116516
        };

        const isInUAE = lat >= UAE_BOUNDS.south && lat <= UAE_BOUNDS.north &&
                        lon >= UAE_BOUNDS.west && lon <= UAE_BOUNDS.east;

        if (isInUAE) {
          setPrice("920 AED");
        } else {
          console.log("L'utilisateur n'est pas aux Émirats Arabes Unis.");
        }
      });
    }
  }, []);

  //document.title = `${rs.xs ? "XS " : ""}${rs.sm ? "SM " : ""}${rs.md ? "MD " : ""}${rs.lg ? "LG " : ""}${rs.xl ? "XL" : ""}`

  const description = (
    <Div className="banner-content"
      sx={{
        paddingLeft    : "5px",
        paddingRight   : "5px",
        textAlign      : "left"
      }}
    >
      <p className="second" style={{fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center"}}>
        We fully operate online and we are always available for you.<br /><br />
        We apply fix daily rate of <Span sx={{color: "#b749bf", fontWeight: "bolder"}}>{price}</Span> per day per resource.<br /><br />
        <Span sx={{fontStyle: "italic"}}>Dubai outsourcing with a French style.</Span>
      </p>
    </Div>
  );

  const picture = (
    <img src="assets/vector-dubai.png" alt="" className="img-fluid" style={{maxWidth: "50%"}} />

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
  <Row align={"middle"} style={{
      width           : "100%",
      maxWidth        : "1200px",
      backgroundColor : "#fff",
      paddingTop      : "20px",
      paddingBottom   : "20px",
    }}>

    {rs.md ? area1 : area2}
    {rs.md ? area2 : area1}
    </Row>
 </>;
};
