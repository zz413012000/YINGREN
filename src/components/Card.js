import React from 'react';
import styled from '@emotion/styled';
// import { StaticImage } from 'gatsby-plugin-image'
// border:1px solid red;
// background-color:#ddd;
const CardUi = styled.section`
    display:flex;
    flex-direction:column;
    min-width:300px;
    figure {
        width:100%;
    }
    figure img{
        max-height: 100%;  
        max-width: 100%; 
        width: auto;
        height: auto;
    }
    figcaption {
        height:100px;
        width:100%;
    }
    `;
    // background-color:#eee;

export default function Card({description,src}){
    console.log(src)
    return (
        <CardUi>
            <figure>
                <img  src={src} alt="web img"/>
            <figcaption>{description}</figcaption>
            </figure>
        </CardUi>
    )
}