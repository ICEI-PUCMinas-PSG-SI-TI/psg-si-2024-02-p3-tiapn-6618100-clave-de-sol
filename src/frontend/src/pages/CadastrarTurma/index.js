import {useEffect, useState} from "react";


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

        }finally {
            // Implementing loading
        }
    }

    useEffect(() => {
        fetchData(  );
    }, []);

    return (
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
                            <input className="w-[100%] form-input" type="text" placeholder="Nome da turma"/>
                        </p>
                    </div>
                    <div className={`mb-5`}>
                        <p className="px-3">
                            <label>
                                Nome completo
                            </label>
                            <select name={`instrumentos`} className="form-select">
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
                            <input className="w-[100%] form-input" type="text" placeholder=""/>
                        </p>
                    </div>
                    <div className={`mb-5`}>
                        <label>
                            Nome completo
                        </label>
                        <select className="form-select">
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
                        <input className="w-[100%] form-input" type="number" placeholder="0"/>
                    </p>
                    <p className="px-3">
                        <label>
                            Número de vagas
                        </label>
                        <input className="w-[100%] form-input" type="number" placeholder="0"/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CadastrarTurmas;