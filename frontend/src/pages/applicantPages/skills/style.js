import styled from "styled-components";

export const SkillsWrapper = styled.div`
  position: absolute;
  left: ${(props) => props.page < 2?"100vw":props.page == 2?"0vw":"-100vw"};
  transition: left 1s ease;
`