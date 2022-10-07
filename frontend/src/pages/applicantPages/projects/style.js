import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  position: absolute;
  left: ${(props) => props.page < 3?"100vw":props.page == 3?"0vw":"-100vw"};
  transition: left 1s ease;
`