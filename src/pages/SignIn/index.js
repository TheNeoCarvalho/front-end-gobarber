import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { Form, Input } from "@rocketseat/unform";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido")
    .required("O email é obrigatório."),
  password: Yup.string().required("A senha é obrigatória")
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar conta</button>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
