import React from "react";
import toast from "react-hot-toast";

const Login = () => {

    async function handleLogin( event ){
        event.preventDefault();
        const formData = new FormData();
        const data = Object.fromEntries(formData);

        try{
            // Implement login
        }catch(err){
            toast.error(err.response.data.title);
        }
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold text-acent text-center">
                Login
            </h1>
            <form className={'my-12'} onSubmit={handleLogin}>
                <div className={'w-[50%] mx-auto'}>
                    <div className={'mb-10'}>
                        <p className="px-3">
                            <label>
                                Tipo de usuário
                            </label>
                            <select className="form-select" name={'tipo'}>
                                <option key={0}>Admin</option>
                                <option key={0}>Estudante</option>
                            </select>
                        </p>
                    </div>
                    <div className={'mb-10'}>
                        <p className="px-3">
                            <label>
                                Email
                            </label>
                            <input
                                className="w-[100%] form-input"
                                name={'email'}
                                type="text"
                                placeholder="exemplo@email.com"
                            />
                        </p>
                    </div>
                    <div className={'mb-10'}>
                        <p className="px-3">
                            <label>
                                Senha
                            </label>
                            <input
                                className="w-[100%] form-input"
                                name={'password'}
                                type="password"
                                placeholder="*******"
                            />
                        </p>
                    </div>
                    <div className="px-3">
                        <a className={'text-blue-700 underline text-sm'} href={'/'}>Esqueci minha senha</a>
                    </div>
                    <div className="mt-20 mb-20 grid grid-cols-2 gap-5">
                        <a href="/" className={'block'}>
                            <button type={"button"} className="p-3 px-4 w-[100%] text-center rounded-md btn-secondary">
                                Cancelar
                            </button>
                        </a>
                        <button className="p-3 px-4 rounded-md btn-primary flex items-center justify-center gap-2">
                            Acessar minha conta
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;