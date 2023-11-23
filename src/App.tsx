import Box from '@mui/system/Box';
import styled from '@mui/system/styled';

import ConfigProvider from 'antd/lib/config-provider';
import React from 'react';
import {createRoot} from 'react-dom/client';
import GoogleFont from 'react-google-font-loader';
import { useResponsive } from "ahooks";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Split } from "./components/Split";
import { Who } from "./components/Who";
import { Lifecycle } from "./components/Lifecycle";
import { Footer } from "./components/Footer";
import { Coverage } from "./components/Coverage";

const Div = styled('div')``;

const App = () => {
  const responsive =  useResponsive();
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary : "#b749bf",
        colorSuccess : "#10cc12",
        colorWarning : "#ccc410",
        colorError   : "#cc2c10",
        colorInfo    : "#1078cc",
        fontFamily   : "Lato, sans-serif"
      }
    }}
  >
    <GoogleFont
    fonts={[
      {
        font: 'Lato',
        weights: [400, 500, 700],
      },
    ]}
    />
    <Div
      sx={{
        display        : "flex",
        flexDirection  : "column",
        justifyContent : "flex-start",
        alignItems     : "center",
        width          : "100%",
        height         : "100%",
        position       : "fixed",
        top            : 0,
        left           : 0,
        bottom         : 0,
        right          : 0,
        overflowY      : "auto",
      }}
    >
      <Header />
      <Intro />
      <Who />

      <Lifecycle />
      <Coverage />
      <Footer />
    </Div>
    </ConfigProvider>
  );
}

const root = createRoot(document.getElementById('app')!);
root.render(<App />);