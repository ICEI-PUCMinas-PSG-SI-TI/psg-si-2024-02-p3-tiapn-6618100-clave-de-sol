import React from "react";
import toast from "react-hot-toast";

const CadastreSe = (  ) => {

    function handleSignup( event ){
        event.preventDefault();
        const formData = new FormData();
        const data = Object.fromEntries(formData);

        try{
            // Implementar Signup
        }catch(err){
            toast.error(err.response.data.title);
        }
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-extrabold text-acent text-center">
                Cadastre-se
            </h1>
            <form className={'my-12'} onSubmit={handleSignup}>
                <div className={'w-[50%] mx-auto'}>
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
                                type="text"
                                placeholder="*******"
                            />
                        </p>
                    </div>
                    <div className={'mb-10'}>
                        <p className="px-3">
                            <label>
                                Confirmação de senha
                            </label>
                            <input
                                className="w-[100%] form-input"
                                name={'confirm_password'}
                                type="text"
                                placeholder="*******"
                            />
                        </p>
                    </div>
                    <div className="mt-20">
                        <button className="p-3 px-4 rounded-md btn-primary block w-[100%]">
                            Acessar minha conta
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CadastreSe;