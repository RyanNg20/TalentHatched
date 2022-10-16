import { useState } from "react"
import colors from "../colors"
import { Reg16, Reg18 } from "../style"
import { FormInput, FormSelect, FormTextArea, InfoWrapper, InfoIconWrapper, InputWrapper, TitleWrapper, FormRange, RangeInput } from "./style"
import { IoInformationOutline } from "react-icons/io5"

const Input = ({title, placeholder, placeholder2, type, inputType, required, onChange, style, value, info, width, height}) => {
  let inputComponent

  const [infoHover, setInfoHover] = useState(false)
  const [rangeFocus, setRangeFocus] = useState(false)

  switch (type) {
    case "dropdown":
      inputComponent = (
        <FormSelect type="text" placeholder={placeholder} required={required?required:false} width={width}>
          <option value="Chrome" style={{color: colors.black}}>Chrome</option>
          <option value="Firefox" style={{color: colors.black}}>Firefox</option>
          <option value="Internet Explorer" style={{color: colors.black}}> Internet Explorer</option>
          <option value="Opera" style={{color: colors.black}}>Opera</option>
          <option value="Safari" style={{color: colors.black}}>Safari</option>
          <option value="Microsoft Edge" style={{color: colors.black}}>Microsoft Edge</option>
        </FormSelect>
      )
      break;
    case "autofill":
        inputComponent = (
          <>
            <FormInput type="text" placeholder={placeholder} required={required?required:false} onChange={onChange} list={'browsers'} width={width} value={value}/>
            <datalist id="browsers">
              <option value="Chrome"></option>
              <option value="Firefox"></option>
              <option value="Internet Explorer"></option>
              <option value="Opera"></option>
              <option value="Safari"></option>
              <option value="Microsoft Edge"></option>
            </datalist>
          </>
        )
        break;
    case "textarea":
        inputComponent = <FormTextArea type="text" placeholder={placeholder} required={required?required:false} onChange={onChange} width={width} value={value} height={height}/>
        break;
    case "range":
      inputComponent = (
        <FormRange width={width} rangeFocus={rangeFocus}>
          <RangeInput min="0" max="99" size="1" type={inputType} placeholder={placeholder} required={required?required:false} onFocus={() => {setRangeFocus(true)}} onBlur={() => {setRangeFocus(false)}}/>
          -
          <RangeInput min="0" max="99" size="1" type={inputType} placeholder={placeholder2} required={required?required:false} onFocus={() => {setRangeFocus(true)}} onBlur={() => {setRangeFocus(false)}}/>
        </FormRange>
      )
      break
    default:
      inputComponent = <FormInput min="0" max="99" type={inputType?inputType:"text"} placeholder={placeholder} required={required?required:false} onChange={onChange} width={width} value={value}/>

  }

  return (
    <InputWrapper style={style}>
      <TitleWrapper>
        <label>
          <Reg16>
            {title}
          </Reg16>
        </label>
        {required &&
          <span style={{color: colors.red}}>&nbsp;*</span>
        }
      </TitleWrapper>
      {inputComponent}
      {info &&
        <InfoIconWrapper onMouseEnter={() => {setInfoHover(true)}} onMouseLeave={() => {setInfoHover(false)}} onClick={() => {setInfoHover(!infoHover)}}>
          <IoInformationOutline/>
        </InfoIconWrapper>
      }

      <InfoWrapper infoHover={infoHover}>
        {info}
      </InfoWrapper>

    </InputWrapper>
  )
}

export default Input