import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

export class Post extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getData();
    }
    
    render(){
        return(
            <ul>
                {this.props.articles.map(art => (
                    <li key={art.id}>{art.title}</li>
                ))}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        articles: state.remoteArticles.slice(0,10)
    }
}

export default connect(mapStateToProps, { getData } )(Post)
