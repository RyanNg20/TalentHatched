import styled from "styled-components";

export const FormPagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  //150 px should be navbar height + margin
  height: calc(100% - 200px);
`

export const FormPageWrapper = styled.div`
    left: calc(${({page, thisPage}) => (-page + thisPage) * 100}vw + 10%);
    opacity: ${({page, thisPage}) => page==thisPage?1:0};
    transition: left 0.5s, opacity 0.5s;
    position: absolute;
    width: 80%;
`

export const OptionWrapper = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
`

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
