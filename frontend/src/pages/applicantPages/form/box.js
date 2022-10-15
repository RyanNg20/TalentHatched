import { BoxStyle } from "./style"

const Box = ({onNextClick}) => {
  return <BoxStyle onClick={() => {onNextClick()}}/>
}

export default Box