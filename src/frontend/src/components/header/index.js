import React from "react";
import Button from '@mui/material/Button';

const Header = (  ) => {
    return (
        <header className="container mx-auto p-5 grid">
            <div className="grid grid-cols-2 gap-4 items-center">
                <div className="flex flex-row space-x-8">
                    <a href="/">
                        Home
                    </a>
                    <a href="/cursos">
                        Cursos
                    </a>
                    <a href="/sobre-nos">
                        Sobre Nós
                    </a>
                    <a href="/contato">
                        Contato
                    </a>
                </div>
                <div className="flex flex-row space-x-8 justify-end">
                    <a href="/login">
                        <button className="p-3 px-4  rounded-md btn-secondary flex" > 
                            Login
                        </button>         
                    </a>
                    <a href="/matricular">
                        <button className="p-3 px-4 rounded-md btn-primary flex items-center justify-center gap-2">
                            Matricule-se 
                            <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
                            </svg>
                        </button>   
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;