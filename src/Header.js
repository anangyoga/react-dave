import React from "react";

function Header({ title }) {
  // we can use props as argument on the Header, and call it with props.[nameChildren] in any part of Header
  // or we can destructuring with curly-braces and write the props directly
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

// default Props

Header.defaultProps = {
  // when there's no props on the Header component, this is the default value shown on the front-end
  title: "Default Title",
};

export default Header;
