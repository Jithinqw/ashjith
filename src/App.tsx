import React from 'react';
import { Routes, Route } from "react-router-dom";
import { NotFound } from './pages/notFound';
import { Main } from './pages/main';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
