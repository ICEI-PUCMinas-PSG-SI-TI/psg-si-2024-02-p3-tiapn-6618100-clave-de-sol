import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Matriculas from "../pages/Matriculas";
import CadastrarTurmas from "../pages/CadastrarTurma";
import Estoque from "../pages/Estoque";
import Login from "../pages/Login";
import CadastreSe from "../pages/Cadastre-se";
import Home from "../pages/Home";

const Router = (  ) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/matricular" element={<Matriculas />} />
                <Route path="/cadastrar-turma" element={<CadastrarTurmas />} />
                <Route path={"/estoque"} element={<Estoque />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/cadastre-se"} element={<CadastreSe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;