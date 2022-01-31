import styled from "styled-components";


export const ComicInfo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10%;
    width: 300px;
`
export const Button = styled.button`
    border:none;
    background-color: #fff;
    cursor: pointer;
     
    :hover {
        color: #808080;
    }
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


export const Image = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 10px;
    object-fit: contain;
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

export const Total = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    text-align: right;
`

export const ButtonBuy = styled.button`
    margin-top: 10px;
    background-color: #F21B2D;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 5px 25px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 40px;
    margin-left: auto;

    :hover {
        transform: scale(1.1);
        transition: all 0.5s;
      } 
`