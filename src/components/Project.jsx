import React from "react";
import Card from "react-bootstrap/Card";

class Project extends React.Component {
    componentDidMount() {
        document.getElementById(this.props.title).src = this.props.image;
    }
    render() {
        return (
            <Card className="project" style={{ width: "25rem" }}>
                <a href={this.props.link} target="_blank">
                    <img src="" alt={this.props.title} id={this.props.title} />
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
