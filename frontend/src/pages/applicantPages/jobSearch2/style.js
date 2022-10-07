import styled from "styled-components";

export const JobSearch2Wrapper = styled.div`
  position: absolute;
  left: ${(props) => props.page < 5?"100vw":props.page == 5?"0vw":"-100vw"};
  transition: left 1s ease;
`