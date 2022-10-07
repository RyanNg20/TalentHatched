import styled from "styled-components"
import colors from "../colors"

export const TableWrapper = styled.div`
  width: 100%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`

export const Line = styled.div`
  width: 1px;
  background-color: ${colors.halfWhite};
  flex-grow: 1;
  margin-bottom: 70px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`