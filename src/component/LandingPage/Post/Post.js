import React from "react";
import './Post.css';
import { Card, Button } from "react-bootstrap";

const Post = (props) => {
  return (
    <div className = "Post-Item">
      <Card>
        <Card.Body>
          <Card.Title></Card.Title>

          <Card.Text>{props.postInfo.updates}</Card.Text>
          <Button variant="outline-info">Edit</Button>
          <Button variant="outline-danger">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
