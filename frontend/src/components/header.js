import { BackButton } from "./buttons"
import { Bold48, HeaderWrapper } from "./style"

const Header = ({text, onClick}) => {
  return (
    <HeaderWrapper>
      <BackButton onClick={onClick}/>
      <Bold48 style={{margin: '0px 0px 0px 50px'}}>
        {text}
      </Bold48>
    </HeaderWrapper>
  )
}

export default Header