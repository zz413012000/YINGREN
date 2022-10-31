import React from 'react'
import Container from '../components/Container'
import styled from '@emotion/styled'
import Card from '../components/Card'
import  data from '../model/illustrator'
const Main = styled.main`
  border:1px solid #000;
  display:flex;
  dlex-direction:row;
  flex-wrap:wrap;
  justify-content: space-around;
  align-items:flex-start;
  section {
    border:2px solid blue;
    box-sizing: border-box;
    width:46%;
    margin-top:50px;
    margin:10px;
    height:min-content;
  }
  @media (max-width: 420px){
    section{
      width:80%;
    }
  }
  `

const illustrator = ({location}) => {
  return (
    <Container location={location} crumbLabel={'插圖作品'}>
      <Main>
          {/* <h1>圖片</h1> */}
          {data.map((item,index)=>{
            return (
              <Card height={item.height} description={item.description} key={index}></Card>
            )
          })}
      </Main>
    </Container>
  )
}

export default illustrator