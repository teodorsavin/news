import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const Article = props => (
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey={props.article.publishedAt}>
      {props.article.title}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={props.article.publishedAt}>
      <Card.Body>
        {props.article.content}
        <br />
        <a href={props.article.url} target="_blank" rel="noopener noreferrer">
          read more
        </a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default Article;
