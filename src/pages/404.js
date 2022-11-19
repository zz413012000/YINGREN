import React from 'react'
import {useState,useEffect} from "react"
import {graphql,navigate} from "gatsby"
const ErrorPage = ({data}) =>{
    const [timer,setTimer]=useState(5)
    const siteMetadata=data.site.siteMetadata
    useEffect(()=>{
        const timerID=setInterval(()=>{
            setTimer((prev)=>{
                if(prev>0) {
                    return prev-1
                }else{
                    toIndex()
                    return prev
                } 
            })
        },1000)
    },[])
    function toIndex(){
        navigate("/")
    }
    return (<>
            <div>
            {siteMetadata.title}'s site<br/>
            這是一個不存在的頁面<br/>
            很抱歉，你目前存取的頁面並不存在。<br/>
            預計將在約 <span>{timer}</span> 秒後返回首頁。<br/>
            {/* 如果你很急著想看文章，你可以 <a href={siteMetadata.localUrl}>點這裡</a>  返回首頁。 */}
            如果你很急著想看文章，你可以 <strong style={{color:"red"}} onClick={toIndex}>點這裡</strong>  返回首頁。
            </div>
        </>)
}
export default ErrorPage
export const query=graphql`
    query {
        site {
            siteMetadata{
                title
            }
        }
    }
`