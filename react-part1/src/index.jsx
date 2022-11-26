import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./react-logo.png";

const site = (
    <section>
        <img width="40px" src={logo} />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </section>
);

ReactDOM.createRoot(document.getElementById("root")).render(site);