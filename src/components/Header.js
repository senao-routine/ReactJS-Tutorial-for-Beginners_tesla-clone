import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model Y</a>
        </p>
      </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Menu = styled.div``;