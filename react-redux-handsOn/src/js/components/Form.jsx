import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class ConnectedFrom extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event){
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
        this.setState({ title: "" });
    }
    render(){
        const { title } = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={this.handleChange}
                />
                </div>
                <button type="submit">SAVE</button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedFrom);

export default Form;