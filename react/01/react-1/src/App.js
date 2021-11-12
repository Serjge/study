import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                    <Header/>
                    <Navbar/>
                    <Routes>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                    </Routes>
                    {/*<Profile/>*/}
            </div>
        </BrowserRouter>
);
};

function Dialogs() {
    return (
        <div>Dialog</div>
    )
}

export default App;
