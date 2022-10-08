import React from 'react';
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import ListLink from './ListLink';
import SwitchContainer from '../container/SwitchContainer';
const SidebarUi = styled.div`
    margin: 0;
    text-align:left;
    padding: 5px;
    width:140px;
    background-color: rgb(250,248,248);
    ` 

const List = [
    {
        name:"首頁",
        link:"/"
    },
    {
        name:"關於我",
        link:"/about"
    },
    {
        name:"插圖作品",
        link:"/illustrator"
    },
]

export default function Sidebar ({ SidebarOption }) {
    return (
        <SidebarUi 
        css={css`display:${SidebarOption?'none':'block'}`}
        >
            <SwitchContainer></SwitchContainer>
            <div>
                {List.map((item)=>{
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
