import { useState } from "react"
import { BoxButton, FormButton } from "../../../components/buttons"
import Input from "../../../components/input"
import { BodyWrapper, FormPageWrapper } from "./style"
import Header from "../../../components/header"

/*
Props:
*/

const Industry = ({page, onBackClick, onNextClick, thisPage}) => {

  const boxNames = ["Information Technology","Medicine","Business","Agriculture","CTE"]
  const [boxes, setBoxes] = useState(new Array(boxNames.length).fill(false))

  const onSubmit = (e) => {
    e.preventDefault()
    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="Which industries are you interested in?" onClick={onBackClick}/>
      <form onSubmit={(e) => {onSubmit(e)}} id="form">
        <BodyWrapper>
          {boxNames.map((name, index) => {
            return (
              <BoxButton title={name} index={index} boxes={boxes} setBoxes={setBoxes} 
                style={{margin: "30px 0px", transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`, transition: 'transform 1s', transitionDelay: `${75 * index}ms`, transitionProperty: 'transform'}}
              />
            )
          })}
        </BodyWrapper>
        <FormButton type={'form'}/>
      </form>
    </FormPageWrapper>
  )
}

export default Industry