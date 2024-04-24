import styled from "styled-components"
import { useState } from "react"

const StyledButton = styled.button`
background-color: green;
height: 50px;
width: 100px;
font-size: large;
position: absolute;
top: 25%;
margin-left: 40%;
font-weight: bold;
font-family: 'Times New Roman', Times, serif;
`

const IncreaseButton = ({children, onClick}: {children: string, onClick(): void}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}
export default IncreaseButton