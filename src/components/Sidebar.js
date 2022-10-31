import React,{useEffect} from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import ListLink from './ListLink';
import SwitchContainer from '../container/SwitchContainer';
import sitemap from '../model/sitemap';
const SidebarUi = styled.nav`
    margin: 0;
    text-align:left;
    padding: 5px;
    width:140px;
    background-color: rgb(250,248,248);
    @media (max-width: 420px){
        position:fixed;
        z-index:1;
        top:0;
        left:0;
        height:100vh;
        width:80%;
    }
    `
    // background-color:red;


export default function Sidebar ({ SidebarOption,handleSwitch }) {
    function isMobileDevice() { // 是否為行動端
        const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
        let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
        console.log(isMobileDevice+":"+navigator.userAgent)
        return isMobileDevice
    }
    useEffect(()=>{
        if(isMobileDevice()){ // 是行動端就關閉 sidebar
            handleSwitch()
        }
    },[])
    return (
        <SidebarUi 
        css={css`display:${SidebarOption?'none':'block'}`}
        >
            <SwitchContainer></SwitchContainer>
            <div>
                {sitemap.map((item)=>{
                    return (
                        <ListLink to={item.link} key={item.link}>
                            {item.name}
                        </ListLink>
                    )
                })}
            </div>
        </SidebarUi>
    )
}
