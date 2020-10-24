import React, { Component } from 'react'
import { Paper, TextField } from "@material-ui/core";

export default class SearchBar extends Component {

    state={
        searchTerm:""
    }

    handleChange=(e)=>{
         this.setState({
             searchTerm:e.target.value
         })
    }

    handleSubmit=(e)=>{

        e.preventDefault();
        const { searchTerm}=this.state;
        const {onFormSubmit}=this.props;

        onFormSubmit(searchTerm);

        
    }
    render() {
        return (
            <Paper elevation={12} style={{ padding: "15px" }}> 
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search.." onChange={this.handleChange}>

                    </TextField>
                </form>
            </Paper>
        )
    }
}
