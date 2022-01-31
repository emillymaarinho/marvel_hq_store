import styled from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 1em;
    margin: 0.5%;
    transition: transform .5s;
    transform: translateX(0) scale(.9);
    &:hover { transform: translateX(8px) scale(1) } ;
    &:focus { transform: translateX(8px) scale(1) } ;
    `

export const Image = styled.img`
    height: 200px;
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    margin-bottom: 20px;
    object-fit: contain;
    `

export const Title = styled.h1`
    background-color: #202020;
    color: #f2f2f2;
    padding: .4em;
    margin-bottom: .5em;
    font-size: 1em;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    `

export const Price = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: #202020;
`

export const IconCart = styled.img`
    height: 35px;
    width: 35px;
    text-decoration: none;
    margin-top: 10px;
    cursor: pointer;  
`

export const IconCentered = styled.div`
    text-align: end;
    `

export const Container = styled.div`
    display: grid;
    grid-auto-rows: minmax(290px, auto);
    grid-gap: 20px;
    grid-auto-flow: dense;
    padding: 0px;
    
    margin-left: 50px;
    transition: all 0.5s;

    grid-template-columns: repeat(auto-fit, minmax(290px, 290px));
    justify-content: center;
    width: 2500px;
    max-width: 2500px;

    @media (max-width: 2200px) {
        width: 1870px;
    }

    @media (max-width: 1890px) {
        width: 1560px;   
    }

    @media (max-width: 1580px) {   
        width: 1250px;
        grid-auto-rows: minmax(250px, auto);
        grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
    }

    @media (max-width: 1024px) {
        width: 800px;  
    }

    @media (max-width: 870px) {   
        width: 750px;
        grid-auto-rows: minmax(230px, auto);
        grid-template-columns: repeat(auto-fit, minmax(230px, 230px));
    }

    @media (max-width: 750px) { 
        width: 650px;
        grid-auto-rows: minmax(200px, auto);
        grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
    }
    @media (max-width: 650px) { 
        width: 500px;
    }
    `


export const CardSelect = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 20px;
    align-items: flex-start;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    height: 550px;
    margin-bottom: 30px;
    text-align: center;
    
    `
export const TitleCardSelect = styled.h1`
    background-color: #202020;
    color: #f2f2f2;
    padding: .4em;
    margin-bottom: .5em;
    font-size: 18px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 400px;
    `

export const ImageCardSelect = styled.img`  
    height: 400px;
    width: 400px;   
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
`
export const PriceCardSelect = styled.span`
    font-weight: bold;
    font-size: 25px;
    color: #202020;
`

export const ButtonCentered = styled.div`
    text-align: center;
`
export const Button = styled.button`
    margin-top: 10px;
    background-color: #F21B2D;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 40px;

    :hover {
        transform: scale(1.1);
        transition: all 0.5s;
      } 
`

export const TitleAndImg = styled.div`
    display: flex;
    flex-direction: column;

`

export const TwoDisplay = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto; 
    text-align: center;

`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
`


export const NoDescription = styled.span`
    font-size: 15px;
    color: #808080;
`

export const OneDisplay = styled.div`
    display: flex;
`


