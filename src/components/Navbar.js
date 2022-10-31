import React ,{ useState  } from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import Breadcrumb from './Breadcrumb';
const NavbarUi = styled.div`
    box-sizing: border-box;
    display:flex;
    width:100%;
    min-height:29px;
    padding:5px;
    `
const barsStyle=css`
    pointer-events: none;

`
const SidebarSwitch=styled.button`
background-color: rgb(0,0,0,0);
border:none;
min-width:20px;
min-height:18px;
    &:hover {
        background-color: rgb(250,230,230);
    }
    &:active{
        background-color: rgb(245,225,225);
    }
`

export default function Navbar({SidebarOption,handleSwitch,location,crumbLabel}){
    let [on,setOn]=useState(true)
    function handleOver(){
        if(on){setOn(!on)}
    }
    function handleOut(){
        if(!on){setOn(!on)}
    }

    return (
        <NavbarUi>
            <SidebarSwitch  onMouseOver={handleOver} onMouseOut={handleOut} onClick={handleSwitch} css={css`
            display:${SidebarOption?"block":"none"};
            `}
            >
                {on?<FontAwesomeIcon  css={barsStyle} icon={faBars} />:<FontAwesomeIcon css={barsStyle} icon={faAnglesRight} />}
            </SidebarSwitch>
                <Breadcrumb 
                location={location}
                crumbLabel={crumbLabel}
                />
        </NavbarUi>
    )
}   