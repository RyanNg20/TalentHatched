import styled from 'styled-components'
import colors from '../colors'

export const InputWrapper = styled.div`
  color: ${colors.halfWhite};
  position: relative;
  margin: ${(props) => props.margin?props.margin:"10px 0px 0px 0px"};
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const InputStyle = `
  padding: 10px 15px;
  background-color: rgba(0,0,0,0);
  border: 1px solid ${colors.halfWhite};
  border-radius: 5px;
  color: white;
  font-size: 18px;
  font-weight: 400;
  font-family: Red Hat Display;
  line-height: 26px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
export const FormSelect = styled.select`
  ${InputStyle}
  width: ${(props) => props.width?props.width:'300px'};
  appearance: none;
`
export const FormInput = styled.input`
  ${InputStyle}
  width: ${(props) => props.width?props.width:'300px'};
`
export const FormTextArea = styled.textarea`
  ${InputStyle}
  width: ${(props) => props.width?props.width:'300px'};
  height: ${({height}) => height?height:'initial'};
`

export const FormRange = styled.div`
  ${InputStyle}
  width: ${(props) => props.width?props.width:'300px'};
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: ${({rangeFocus}) => rangeFocus?`${colors.white} solid 1px`:"none"}
`

export const RangeInput = styled.input`
  ${InputStyle}
  border: none;
  outline: none;
  flex-grow: 1;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const TitleWrapper = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: ${colors.denim};
  padding: 0px 5px;
  color: ${colors.white};
  display: flex;
`

export const InfoIconWrapper = styled.div`
  border: solid 1px ${colors.halfWhite};
  border-radius: 40px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`

export const InfoWrapper = styled.div`
  opacity: ${({infoHover}) => infoHover?1:0};
  transition: opacity 0.3s;
  margin: 0px 0px 0px 20px;
  border-radius: 5px;
  border: solid 1px ${colors.halfWhite};
  padding: 10px;
`

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  padding: 0px;
  `