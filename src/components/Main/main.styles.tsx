import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    height: 50vh;
    width: 80vh;
    margin: 25vh auto;
    padding: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.xxlarge};
    margin: ${theme.spacings.xxsmall} 0;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
  `}
`

export const Illustration = styled.img`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    width: min(30rem, 100%);
  `}
`
