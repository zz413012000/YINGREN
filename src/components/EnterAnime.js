import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Progress from "../components/Progress"
import BackgroundImage from 'gatsby-background-image'

const EnterAnimeUi = styled.div`
  position:fixed;
  background-color:#DDD;
  width:100%;
  height:100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index:1;
  transition: 1s;
    pointer-events: none;
  `;
const Curtain = styled.div`
background-color:#fff;
width:100%;
height:100vh;
position:relative;
z-index:3;
`;
const EnterAnimePicTop = styled.div`
top:-7.5%;
left:-2%;
position:absolute;
height:57%;
transform:rotate(-3.5deg);
overflow:hidden;
z-index:2;
box-sizing:border-box;
transition: 1s ease-in-out;
`
const EnterAnimePicBottom = styled.div`
transition: 1s ease-in-out;
`
const BackgroundImageStyle=css`
height:100vh;
transform:rotate(3.5deg) translateY(-24%);
`

export default function EnterAnime({data}) {
    const [transitionValue, setTransitionValue] = useState(0); // 計算動畫時間
    const [curtainIsOpen, setCurtainIsOpen] = useState(true) // 布幕是否開啟
    const [animeIsOpen, setAnimeIsOpen] = useState(true) // 動畫是否開啟
    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => {
            setTransitionValue((prev) => {
                if (prev >= 120) {
                    setCurtainIsOpen(false)
                }
                if (prev >= 180) {
                    setAnimeIsOpen(false)
                    clearInterval(intervalId);
                }
                return prev + 1;
            });
        }, 30);
    },[]);
    return (
        <EnterAnimeUi 
        css={css`opacity:${animeIsOpen?"1":"0"};`}
        >
            <Progress value={transitionValue < 100 ? transitionValue : 100}/>
            <Curtain css={css`display:${curtainIsOpen ? 'block' : 'none'};`}/>
            <EnterAnimePicTop 
            css={css`width:${curtainIsOpen?"110":"112"}%`}
            >
                <BackgroundImage
                    fluid={data.file.childImageSharp.fluid}
                    css={BackgroundImageStyle}
                />
            </EnterAnimePicTop>
            <EnterAnimePicBottom
             css={css`width:${curtainIsOpen?"100":"102"}%`}
            >
                <BackgroundImage
                    fluid={data.file.childImageSharp.fluid}
                    css={css`
                    height:100vh;
                    `}
                />
            </EnterAnimePicBottom>
        </EnterAnimeUi>
    )
}