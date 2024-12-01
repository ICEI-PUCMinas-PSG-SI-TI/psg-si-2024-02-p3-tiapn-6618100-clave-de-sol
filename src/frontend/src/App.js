import React from 'react';

import Router from "./routes/"
import Footer from './components/footer';
import Header from './components/header';
import {Toaster} from "react-hot-toast";


function App() {
 return (
    <div className="App">
        <Toaster position="top-right" />
        <Header />
        <main>
            <Router />
        </main>
        <Footer />
  </div>
 );
}

export default App;