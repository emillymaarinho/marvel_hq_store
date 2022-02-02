import styled from "styled-components";


export const ComicInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    background: #fff;
    
    @media (max-width: 1320px) {
        flex-direction: column;
        align-items: center;
    }
    
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
    width: 300px;
`
export const QuantityContainer = styled.td`
   width: 100px;
`

