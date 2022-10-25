import { useRef, useState } from "react"
import { FormButton } from "../../../components/buttons"
import { BoxInput } from "../../../components/input"
import { FormPageWrapper } from "./style"
import Header from "../../../components/header"
import { BodyWrapper } from "../../../components/style"
import { industry } from "../../../components/inputValidation"

const Industry = ({page, onBackClick, onNextClick, thisPage, industryNames, industryRefs}) => {

  const [required, setRequired] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault()

    onNextClick()
  }

  return (
    <FormPageWrapper page={page} thisPage={thisPage}>
      <Header text="Which industries are you interested in?" onClick={onBackClick}/>
      <form 
        onSubmit={onSubmit} 
        onInvalid={(e) => {e.target.setCustomValidity("Select at least one box")}}
        onInput={(e) => {industry(e, industryRefs, setRequired)}}>
        <BodyWrapper>
          {industryNames.map((name, index) => {
            return (
              <BoxInput
                key={name}
                title={name} 
                index={index} 
                style={{
                  margin: "30px 0px",
                  transform: `translateX(${page==thisPage?0:page<thisPage?-100:100}vw)`,
                  transition: 'transform 1s', transitionDelay: `${75 * index}ms`,
                  transitionProperty: 'transform',
                  pointerEvents: page==thisPage?'initial':'none',
                }}
                inputRef={industryRefs[index]}
                required={required}
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