import styled from 'styled-components'
import colors from './colors'

export const Bold48 = styled.h1`
    font-size: 48px;
    font-weight: 800;
    font-family: Red Hat Display;
`

export const Bold24 = styled.h2`
    font-size: 24px;
    font-weight: 700;
    font-family: Red Hat Display;
    margin: 0px;
`
export const Reg20 = styled.h4`
    font-size: 20px;
    font-weight: 400;
    font-family: Red Hat Display;
    margin: 0px;
`
export const Reg18 = styled.h5`
    font-size: 18px;
    font-weight: 400;
    font-family: Red Hat Display;
    margin: 0px;
`
export const Reg16 = styled.h6`
    font-size: 16px;
    font-weight: 400;
    font-family: Red Hat Display;
    margin: 0px;
`
export const ItaReg20 = styled.h1`
    font-size: 20px;
    font-weight: 400;
    font-family: Red Hat Display Italic;
    margin: 0px;
`

export const PageWrapper = styled.div`
    padding: 0px 10%;
    overflow-x: hidden;
    position: relative;
    width: 80vw;
    height: 100vh;
`

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 100px;
`

export const TablesWrapper = styled.div`
    overflow-x: auto;
    margin: 100px 0px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const NavWrapper = styled.div`
    margin: 15px 0px 0px 40px;
`

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${colors.halfWhite}
`

export const BodyWrapper = styled.div`
  margin: 50px 0px 70px  100px;
`

