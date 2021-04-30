import styled from "styled-components";

const Wrapper = styled.div`
background: #141E30;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
position: relative;
z-index: 2;
padding: 3rem 0;
margin-bottom: 2rem;
&::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: -10px;
  height: 110%;
  width: 100%;
  opacity: 0.8;
  
  /* Declaring our shadow color inherit from the parent (button) */
  background: inherit;
  
  /* Blurring the element for shadow effect */
  -webkit-filter: blur(6px);
  -moz-filter: blur(6px);
  -o-filter: blur(6px);
  -ms-filter: blur(6px);
  filter: blur(6px);
}
`

const H1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 0;
  margin-bottom: .5rem;
  color: #eee;
`

const Desc = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: #eee;
  text-transform: uppercase;
  letter-spacing: .5rem;
  text-align: center;
`

const Header = (props) => {
  return (
    <Wrapper>
      <H1>Zarządzanie komentarzami 💬</H1>
      <Desc>panel administracyjny</Desc>
    </Wrapper>
  )
}

export default Header