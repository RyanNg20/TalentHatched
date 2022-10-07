import styled from "styled-components";

export const FormPagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 600vw;
  transform: translateX(${({page}) => page * -100}vw);
  transition: transform 1s ease, opacity 1s;
`

export const FormPageWrapper = styled.div`
    opacity: ${({page, thisPage}) => page == thisPage?1:0};
    transition: transform 1s ease, opacity 1s;
    width: 100vw;
`