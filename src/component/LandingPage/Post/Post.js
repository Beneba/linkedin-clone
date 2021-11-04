import React, { Component } from "react";
import { Card, Button, FormControl } from "react-bootstrap";


class Post extends Component {
  render() {
    return (
      <div>
        <Card >
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="outline-info">Dark</Button>
            <Button variant="outline-danger">Dark</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Post;
