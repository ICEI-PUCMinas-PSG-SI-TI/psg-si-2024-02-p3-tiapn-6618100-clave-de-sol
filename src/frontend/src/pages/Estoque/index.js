import React, {useEffect, useRef, useState} from "react";
import {openApi} from "../../services/api";
import toast from "react-hot-toast";

const Estoque = () => {

    const [listInstrumentos, setListInstrumentos] = useState(null);
    const categoriaInstrumento = useRef(null);
    const condicaoInstrumento = useRef(null);

    async function handleSaveStock(event) {
        event.preventDefault();

        const form = event.target;
        const quantidade = form.quantidade.value;
        const instrumentoId = form.instrumento.value;

        const estoqueModel = {
            codigo_administrador: 3,
            codigo_instrumento: instrumentoId,
            quantidade: quantidade,
        };

        try {
            await openApi.post("/estoque", estoqueModel);
            toast.success("Estoque criado com sucesso!");
        } catch (err) {
            if (err.response && err.response.data && err.response.data.title) {
                toast.error(err.response.data.title);
            } else {
                toast.error("Erro ao criar estoque.");
            }
        }
    }


    const fetchData = async () => {
        try{
            const {data: listInstrumentos} = await openApi.get("/instrumento");
            setListInstrumentos(listInstrumentos);
        }catch(err){
            toast.error(err.response.data.title);
        }
    }

    function handleSelectInstrumento( event ){
        const instrumento = listInstrumentos.filter(i => i.codigo_instrumento == event.target.value)[0]

        categoriaInstrumento.current.value = instrumento.categoria;
        condicaoInstrumento.current.value = instrumento.condicao;
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-4xl font-extrabold text-acent text-center">
                    Estoque
                </h1>
                <form className="mt-10" onSubmit={handleSaveStock}>
                    <div className={'grid grid-cols-2 gap-4 mb-10'}>
                        <div>
                            <p className="px-3">
                                <label>
                                    Instrumentos
                                </label>
                                <select className="form-select" name={`instrumento`} onChange={handleSelectInstrumento}>
                                    {listInstrumentos && listInstrumentos.map((instrumento, key) => (
                                        <option key={key} value={instrumento.codigo_instrumento}>{instrumento.nome}</option>
                                    ))}
                                </select>
                            </p>
                        </div>
                        <div>
                            <p className="px-3">
                                <label>
                                    Quantidade
                                </label>
                                <input
                                    className="w-[100%] form-input"
                                    name={'quantidade'}
                                    type="text"
                                    placeholder=""
                                />
                            </p>
                        </div>
                    </div>
                    <div className={'grid grid-cols-2 gap-4 mb-10'}>
                        <div>
                            <p className="px-3">
                                <label>
                                    Categoria
                                </label>
                                <input
                                    className="w-[100%] form-input"
                                    name={'categoria'}
                                    type="text"
                                    placeholder="Selecione um instrumento"
                                    disabled={true}
                                    ref={categoriaInstrumento}
                                />
                            </p>
                        </div>
                        <div>
                            <p className="px-3">
                                <label>
                                    Condição
                                </label>
                                <input
                                    className="w-[100%] form-input"
                                    name={'condicao'}
                                    type="text"
                                    placeholder="Selecione um instrumento"
                                    disabled={true}
                                    ref={condicaoInstrumento}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="mt-20 mb-20 flex justify-end items-center gap-5">
                        <a href="/">
                            <button type={"button"} className="p-3 px-10 rounded-md btn-secondary flex">
                                Alterar
                            </button>
                        </a>
                        <a href="/matricular">
                            <button className="p-3 px-10 rounded-md btn-primary flex items-center justify-center gap-2">
                                Salvar
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
    )
}

export default Estoque;