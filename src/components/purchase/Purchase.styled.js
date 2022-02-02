import styled from "styled-components";


export const Container = styled.div`
    background-color: #202020;
    border-radius: 5px;
    margin: 100px;
    width: 300px;
    display: flex;
    flex-direction: column; 
    border: 2px solid #fff;
`

export const Summary = styled.div`
    text-align: center;
    color: #fff;
`
export const Total = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 18px;
    color: #fff;
`

export const ButtonBuy = styled.button`
    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: #F21B2D;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 5px 25px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 40px;
    width: 80%;
    
    :hover {
        transform: scale(1.1);
        transition: all 0.5s;
      } 
`