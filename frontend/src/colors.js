

const colors = () => {
  let getColors = getComputedStyle(document.body)
  let allColors = {
    white: "#fff",
    denim: getColors.getPropertyValue('--denim'),
    orange: getColors.getPropertyValue('--orange'),
    spruce: getColors.getPropertyValue('--spruce'),
    slate: getColors.getPropertyValue('--slate'),
  }

  return allColors
}

export default colors