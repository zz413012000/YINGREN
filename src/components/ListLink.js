import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled'

const ListLinkUi = styled.div`
display:flex;
justify-content: center;
box-sizing:border-box;
text-align:center;
marging-bottom:5px;
    a{  
        color:#999;
        width:70px;
        padding-bottom:5px;
        margin-bottom:5px;
        text-decoration:none;
        transition:.3s;
        border-bottom:3px solid rgba(0,0,0,0);
    },
    a:hover{
        color:#FF0080;
        border-bottom:3px solid #FFA6FF;
    }
    `

export default function ListLink (props) {
    return (
        <ListLinkUi>
            <Link to={props.to}>{props.children}</Link><br/>
        </ListLinkUi>
    )
}