import React, { useState } from "react";
import Styles from "./login-styles.scss";
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader,
} from "@/presentation/components/index";
import StateProps from "@/presentation/context/form/form-context";

type StateProps = {
  isLoading: boolean;
  errorMessage: string;
};

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: "",
  });
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <StateProps.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </StateProps.Provider>

      <Footer />
    </div>
  );
};

export default Login;
