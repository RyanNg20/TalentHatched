import styled from 'styled-components'
import colors from '../colors'

export const InputWrapper = styled.div`
  color: ${colors.halfWhite};
  position: relative;
  margin: ${(props) => props.margin?props.margin:"10px 0px 0px 0px"};
`

export const FormInput = styled.input`
  padding: 10px;
  background-color: rgba(0,0,0,0);
  border: 1px solid ${colors.halfWhite};
  border-radius: 5px;
  color: white;
  font-size: 18px;
  font-weight: 400;
  font-family: Red Hat Display;
`

export const TitleWrapper = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: ${colors.denim};
  padding: 0px 5px;
  color: ${colors.white};
`
