import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components/index'
import StateProps from '@/presentation/context/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
  validation: Validation
  authentication: Authentication
}

const defaultContextState = {
  isLoading: false,
  mainError: '',
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const history = useNavigate()
  const [state, setState] = useState(defaultContextState)

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState({
        ...state,
        isLoading: true,
      })
      const account = await authentication.auth({
        email: state.email,
        password: state.password,
      })
      localStorage.setItem('accessToken', account.accessToken)
      history('/')
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message,
      })
    }
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <StateProps.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button
            data-testid="submit"
            disabled={!!state.emailError || !!state.passwordError}
            type="submit"
          >
            Entrar
          </button>
          <Link data-testid="signup" to="/signup">
            Criar conta
          </Link>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </StateProps.Provider>
      <Footer />
    </div>
  )
}

export default Login
