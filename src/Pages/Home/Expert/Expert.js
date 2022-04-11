import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col-12 col-md-6 col-lg-4 g-4">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {name} </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Expert;
