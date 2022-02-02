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
    height: 70%; 
    margin: 0 auto;
    margin-top: 20px;
    padding: 15px 0 20px 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        width: 80%;
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
    background: #fff;
    width: 100%;
`

export const Icon = styled.img`
    width: 65px;
    heigth: 55px;
`
export const TableContainer = styled.div`
    overflow-y: scroll;
    height: 400px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;


    @media (min-height: 1000px) {
        height: 1000px;
    }
`
