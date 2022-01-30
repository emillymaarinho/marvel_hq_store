import styled from "styled-components";

export const Container = styled.div`
    width: 55%;   
    margin: 0 auto;
    margin-top: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 400px;
    padding: 15px 0 20px 0;
`
export const MyCart = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 25px;
`
export const Content = styled.tr`
    text-align: center;
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
  `

export const Value = styled.td` 
text-align: center;
`

export const ComicInfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10%;
    width: 300px;
}
`

export const Image = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 10px;
`

export const Title = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
`
export const QuantityContainer = styled.td`
   width: 250px;
`

export const Button = styled.button`
    border:none;
    background-color: #fff;
    cursor: pointer;  
`

export const Centered = styled.div`
    text-align: center;    
`
export const ButtonClear = styled.button`
    border:none;
    background-color: #202020;
    cursor: pointer;  
    color: #F21B2D;
    font-size: 18px;
    margin-top: 10px;   
`

export const CartClear = styled.div`
    font-size: 15px;
    margin: auto; 
    text-align: center;
`

export const Icon = styled.img`
    width: 65px;
    heigth: 55px;
`


