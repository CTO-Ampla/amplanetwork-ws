import Box from '@mui/system/Box';
import styled from '@mui/system/styled';

import ConfigProvider from 'antd/lib/config-provider';
import React from 'react';
import {createRoot} from 'react-dom/client';
import GoogleFont from 'react-google-font-loader';
import { useResponsive } from "ahooks/es/useResponsive";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Who } from "./components/Who";
import { Lifecycle } from "./components/Lifecycle";
import { Footer } from "./components/Footer";
import { Coverage } from "./components/Coverage";
import { BlockItem } from "./components/BlockItem";
import { PicItem } from "./components/PicItem";

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

      <BlockItem
        title="Scope of expertise"
        description="Our expertise is splitted into 3 main areas"
        items={[
          {icon: "code" , bullets: ["Low code platform", "Our low code platform handle full project lifecycle"]    , isLeftPic: true},
          {icon: "ai"   , bullets: ["AI assisted components", "From AI Assistant","to AI Assisted software"]         , isLeftPic: !true},
          {icon: "game" , bullets: ["Gamification", "Add promotional mini games","to make your marketing astonishing."] , isLeftPic: true},
        ]}
      />
      <PicItem
        iswhiteBg={true}
        picture="assets/lowcode.png"
        description={<>
          <BlockItem
            isWhiteBG={true}
            title="Low code platform"
            description="Low code platform to handle full project"
            items={[
              {icon: "design" , bullets: ["Conception"]    , isLeftPic: true},
              {icon: "implement"   , bullets: ["Implementation"]         , isLeftPic: !true},
              {icon: "testing" , bullets: ["Testing"] , isLeftPic: true},
            ]}
          />
        </>}
      />
      <PicItem
        iswhiteBg={false}
        picture="assets/ai-assist.png"
        isPicRight={true}
        description={<>
          <BlockItem
            isWhiteBG={false}
            title="AI assisted components"
            description="Include AI assisted components to interact with your system"
            items={[
              {icon: "chatbot"   , bullets: ["Virtual Assistant"]         , isLeftPic: !true},
              {icon: "smart"     , bullets: ["Smart Software"] , isLeftPic: true},
              {icon: "bi"     , bullets: ["Data Analytics"] , isLeftPic: !true},
            ]}
          />
        </>}
      />
       <PicItem
        iswhiteBg={true}
        picture="assets/gaming.png"
        description={<>
          <BlockItem
            isWhiteBG={true}
            title="Gamification"
            description="Add promotional mini-games to make your marketing astonishing."
            items={[
              {icon: "promo" , bullets: ["Promotional"]    , isLeftPic: true},
              {icon: "adv"   , bullets: ["Advertising"]         , isLeftPic: !true},
              {icon: "mini" , bullets: ["Mini games"] , isLeftPic: true},
            ]}
          />
        </>}
      />
      {/* <Lifecycle />
      <Coverage /> */}
      <Footer />
    </Div>
    </ConfigProvider>
  );
}

const root = createRoot(document.getElementById('app')!);
root.render(<App />);
