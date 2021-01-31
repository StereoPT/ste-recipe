import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'; 

export const IngredientList = () => {
  return (
    <ListGroup className="mt-2">
      <ListGroupItem className="d-flex">
        <strong>Ingredient One</strong>
        <div className="ml-auto">
          <Link to="/edit/1" className="btn btn-warning mr-1">Edit</Link>
          <Button color="danger">Delete</Button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
}
