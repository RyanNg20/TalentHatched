import colors from "../colors"
import { Reg16, Reg18 } from "../style"
import { FormInput, FormSelect, FormTextArea, InputWrapper, TitleWrapper } from "./style"

const Input = ({title, placeholder, type, margin, required, onChange, width}) => {
  let inputComponent

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
            <FormInput type="text" placeholder={placeholder} required={required?required:false} onChange={onChange} list={'browsers'} width={width}/>
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
        inputComponent = <FormTextArea type="text" placeholder={placeholder} required={required?required:false} onChange={onChange} width={width}/>
        
        break;
    default:
      inputComponent = <FormInput type="text" placeholder={placeholder} required={required?required:false} onChange={onChange} width={width}/>

  }

  return (
    <InputWrapper margin={margin}>
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
    </InputWrapper>
  )
}

export default Input