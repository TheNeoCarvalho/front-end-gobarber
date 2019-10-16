import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.svg";

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="" />
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Acessar conta</button>
        <Link to="/">Já possuo conta</Link>
      </form>
    </>
  );
}
