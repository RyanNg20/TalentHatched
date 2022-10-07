import styled from "styled-components";

export const InfoWrapper = styled.div`
  position: absolute;
  left: ${(props) => props.page == 0?"0vw":"-100vw"};
  transition: left 1s ease;
`