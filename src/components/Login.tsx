import {NavLink} from "react-router";
import {useContext, useRef} from "react";
import {UserNameContext} from "../utils/context.ts";

const Login = () => {
    const {setUserName} = useContext(UserNameContext);
    const userName = useRef<HTMLInputElement>(null);

    function handleSetNickName() {
        setUserName(userName.current!.value);
    }

    return (
        <div>
            <label>Login
                <input ref={userName} type={"text"} placeholder={"Your name"}></input>
            </label>
            <label>Password
                <input type={"password"} placeholder={"Your pass"}></input>
            </label>
            <NavLink to={"/game"}>
                <button onClick={()=>handleSetNickName()}>Sign In</button>
            </NavLink>
        </div>
    );
};

export default Login;