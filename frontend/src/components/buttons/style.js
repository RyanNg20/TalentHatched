import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../colors'

export const ButtonWrapper = styled.button`
  background-color: ${(props) => props.disable?colors.denim:colors.orange};
  padding: 10px 25px;
  max-width: fit-content;
  color: white;
  border-radius: 5px;
  border: ${(props) => props.disable?`solid 1px ${colors.halfWhite}`:`solid 1px ${colors.orange}`};
  transition: background-color 0.5s, border 0.5s;
`

export const ArrowWrapper = styled.button`
  background-color: ${colors.denim};
  color: white;
  width: 50px;
  height: 42px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 3px white;
`