import React from 'react';
import './App.css';
import {Route, Navigate} from "react-router-dom";
import {store} from "./Redux/store";
import {Provider} from 'react-redux'

function App() {
    return (
        <div className="App">
                <Route path="/" element={<Navigate to="/auth/sign-up"/>}/>
        </div>
    );
}

export default App;
