import Head from 'next/head'
import { FormEvent, useCallback, useRef } from 'react'

export default function Login() {

    const refForm = useRef<any>();

    const submitForm = useCallback((e: FormEvent) => {
        //não renderiza a pagina quando executa o submit do formulario
        e.preventDefault();

        if (refForm.current.checkValidity()) {

        } else {
            refForm.current.classList.add('was-validated')
        }

    }, [])

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                    height: '100vh'
                }}
            >
                <div
                    style={{
                        border: 2,
                        borderColor: '#ccc',
                        borderStyle: 'solid',
                        borderRadius: 8,
                        padding: 20,
                        maxWidth:400
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <h1
                            style={{ color: "#0d6efd" }}
                        >
                            Login
                        </h1>
                        <p>
                            Digite seus dados para entrar no sistema!
                        </p>
                    </div>
                    <hr />
                    <form
                        className='row g-3 needs-validation'
                        noValidate
                        ref={refForm}
                    >
                        <div
                            className='col-md-12'
                        >
                            <label
                                htmlFor='email'
                                className='form-label'
                            >
                                Email
                            </label>
                            <div
                                className='input-group has-validation'
                            >
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Digite o email'
                                    id="email"
                                    required
                                />
                                <div className='invalid-feedback'>
                                    Por favor digite seu email.
                                </div>
                            </div>
                        </div>
                        <div
                            className='col-md-12'
                        >
                            <label
                                htmlFor='senha'
                                className='form-label'
                            >
                                Senha
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Digite sua senha'
                                id='senha'
                                required
                            />
                            <div
                                className='invalid-feedback'
                            >
                                Por favor, digite sua senha.
                            </div>

                        </div>
                        <div
                            className='col-md-12'
                        >
                            <button
                                className='btn btn-primary mt-3'
                                type='submit'
                                onClick={(e) => submitForm(e)}
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
