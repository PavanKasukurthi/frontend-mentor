import styled from 'styled-components'

const Navbar = () => {
  return (
    <Wrapper>
      <h4>Where in the world?</h4>
      <a href="">Dark Mode</a>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin: 0 2rem;
  height: 4rem;
  box-shadow: 0 2px 10px grey;
  z-index: 10;
  width: 100%;
  background-color: var(--light-mode-background);

  h4 {
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--light-mode-text);
    font-weight: 600;
    margin-right: 2rem;
  }
`

export default Navbar
