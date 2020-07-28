import React from 'react';
import Card from 'react-bootstrap/Card';


export default function ProjectCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Project X</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Template</Card.Subtitle>
        <Card.Text>Example text.</Card.Text>
        <Card.Link href="#">Link</Card.Link>
      </Card.Body>
    </Card>
  );
}