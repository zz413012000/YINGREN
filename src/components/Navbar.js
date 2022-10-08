import React from 'react';
import { useState  } from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
// import SwitchContainer from '../container/SwitchContainer';
const NavbarUi = styled.div`
    box-sizing: border-box;
    width:100%;
    height:29px;
    position:relative;
    border:1px solid #000;
    `
let barsStyle=css`
    pointer-events: none;
    &:hover {
        background-color: red;
    }
`
let SidebarSwitch=styled.div`
    width:20px;
    padding:5px;
`
export default function Navbar({SidebarOption,handleSwitch}){
    let [on,setOn]=useState(true)
    function handleOver(){
        if(on){
            setOn(!on)
        }
    }
    function handleOut(){
        if(!on){
            setOn(!on)
        }
    }
    return (
        <NavbarUi>
            <SidebarSwitch  onMouseOver={handleOver} onMouseOut={handleOut} onClick={handleSwitch} css={css`
            display:${SidebarOption?"block":"none"};
           
            `}>
                {on?<FontAwesomeIcon style={!on?{backgroundColor:'red'}:undefined} css={barsStyle} icon={faBars} />:<FontAwesomeIcon css={barsStyle} icon={faAnglesRight} />}
            </SidebarSwitch>
        </NavbarUi>
    )
}   