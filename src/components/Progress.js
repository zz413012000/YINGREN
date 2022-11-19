import React  from 'react';
import styled from '@emotion/styled'

const ProgressUi=styled.div`
    display:flex;
    flex-direction: column;
    position:absolute;
    top:50vh;
    width:100%;
    z-index:4;
    transform:rotate(-3.5deg) translateX(-8px);
    `
const Trail = styled.div`
    width:100%;
    height:2px;
    border-radius:25px;
    background:#fff; 
`;
const Track = styled.div`
    height:inherit;
    border-radius:25px;
    position:relative;
    transition: width 0.2s;
    overflow: hidden;
    &:before {
        content: '';
        position: absolute;
        height: 100%;
        width: ${(props)=>props.value}%;
        top: 0px;
        background:#000;
    }
    `;
export default function Progress({value}){
    function formatValue(valule){
        if(value>100){
            return 100
        }
        if(value<0){
            return 0
        }
        return value
    }
    return (
        <ProgressUi>
            <Trail>
                <Track 
                value={formatValue(value)}
                />
            </Trail>
        </ProgressUi>
    )
}