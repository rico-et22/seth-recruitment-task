import styled, {css} from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: .5rem;
  max-width: 25rem;
  margin: auto;
  border: 1px solid #FCA5A5;
  ${({status}) => 
    status === "error" &&
    css`
      background-color: #FECACA;
      border: 1px solid #FCA5A5;
    `
  }}
  ${({status}) => 
    status === "loading" &&
    css`
      background-color: #BAE6FD;
      border: 1px solid #7DD3FC;
    `
  }}
`
const Header = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`

const ErrorMessage = (props) => {
  const {status} = props
  return (
    <Wrapper status={props.status}>
      <Header>
        {status === "error" && 'Wystąpił błąd ładowania danych.'}
        {status === "loading" && 'Trwa ładowanie danych...'}
        {status === "noItems" && 'Brak komentarzy w rejestrze.'}
      </Header>
    </Wrapper>
  )
}

export default ErrorMessage