import React, { Component } from "react";
// import {Card, Button} from 'react-bootstrap';
import { InputGroup, Card, Button, FormControl } from "react-bootstrap";

class PostForm extends Component {
    
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            
            <InputGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
              <FormControl
                placeholder="Post"
                aria-label="Post"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-primary">
                Post
              </Button>
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PostForm;
