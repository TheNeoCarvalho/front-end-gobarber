import React from "react";
import { Link } from "react-router-dom";

import * as Yup from "yup";

import { Form, Input } from "@rocketseat/unform";

import logo from "~/assets/logo.svg";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório."),
  email: Yup.string()
    .email("Insira um email válido")
    .required("O email é obrigatório."),
  password: Yup.string()
    .min(6, "No mínimo 6 caracteres")
    .required("A senha é obrigatória")
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Acessar conta</button>
        <Link to="/">Já possuo conta</Link>
      </Form>
    </>
  );
}
