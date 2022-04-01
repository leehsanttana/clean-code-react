import React, { useState, useEffect } from "react";
import Styles from "./login-styles.scss";
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from "@/presentation/components/index";
import StateProps from "@/presentation/context/form/form-context";
import { Validation } from "@/presentation/protocols/validation";

type Props = {
  validation?: Validation;
};

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    mainError: "",
  });

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate("email", state.email),
      passwordError: validation.validate("password", state.password),
    });
  }, [state.email, state.email]);

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <StateProps.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button data-testid="submit" disabled type="submit">
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </StateProps.Provider>

      <Footer />
    </div>
  );
};

export default Login;
