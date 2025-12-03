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
                    title="Unity level demo"
                    description="Sneak through the offices of a greedy real estate developer who's plotting to shut down the town's arcade!"
                    link="https://masontmorris.github.io/fanfood/"
                    repoLink="https://github.com/masontmorris/fanfood"
                    image={fanfoodUrl}
                />
            </div>
        );
    }
}

export default Projects;
