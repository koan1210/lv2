// Layout.js

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
