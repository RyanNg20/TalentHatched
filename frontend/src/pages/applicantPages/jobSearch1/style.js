import styled from "styled-components";

export const JobSearch1Wrapper = styled.div`
  position: absolute;
  left: ${(props) => props.page < 4?"100vw":props.page == 4?"0vw":"-100vw"};
  transition: left 1s ease;
`