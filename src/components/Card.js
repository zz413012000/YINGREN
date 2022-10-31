import React from 'react';
import styled from '@emotion/styled';

// border:1px solid red;
// background-color:#ddd;
const CardUi = styled.section`
    display:flex;
    flex-direction:column;
    width:300px;
    
    figure {
        width:100%;
        border:1px solid #ddd;
        background-color:#eee;
    }
    figcaption {
        height:100px;
        width:100%;
        border:1px solid #000;
    }
    `;


export default function Card({description,height}){
    return (
        <CardUi height={height}>
            <figure style={{height:height}}></figure>
            <figcaption>{description}</figcaption>
        </CardUi>
    )
}