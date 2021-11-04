import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import AllPost from "./AllPost/AllPost";
import PostForm from "./PostForm/PostForm";

function LandingPage() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {/* First column */}
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Bless Benedict Afetsi</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Software Developer
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
          {/* second Column */}
          <Col xs={6}>
            <PostForm />
            <hr/>
            <AllPost />
          </Col>
          {/* THird Column */}
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Add to your feed</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default LandingPage;
