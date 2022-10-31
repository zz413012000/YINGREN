import React from 'react'
import styled from '@emotion/styled'
import SidebarContainer from '../container/SidebarContainer'
import NavbarContainer from '../container/NavbarContainer'
const ContainerUi = styled.div`
    box-sizing: border-box;
    display:flex;
    min-height:100vh;
    position:relative;
    nav {
        flex-shrink:0;
    }
`
const Content = styled.div`
    width:100%
`
export default function Container ( {location,children,crumbLabel} ){
    return (
        <ContainerUi>
            <SidebarContainer/>
            <Content>
                <NavbarContainer 
                location={location}
                crumbLabel={crumbLabel}
                >
                </NavbarContainer>
                <div>{children}</div>
            </Content>
        </ContainerUi>
    )
}