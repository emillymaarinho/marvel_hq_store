import styled from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 1em;
    transition: transform .5s;
    transform: translateX(0) scale(.9);
    &:hover { transform: translateX(8px) scale(1) } ;
    &:focus { transform: translateX(8px) scale(1) } ;

    ${({ rare }) => rare && `
        :before, :after { content:""; display:block; box-sizing:border-box;
        position:absolute;z-index:5; pointer-events: none; 
        width:0; height:0; opacity:0; border:3px solid #daa520; border-radius: 10px; }

        :before { border-left:none; border-bottom:none; left:0; top:0;
        transition:width .5s linear 1.5s, height .5s linear 1s, opacity .1s 2s }
        :after  { border-top:none; border-right:none; right:0; bottom:0;
        transition:width .5s linear .5s, height .5s linear, opacity .1s 1s }

        :hover::before, :hover::after  { width:100%; height:100%; opacity:1 }

        :hover::before { transition:width .5s linear, height .5s linear .5s, opacity .1s }
        :hover::after  { transition:width .5s linear 1s, height .5s linear 1.5s, opacity .1s 1s }
    `}


    `

export const Image = styled.img`
    height: 300px;;
    width: 100%;
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


export const CardSelect = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 20px;
    align-items: flex-start;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    margin-bottom: 30px;
    text-align: center;

    @media (max-width: 2200px) {
        width: 65%;
    }   
    
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
    width: 70%;

    @media (max-width: 2200px) {
        font-size: 30px;
    }

    @media (max-width: 1580px) {
        font-size: 20px;
    }

    @media (max-width: 768px) {
        font-size: 15px;
    }
    `

export const ImageCardSelect = styled.img`  
    height: 50%;
    width: 50%;   
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;

    @media (max-width: 2200px) {
        font-size: 30px;
    }

    @media (max-width: 1580px) {
        font-size: 15px;
        padding-bottom: 30px;
    }

    @media (max-width: 1024px) {
        font-size: 15px;
    }
`

export const PriceCardSelect = styled.span`
    font-weight: bold;
    font-size: 25px;
    color: #202020;

    @media (max-width: 2200px) {
        font-size: 35px;
    }

    @media (max-width: 1580px) {
        font-size: 25px;
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
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

    @media (max-width: 2200px) {
        font-size: 30px;
    }

    @media (max-width: 1580px) {
        font-size: 15px;
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const TitleAndImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NoDescription = styled.span`
    font-size: 15px;
    color: #808080;
`

export const Display = styled.div`
    display: column;   
`
export const ImgRare = styled.img`
    widht: 70px;
    height: 70px;
    position: absolute;
    bottom: 5px;
    left: 0;

`

