import styled from "styled-components";

export const Cart = styled.div`
    display: flex;
    margin-left: 60px;
   
    @media (max-width: 1100px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-left: auto;
    }
    @media (max-width: 800px) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
`

export const Container = styled.div`
    width: 100%;  
    height: 450px; 
    margin: 0 auto;
    margin-top: 20px;
    background: #fff;
    overflow-y: scroll;
    padding: 15px 0 20px 0;

    @media (max-width: 800px) {
        width: 80%;
    }
    @media (max-width: 510px) {
        width: 65%;
    }
    @media (max-width: 430px) {
        width: 55%;
    }
    @media (max-width: 320px) {
        width: 40%;
    }
`
export const MyCart = styled.h1`
    color: #fff;
    text-align: center;
    font-size: 25px;
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


