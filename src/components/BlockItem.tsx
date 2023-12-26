import * as React from "react";
import styled from "@mui/system/styled";
import { useResponsive } from "ahooks/es/useResponsive";
import Col from 'antd/lib/col';
import Flex from 'antd/lib/flex';
import Row from 'antd/lib/row';
import { LifeCycleItem, TLifeCycleItemPropsType } from "./LifecycleItem";

type TBlockItemPropsType = {
  isWhiteBG   ?: boolean;
  title       ?: string;
  description ?: string;
  items       ?: TLifeCycleItemPropsType[];
};

const Div = styled('div')``;


export const BlockItem = (props: TBlockItemPropsType) => {
  const rs =  useResponsive() as {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
  };

 return <>
  <Div sx={{
        width          : "100%",
        display        : "flex",
        justifyContent : "center",
        alignItems     : "center",
        flexDirection  : "column",
        paddingTop     : "20px",
        paddingBottom  : "20px",
        backgroundColor: props.isWhiteBG ? "#ffffff" : "#f5f5f5"
      }}>
      <Row align={"middle"} style={{
        width           : "100%",
        maxWidth        : "1200px",
        paddingTop      : "20px",
        paddingBottom   : "20px",
      }}>
        <Col xs={24}>
          <Flex vertical align="center" justify={rs.md ? "center" : "center"} style={{ marginBottom: rs.md ? 0 : 20 }}>
            <h1 className="main" style={{margin:0, fontSize: rs.md ? 30 : 30 }}>{props.title}</h1>
            <p className="second" style={{margin:0, fontSize: rs.md ? 25 : 20, padding: rs.md ? 0 : 15, textAlign: rs.md ? "center" : "center"}}>
              {props.description}
            </p>
          </Flex>
        </Col>
      </Row>
      <Row className="second">
        {props.items?.map((item, index) => <LifeCycleItem key={index} {...item} />)}
      </Row>
    </Div>
 </>;
};
