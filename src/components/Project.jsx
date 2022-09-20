import React from "react";
import Card from "react-bootstrap/Card";

class Project extends React.Component {
    render() {
        return (
            <Card className="project" style={{ width: "25rem" }}>
                <a href={this.props.link} target="_blank">
                    <img src={this.props.image} alt={this.props.title} />
                </a>
                <h1>{this.props.title}</h1>
                <a href={this.props.repoLink} target="_blank">
                    Github repository
                </a>
                <p>{this.props.description}</p>
            </Card>
        );
    }
}

export default Project;
