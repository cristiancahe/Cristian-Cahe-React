import React from 'react';
import Card from 'react-bootstrap/Card';


export default function ProjectCards() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Salvo</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Online, sea-battle game, made with Java.</Card.Subtitle>
        <Card.Text>Example text.</Card.Text>
        <Card.Link href="#">Link</Card.Link>
      </Card.Body>
    </Card>
  );
}