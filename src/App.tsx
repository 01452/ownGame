import './App.css'
import Game from "./components/Game.tsx";
import {Route, Routes} from "react-router";
import Login from "./components/Login.tsx";
import {useState} from "react";
import {UserNameContext} from "./utils/context.ts";

function App() {
    const [userName, setUserName] = useState("");
    return (
        <div>
            <UserNameContext value={{userName, setUserName}}>
                <Routes>
                    <Route path="/game" element={<Game/>}/>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </UserNameContext>
        </div>
    )
}

export default App
