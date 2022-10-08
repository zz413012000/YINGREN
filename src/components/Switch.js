import React from 'react';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight,faAnglesLeft } from "@fortawesome/free-solid-svg-icons"

const NavbarSwitch = styled.button`
background-color: rgb(0,0,0,0);
border-color: rgb(0,0,0,0);
`

export default function Switch({SidebarOption,handleSwitch,custumStyle}){
    return (
        <NavbarSwitch 
        css={custumStyle}
        onClick={handleSwitch}
        >
            {SidebarOption ? <FontAwesomeIcon icon={faAnglesRight} />:<FontAwesomeIcon icon={faAnglesLeft}/>}
        </NavbarSwitch>
    )
}