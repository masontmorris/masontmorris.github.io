import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NavBar />
        <div className="projects-container">
            <Project
                title="Fan Food"
                description="A simple web app which finds restaurants and bars near upcoming live events. Made using vanilla Javascript, JQuery, the TicketMaster Discover and Foursquare Places APIs, and Bulma for styling."
                link="https://masontmorris.github.io/fanfood/"
                image="./src/assets/fanfood-screenshot.png"
            />
            <Project
                title="HONGRY"
                description="A web app where users can create and login to accounts to upload and view recipes. Made using Node, Express, Handlebars, MySQL, Sequelize, Cloudinary, Multer, Bcrypt, and Bootstrap for styling."
                link="https://hongry.herokuapp.com/"
                image="./src/assets/hongry-screenshot.png"
            />
        </div>
    </React.StrictMode>
);
