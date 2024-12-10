import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { openApi } from "../../services/api";

const CadastrarTurmas = () => {
    const [listInstrumentos, setListInstrumentos] = useState(null);
    const [listCursos, setListCursos] = useState([]);
    const [listProfessores, setListProfessores] = useState([]);
    const [filteredCursos, setFilteredCursos] = useState([]);
    const [filteredProfessores, setFilteredProfessores] = useState([]);
    const [selectedProfessor, setSelectedProfessor] = useState(null);
    const [selectedCurso, setSelectedCurso] = useState(null);

    const urlBackend = "http://localhost:8080/api";

    const fetchData = async () => {
        try {
            const resCursos = await fetch(`${urlBackend}/curso`);
            const resInstrumentos = await fetch(`${urlBackend}/instrumento`);
            const resProfessores = await fetch(`${urlBackend}/professor`);

            const cursos = await resCursos.json();
            const professores = await resProfessores.json();
            const instrumentos = await resInstrumentos.json();

            setListInstrumentos(instrumentos);
            setListCursos(cursos);
            setListProfessores(professores);

            setFilteredCursos(cursos);
            setFilteredProfessores(professores);
        } catch (err) {
            console.error("Erro ao carregar dados", err);
            toast.error("Erro ao carregar dados do backend");
        }
    };

    // Função para filtrar os cursos com base no professor selecionado
    const handleProfessorChange = (e) => {
        const professorId = e.target.value;
        setSelectedProfessor(professorId);

        if (professorId) {
            const professor = listProfessores.find(
                (prof) => prof.codigo_professor === parseInt(professorId)
            );

            if (professor) {
                // Filtrar cursos com base nas habilidades do professor
                const habilidades = professor.habilidades.split(", ");
                const cursosFiltrados = listCursos.filter((curso) =>
                    habilidades.some((habilidade) =>
                        curso.descricao.includes(habilidade)
                    )
                );
                setFilteredCursos(cursosFiltrados);
            }
        } else {
            setFilteredCursos(listCursos);
        }
    };

    // Função para filtrar os professores com base no curso selecionado
    const handleCursoChange = (e) => {
        const cursoId = e.target.value;
        setSelectedCurso(cursoId);

        if (cursoId) {
            const curso = listCursos.find(
                (curso) => curso.codigo_curso === parseInt(cursoId)
            );

            if (curso) {
                // Filtrar professores com base na descrição do curso
                const professoresFiltrados = listProfessores.filter(
                    (professor) =>
                        professor.habilidades
                            .split(", ")
                            .some((habilidade) =>
                                curso.descricao.includes(habilidade)
                            )
                );
                setFilteredProfessores(professoresFiltrados);
            }
        } else {
            setFilteredProfessores(listProfessores);
        }
    };

    async function handleCreateClass(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const classModel = {
            codigo_curso: data.curso,
            nome: data.nome,
            sala: parseInt(data.sala),
            nivel: data.nivel,
            duracao: data.duracao,
            numero_vagas: parseInt(data.numero_vagas),
            codigo_professor: data.professor,
        };

        try {
            await openApi.post("/turma/cadastrar", classModel);
            toast.success("Turma adicionada com sucesso");
        } catch (err) {
            console.error("Erro ao cadastrar turma", err);
            toast.error("Erro ao cadastrar turma");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <form onSubmit={handleCreateClass}>
            <div className="container mx-auto pb-10">
                <div className={`text-center`}>
                    <h1 className={`text-acent text-3xl font-extrabold mb-10`}>
                        Cadastro Turma
                    </h1>
                    <div className={`grid grid-cols-2 gap-4 text-start mb-5`}>
                        <div className={`mb-5`}>
                            <p className="px-3">
                                <label>Nome da turma</label>
                                <input
                                    className="w-[100%] form-input"
                                    type="text"
                                    name={'nome'}
                                    placeholder="Nome da turma"
                                />
                            </p>
                        </div>
                        <div className={`mb-5`}>
                            <p className="px-3">
                                <label>Instrumentos</label>
                                <select name={`instrumento`} className="form-select">
                                    {listInstrumentos &&
                                        listInstrumentos.map((instrumento) => (
                                            <option key={instrumento.codigo_instrumento} value={instrumento.codigo_instrumento}>
                                                {instrumento.nome}
                                            </option>
                                        ))}
                                </select>
                            </p>
                        </div>
                        <div className={`mb-5`}>
                            <p className="px-3">
                                <label>Professor responsável</label>
                                <select
                                    name="professor"
                                    className="form-select"
                                    onChange={handleProfessorChange}
                                >
                                    <option value="">Selecione um professor</option>
                                    {filteredProfessores &&
                                        filteredProfessores.map((professor) => (
                                            <option
                                                key={professor.codigo_professor}
                                                value={professor.codigo_professor}
                                            >
                                                {professor.nome}
                                            </option>
                                        ))}
                                </select>
                            </p>
                        </div>
                        <div className={`mb-5`}>
                            <label>Nível da Turma</label>
                            <select className="form-select" name={'nivel'}>
                                <option value="Básico">Básico</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                        </div>
                    </div>
                    <div className={`grid grid-cols-3 gap-4 text-start mb-10`}>
                        <p className="px-3">
                            <label>Duração de aula (horas:minutos)</label>
                            <input
                                className="w-[100%] form-input"
                                type="time"
                                name={'duracao'}
                                placeholder="00:00"
                            />
                        </p>
                        <p className="px-3">
                            <label>Número de vagas</label>
                            <input
                                className="w-[100%] form-input"
                                type="number"
                                name={'numero_vagas'}
                                placeholder="0"
                            />
                        </p>
                        <p className="px-3">
                            <label>Curso</label>
                            <select
                                name="curso"
                                className="form-select"
                                onChange={handleCursoChange}
                            >
                                <option value="">Selecione um curso</option>
                                {filteredCursos &&
                                    filteredCursos.map((curso) => (
                                        <option
                                            key={curso.codigo_curso}
                                            value={curso.codigo_curso}
                                        >
                                            {curso.nome}
                                        </option>
                                    ))}
                            </select>
                        </p>
                    </div>
                </div>
                <div className="mt-20 mb-20 flex justify-end items-center gap-5">
                    <a href="/">
                        <button type={"button"} className="p-3 px-4 rounded-md btn-secondary flex">
                            Cancelar
                        </button>
                    </a>
                    <button type="submit" className="p-3 px-4 rounded-md btn-primary flex items-center justify-center gap-2">
                        Salvar
                        <svg
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CadastrarTurmas;
