import React, {useState} from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
    const [ color, setColor ] = useState("red");
    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick = {() => setColor("blue")}
                >Blue</button>
        </>
    )
}

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <FavoriteColor />
        </>
    )
};

export default Home;