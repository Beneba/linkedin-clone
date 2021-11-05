import React, { Component } from "react";
// import {Card, Button} from 'react-bootstrap';
import { InputGroup, Form, Card, Button, FormControl } from "react-bootstrap";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: "",
    };
  }

  handleChange = (e)=> {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
      
  }
  handleSubmit = (e)=> {
    e.preventDefault();
    console.log(this.state, "post updated")
    this.props.addPost(this.state)
    this.setState({
      updates: ""
    })
  }
  

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Form onSubmit = {this.handleSubmit}>
            <InputGroup  >
              <FormControl
                as="textarea"
                aria-label="With textarea"
                placeholder="Post"
                name="updates"
                onChange={this.handleChange}
              />
              <Button variant="outline-primary" type="submit" onSubmit = {this.handleSubmit} >
                Post
              </Button>
            </InputGroup>
              </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PostForm;
