import styled from 'styled-components'
import colors from '../components/colors'

export const BoxWrapper = styled.div`
  height: 250px;
  width: 350px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.halfWhite};
  border-radius: 10px;
`