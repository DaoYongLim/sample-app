import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import $ from 'jquery';


class PostApi extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    console.log(this.state)
      var data = this.state;

      var setting = {
            "url" : "https://jsonplaceholder.typicode.com/posts", 
            "method" : "POST",
            "data" : data,
      }

      $.ajax(setting).done(function (response){
          console.log(response);
          console.log(response.id);
          document.getElementById("result").value = response.id;
      });

    }

  render() {
    return (
      <div>
        <h1>Post Value</h1>
        <form>
          Title:
          <TextField name="title" onChange={this.handleChange} style={{marginLeft: 15}}/>
          <br />
          Body:
          <TextField name="body" onChange={this.handleChange} style={{marginLeft: 10}} />
          <br />
          UserId:
          <TextField name="userId" onChange={this.handleChange} />
          <br />
          <br />
          <button
            type="button"
            onClick={this.handleClick}
            style={{ marginLeft: 10 }}
          >
            Submit
          </button>
          <br />
          <br />
          <TextField name="result" id="result"/>
          <br />
        </form>
      </div>
    );
  }
}

export default PostApi;
