import React, {useState, useEffect} from "react";
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
            <button
                type="button"
                onClick = {() => setColor("yellow")}
                >Yellow</button>
            <button
                type="button"
                onClick = {() => setColor("green")}
                >Green</button>
        </>
    )
}

const Home = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data))
    },[]);
    return (
        <>
            <h1>Home</h1>
            <FavoriteColor />
            <>
                {data &&
                    data.map((item) => {
                        return <p key={item.id}>{item.title}</p>;
                    })}
            </>
        </>
    )
};

export default Home;