import styled from "styled-components";

export const MainContainer = styled.div`
width: 100%;
height: 100vh;
background: url(${props => props.bg});
position: absolute;
top: 0;
left: 0;
z-index: -1;
position: relative;
`
export const MainWrapper = styled.div`
    width: 50%;
    height: 70%;
    background: transparent;
    // background: red;
    position: absolute;
    border-radius:50%;
    left: 0;
    top: 40px;

`
export const SvgContainer = styled.div``
export const Svg = styled.svg``
export const TextContainer = styled.div`
width: 50%;
    color: white;
    position: absolute;
    top: 100px;
    left: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const  Header = styled.p``
export const Text = styled.h1``