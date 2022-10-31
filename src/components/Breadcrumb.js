import React from 'react'
import styled from '@emotion/styled'
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'
const BreadcrumbOl = styled.ol`
    display:flex;
    padding:0px;
   
`;
const BreadcrumbUl = styled.ul`
padding-left:20px;

&:last-child a{
    color:#666;
}
`
// border-bottom:1px solid #000;
const BreacrumbA = styled.a`
padding:5px;
border-radius:5px;
    color:#999;
    text-decoration:none;
    &:hover{
        background-color: rgb(250,230,230);
    }
` 

export default function Breadcrumb({ 
    // crumbs,
    location,
    crumbLabel
}){
    const { crumbs } = useBreadcrumb({
        location,
        crumbLabel,
        crumbSeparator: ' / ',
    })
    // console.log(crumbs)
    return (
        <BreadcrumbOl>
            {crumbs.map(function(item,index){
                if(index===0){return}
                return (
                    <BreadcrumbUl key={index}>
                        <BreacrumbA href={item.pathname}>{item.crumbLabel}</BreacrumbA>
                        <span>{item.crumbSeparator}</span>
                    </BreadcrumbUl>
                )
            })}
        </BreadcrumbOl>
    )
}