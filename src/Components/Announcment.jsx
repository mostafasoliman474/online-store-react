import styled from "styled-components";

const Offer=styled.span`
width: 100%;
 background: teal;
 height: 30px;
 font-weight: 700;
 color: white;
 text-align: center;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 14px;
`
export const Announcment = () => {
  return (
    <Offer>Super Deal! Free Shipping On Order Over 50%</Offer>
  )
}
