import React from 'react';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight,faAnglesLeft } from "@fortawesome/free-solid-svg-icons"

const NavbarSwitch = styled.button`
    background-color: rgb(0,0,0,0);
    border:none;
    min-width:20px;
    min-height:18px;
    padding:1px;
    &:hover {
        background-color: rgb(250,230,230);
    }
    &:active{
        background-color: rgb(245,225,225);
    }
`

export default function Switch({SidebarOption,handleSwitch}){
    return (
        <NavbarSwitch 
        onClick={handleSwitch}
        >
            {SidebarOption ? <FontAwesomeIcon icon={faAnglesRight} />:<FontAwesomeIcon icon={faAnglesLeft}/>}
        </NavbarSwitch>
    )
}