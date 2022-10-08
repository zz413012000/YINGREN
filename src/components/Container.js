import React from 'react'
import styled from '@emotion/styled'
import SidebarContainer from '../container/SidebarContainer'
import NavbarContainer from '../container/NavbarContainer'
// import "../css"
const ContainerUi = styled.div`
    border:1px solid red;
    box-sizing: border-box;
    display:flex;
    margin:0;
    padding:0;
    min-height:100vh;
`
const Content = styled.div`
    width:100%
`
export default function Container ( props ){
    return (
        <ContainerUi>
            <SidebarContainer/>
            <Content>
                <NavbarContainer></NavbarContainer>
                <div>{props.children}</div>
            </Content>
        </ContainerUi>
    )
}