import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-auto-rows: minmax(290px, auto);
    grid-gap: 20px;
    grid-auto-flow: dense; 
    margin-left: auto;
    margin-right: auto;
    transition: all 0.5s;

    grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    justify-content: center;
    width: 100%;
    max-width: 2500px;

    @media (max-width: 2200px) {
        width: 1870px;
    }

    @media (max-width: 1890px) {
        width: 1560px;   
    }

    @media (max-width: 1580px) {   
        width: 1300px;
    }

    @media (max-width: 1189px) {   
        width: 1000px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    }

    @media (max-width: 1024px) {
        width: 800px;  
        grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
    }

    @media (max-width: 870px) {   
        width: 650px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    }

    @media (max-width: 750px) { 
        width: 550px;
        grid-auto-rows: minmax(200px auto);
        grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
    }
    @media (max-width: 560px) { 
        width: 400px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
    }
    `
