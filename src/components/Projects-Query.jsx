import React from "react";
import Media from "react-media";
import Projects from "./Projects";
import ProjectCarousel from "./ProjectCarousel";

class ProjectQuery extends React.Component {
    render() {
        return (
            <div id="projects-container">
                <Media queries={{ mobile: "(max-width: 599px)", pc: "(min-width: 600px)" }}>
                    {(matches) => (
                        <div>
                            {matches.mobile && <ProjectCarousel />}
                            {matches.pc && <Projects />}
                        </div>
                    )}
                </Media>
            </div>
        );
    }
}

export default ProjectQuery;
