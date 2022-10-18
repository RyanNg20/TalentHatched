export const name = (e) => {
  const value = e.target.value
  const onlyLetters = /^[A-Za-z]*$/

  if (value == "") e.target.setCustomValidity("")
  else if (!onlyLetters.test(value)) e.target.setCustomValidity("Should only contain letters")
  else e.target.setCustomValidity("")
}

export const phone = (e) => {
  const value = e.target.value
  const hasLetters = /[a-zA-Z]/

  if (value == "") e.target.setCustomValidity("")
  else if (hasLetters.test(value)) e.target.setCustomValidity("Phone number cannot have letters")
  else if (value.length < 10 || value.length > 10) e.target.setCustomValidity("Invalid number of digits")
  else if (value[0] < '7') e.target.setCustomValidity("Invalid phone number")
  else e.target.setCustomValidity("")
}
//for email, set type to email
export const industry = (e, boxRefs, setRequired) => {
  if (boxRefs.some((boxRef) => boxRef.current.checked)) {
    boxRefs.forEach((boxRef) => {
      boxRef.current.setCustomValidity("")
    })
    setRequired(false)
  }
  else e.target.setCustomValidity("Select at least one box")
}