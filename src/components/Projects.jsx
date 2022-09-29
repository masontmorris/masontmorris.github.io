import React from "react";
import Project from "./Project";
import fanfoodUrl from "/src/assets/fanfood-screenshot.webp";
import hongryUrl from "/src/assets/hongry-screenshot.webp";
import sapientUrl from "/src/assets/sapient-screenshot.webp";

class Projects extends React.Component {
    render() {
        return (
            <div id="projects">
                <Project
                    title="Fan Food"
                    description="A simple web app which finds restaurants and bars near upcoming live events. Made using vanilla Javascript, JQuery, the TicketMaster Discover and Foursquare Places APIs, and Bulma for styling."
                    link="https://masontmorris.github.io/fanfood/"
                    repoLink="https://github.com/masontmorris/fanfood"
                    image={fanfoodUrl}
                />
                <Project
                    title="HONGRY"
                    description="A web app where users can create and login to accounts to upload and view recipes. Made using Node, Express, Handlebars, MySQL, Sequelize, Cloudinary, Multer, Bcrypt, and Bootstrap for styling."
                    link="https://hongry.herokuapp.com/"
                    repoLink="https://github.com/Emmanuel6093/hongry"
                    image={hongryUrl}
                />
                <Project
                    title="Sapient"
                    description="A full stack web app where users can organize or volunteer for local community events. Made using React, Node, MongoDB, Mongoose, Express, GraphQL, and Apollo Server."
                    link="https://sapient-origin.herokuapp.com/"
                    repoLink="https://github.com/PrimitiveJ/Sapient-Community-Outreach-Application"
                    image={sapientUrl}
                />
            </div>
        );
    }
}

export default Projects;
