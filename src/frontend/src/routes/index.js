import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Matriculas from "../pages/Matriculas";
import CadastrarTurmas from "../pages/CadastrarTurma";

const Router = (  ) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/matricular" element={<Matriculas />} />
                <Route path="/cadastrar-turma" element={<CadastrarTurmas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;