import { Reg16, Reg18 } from "../style"
import { InputWrapper, TitleWrapper } from "./style"
import { FormInput } from "./style"

const Input = ({title, placeholder, type, margin, required, onChange}) => {

  return (
    <InputWrapper margin={margin}>
      <TitleWrapper>
        <Reg16>
          {title}
        </Reg16>
      </TitleWrapper>
      <FormInput type="text" placeholder={placeholder} required={required?required:false} onChange={onChange}/>
    </InputWrapper>
  )
}

export default Input