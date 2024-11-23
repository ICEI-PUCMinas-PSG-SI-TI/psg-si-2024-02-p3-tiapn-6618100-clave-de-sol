import React from 'react';

import Router from "./routes/"
import Footer from './components/footer';
import Header from './components/header';


function App() {
 return (
    <div className="App">
        <Header />
        <main className='p-3'>
            <Router />
        </main>
        <Footer />
  </div>
 );
}

export default App;