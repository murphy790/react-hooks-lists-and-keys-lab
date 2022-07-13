import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const primes = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return <nav>{primes}</nav>;
}

export default NavBar;
