import React from "react";
import { Link } from "react-router-dom";
import logo from "~/assets/logo.svg";

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="" />
      <form>
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Acessar conta</button>
        <Link to="/register">Criar conta</Link>
      </form>
    </>
  );
}
