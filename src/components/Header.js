import styled from "styled-components";

const Wrapper = styled.div`
  background: #141e30;
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  );
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  );
  position: relative;
  z-index: 2;
  padding: 3rem 0;
  margin-bottom: 2rem;
  @media (max-width: 767.98px) {
    padding: 3rem 1rem;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: -10px;
    left: 0;
    height: 110%;
    width: 100%;
    opacity: 0.8;
    background: inherit;
    -webkit-filter: blur(6px);
    -moz-filter: blur(6px);
    -o-filter: blur(6px);
    -ms-filter: blur(6px);
    filter: blur(6px);
  }
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 0;
  margin-bottom: 0.5rem;
  color: #eee;
  @media (max-width: 767.98px) {
    font-size: 2rem;
  }
`;

const Desc = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: #eee;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;
  @media (max-width: 767.98px) {
    font-size: 0.85rem;
  }
`;

const Header = (props) => {
  return (
    <Wrapper>
      <H1>Zarządzanie komentarzami 💬</H1>
      <Desc>panel administracyjny</Desc>
    </Wrapper>
  );
};

export default Header;
