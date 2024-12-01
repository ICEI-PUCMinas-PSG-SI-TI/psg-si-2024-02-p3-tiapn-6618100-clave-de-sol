import "./assets/index.css"
import React, {useEffect, useState} from "react";
import {openApi} from "../../services/api";
import toast from "react-hot-toast";

const Matriculas = (  ) => {

    const [methodPayment, setMethodPayment] = useState(null);
    const [listCursos, setListCursos] = useState(null);
    const [listInstrumentos, setListInstrumentos] = useState(null);
    const [admCode, setAdmCode] = useState(null);

    const handleChangeMethodPayment = ( method ) => {
        setMethodPayment( method )
    }

    const fetchData = async () => {
        try {

            const {data: cursosData} = await openApi(`/Turma`);
            const {data: instrumentosData} = await openApi.get("/Instrumento");
            const {data: admData} = await openApi.get("/Administrador");

            setListCursos(cursosData); // Atualiza o state
            setListInstrumentos(instrumentosData);
            setAdmCode(admData[0].codigo_administrador);
        } catch (e) {
            console.error("Erro ao buscar dados:", e); // É bom logar o erro
        }
    };

    async function handleEnroll( event ){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const matriculaModel = {

        }

        try{
            await openApi.post("/Matricula", matriculaModel);
            toast.success("Cadastro criado com sucesso!");
        }catch (err){
            console.log(err.response.data.title)
            toast.error(err.response.data.title);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-4xl font-extrabold text-acent text-center" >
                    Matricule-se
                </h1>
                <form className="mt-10" onSubmit={handleEnroll}>
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <div>
                            <p className="px-3">
                                <label>
                                    Nome completo
                                </label>
                                <input className="w-[100%] form-input" name={'nome'} type="text" placeholder="Nome completo"/>
                            </p>
                        </div>
                        <div>
                            <p className="px-3">
                                <label>
                                    Data de nascimento
                                </label>
                                <input className="w-[100%] form-input" name={'data_nascimento'} type="date" placeholder=""/>
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <div>
                            <p className="px-3">
                                <label>
                                    Telefone
                                </label>
                                <input className="w-[100%] form-input" type="text" name={'telefone'} placeholder="(99) 99999-9999"/>
                            </p>
                        </div>
                        <div>
                            <p className="px-3">
                                <label>
                                    Email
                                </label>
                                <input className="w-[100%] form-input" type="email" name={'email'} placeholder="exemplo@gmail.com"/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-acent text-2xl mb-5">
                            Endereço
                        </h2>
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div>
                                <p className="px-3">
                                    <label>
                                        Rua
                                    </label>
                                    <input className="w-[100%] form-input" type="text" name={'rua'} placeholder=""/>
                                </p>
                            </div>
                            <div>
                                <p className="px-3">
                                    <label>
                                        Bairro
                                    </label>
                                    <input className="w-[100%] form-input" type="text" name={'bairro'} placeholder=""/>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div>
                                <p className="px-3">
                                    <label>
                                        Número/Bloco
                                    </label>
                                    <input className="w-[100%] form-input" type="text" name={'numero'} placeholder=""/>
                                </p>
                            </div>
                            <div>
                                <p className="px-3">
                                    <label>
                                        Cep
                                    </label>
                                    <input className="w-[100%] form-input" type="text" name={'cep'} placeholder=""/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-acent text-2xl mb-5">
                            Seleção de cursos
                        </h2>
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div>
                                <p className="px-3">
                                    <label>
                                        Cursos
                                    </label>
                                    <select className="form-select" name={`cusrso`}>
                                        { listCursos && listCursos.map(( curso, key ) => (
                                            <option key={key} value={curso.codigo_turma}>{ curso.nome }</option>
                                        ))}
                                    </select>
                                </p>
                            </div>
                            <div>
                                <p className="px-3">
                                    <label>
                                        Instrumentos
                                    </label>
                                    <select className="form-select" name={`instrumento`}>
                                        { listInstrumentos && listInstrumentos.map(( instrumento, key ) => (
                                            <option key={key} value={instrumento.codigo_instrumento}>{ instrumento.nome }</option>
                                        ))}
                                    </select>
                                </p>
                            </div>
                            <div className="mt-10">
                                <p className="px-3">
                                    <label>
                                        Disponibilidade de horário
                                    </label>
                                    <select className="form-select" name={'disponibilidade'}>
                                        <option value="" disabled selected>Selecione uma opção</option>
                                        <option value="segunda">Segunda</option>
                                        <option value="terca">Terça</option>
                                        <option value="quarta">Quarta</option>
                                        <option value="quinta">Quinta</option>
                                        <option value="sexta">Sexta</option>
                                        <option value="sabado">Sábado</option>
                                        <option value="domingo">Domingo</option>
                                    </select>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-acent text-2xl mb-5">
                            Pagamento
                        </h2>
                        <div className="w-[30%] mb-10">
                            <div>
                                <p className="px-3">
                                    <label>
                                        Planos
                                    </label>
                                    <select className="form-select" name={'plano'}>
                                        <option value="mensagel">Mensal</option>
                                        <option value="trimestral">Trimestral</option>
                                        <option value="anual">Anual</option>
                                    </select>
                                </p>
                            </div>
                        </div>
                        <div className="mb-10">
                            <div className="grid grid-cols-3 gap-4 mb-10">
                                <label
                                    className={`px-3 method-payment ${methodPayment === "cartao_credito" ? "method-payment-selected" : ""}`}>
                                    <input
                                        type="radio"
                                        name="metodo_pagamento"
                                        value={`cartao_credito`}
                                        onChange={() => handleChangeMethodPayment('cartao_credito')}
                                    />
                                    <span className="ps-2">
                                        Cartão de crédito
                                    </span>
                                </label>
                                <label
                                    className={`px-3 method-payment ${methodPayment === "boleto" ? "method-payment-selected" : ""}`}>
                                    <input
                                        type="radio"
                                        name="metodo_pagamento"
                                        value={`boleto`}
                                        onChange={() => handleChangeMethodPayment('boleto')}
                                    />
                                    <span className="ps-2">
                                        Boleto
                                    </span>
                                </label>
                                <label
                                    className={`px-3 method-payment ${methodPayment === "pix" ? "method-payment-selected" : ""}`}>
                                    <input
                                        type="radio"
                                        name="metodo_pagamento"
                                        value={`pix`}
                                        onChange={() => handleChangeMethodPayment('pix')}
                                    />
                                    <span className="ps-2">
                                        PIX
                                    </span>
                                </label>
                            </div>
                            <div className={`grid grid-cols-2 gap-4 mb-10`}>
                                <p className="px-3">
                                    <label>
                                        Nome
                                    </label>
                                    <input className="w-[100%] form-input" name={'nome_cartao'} type="text" placeholder=""/>
                                </p>
                                <p className="px-3">
                                    <label>
                                        Data de Expiração
                                    </label>
                                    <input className="w-[100%] form-input" type="text" name={'data_expiracao'} placeholder="00/00"/>
                                </p>
                                <p className="px-3">
                                    <label>
                                        Número
                                    </label>
                                    <input className="w-[100%] form-input" type="text" name={'numero_cartao'} placeholder="5555 5555 5555 5555"/>
                                </p>
                                <p className="px-3">
                                    <label>
                                        Código de Segurança
                                    </label>
                                    <input className="w-[100%] form-input" type="text" name={'cod_seguranca'} placeholder="XXX"/>
                                </p>
                            </div>
                            <p className={`flex items-center justify-center`}>
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect y="4" width="12" height="10" rx="2" fill="#4BB769"/>
                                    <path
                                        d="M6 10C7.10457 10 8 9.10457 8 8C8 6.89543 7.10457 6 6 6C4.89543 6 4 6.89543 4 8C4 9.10457 4.89543 10 6 10Z"
                                        fill="white"/>
                                    <path
                                        d="M7 11V10C7 9.44772 6.55228 9 6 9C5.44772 9 5 9.44772 5 10V11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11Z"
                                        fill="white"/>
                                    <path
                                        d="M3 4.5C3 3.63808 3.35038 2.73993 3.93117 2.06161C4.51044 1.38507 5.25079 1 6 1C7.64518 1 9 2.35378 9 4.05V4.5V5H3V4.5Z"
                                        stroke="#4BB769"/>
                                </svg>
                                <span className={`ps-2`}>
                                    Informações seguras e criptografadas
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-20 mb-20 flex justify-end items-center gap-5">
                        <a href="/">
                            <button type={"button"} className="p-3 px-4  rounded-md btn-secondary flex">
                                Cancelar
                            </button>
                        </a>
                        <a href="/matricular">
                            <button className="p-3 px-4 rounded-md btn-primary flex items-center justify-center gap-2">
                                Realizar matrícula
                                <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                     viewBox="0 0 24 24">
                                    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                                </svg>
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Matriculas;