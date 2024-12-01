import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {openApi} from "../../services/api";


const CadastrarTurmas = (  ) => {
    const [listInstrumentos, setListInstrumentos] = useState(null);
    const [listCursos, setListCursos] = useState(null);

    const urlBackend = "http://localhost:8080/api";

    const fetchData = async (  ) => {
        try{

            const resCursos = await fetch(`${urlBackend}/Turma`);
            const resInstrumentos = await fetch(`${urlBackend}/Instrumento`);

            setListInstrumentos( await resInstrumentos.json() );
            setListCursos( await resCursos.json() );
        }catch(err){

        }
    }

    async function handleCreateClass( event ){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const classModel = {
            codigo_turma: 0,
            nome: data.nome,
            sala: 0,
            nivel: data.nivel,
            duracao: data.duracao,
            numero_vagas: data.numero_vagas,
        }

        try{
            // Substituir por API privada
            await openApi.post("/Turma", classModel);
            toast.success("Turma adicionada com sucesso")
        }catch(err){
            toast.error(err.response.data.title);
        }
    }

    useEffect(() => {
        fetchData(  );
    }, []);

    return (
        <form onSubmit={ handleCreateClass }>
            <div className="container mx-auto pb-10">
                <div className={`text-center`}>
                    <h1 className={`text-acent text-3xl font-extrabold mb-10`}>
                        Cadastro Turma
                    </h1>
                    <div className={`grid grid-cols-2 gap-4 text-start mb-5`}>
                        <div className={`mb-5`}>
                            <p className="px-3">
                                <label>
                                    Nome da turma
                                </label>
                                <input className="w-[100%] form-input" type="text" name={'nome'}
                                       placeholder="Nome da turma"/>
                            </p>
                        </div>
                        <div className={`mb-5`}>
                            <p className="px-3">
                                <label>
                                    Instrumentos
                                </label>
                                <select name={`instrumento`} className="form-select">
                                    {listInstrumentos && listInstrumentos.map((instrumento) => (
                                        <option value={instrumento.codigo_instrumento}>{instrumento.nome}</option>
                                    ))}
                                </select>
                            </p>
                        </div>
                        <div className={`mb-5`}>
                            <p className="px-3">
                                <label>
                                    Professor responsável
                                </label>
                                <input className="w-[100%] form-input" type="text" name={'professor'} placeholder=""/>
                            </p>
                        </div>
                        <div className={`mb-5`}>
                            <label>
                                Nível da Turma
                            </label>
                            <select className="form-select" name={'nivel'}>
                                {listCursos && listCursos.map((curso) => (
                                    <option value={curso.codigo_turma}>{curso.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={`grid grid-cols-3 gap-4 text-start mb-10`}>
                        <p className="px-3">
                            <label>
                                Duração de aula
                            </label>
                            <input className="w-[100%] form-input" type="number" name={'duracao'} placeholder="0"/>
                        </p>
                        <p className="px-3">
                            <label>
                                Número de vagas
                            </label>
                            <input className="w-[100%] form-input" type="number" name={'numero_vagas'} placeholder="0"/>
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
                            Salvar
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                 viewBox="0 0 24 24">
                                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </form>
    )
}

export default CadastrarTurmas;