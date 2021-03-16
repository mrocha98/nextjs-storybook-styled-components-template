import * as S from './main.styles'

export const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Image of an atom." />

      <S.Title>Template</S.Title>
      <S.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </S.Description>

      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="A developer coding in a desktop."
      />
    </S.Wrapper>
  )
}
