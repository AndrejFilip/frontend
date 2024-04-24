import styled from "styled-components"

const StyledButton = styled.button`
background-color: red;
height: 50px;
width: 100px;
font-size: large;
position: absolute;
top: 25%;
margin-left: 50%;
font-weight: bold;
font-family: 'Times New Roman', Times, serif;
`

const DescreaseButton = ({children, onClick}: {children: string, onClick(): void}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default DescreaseButton