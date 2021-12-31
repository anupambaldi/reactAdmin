import React from 'react';
import Prop from '../utils/propTypes';

import {
  ListGroup,
  ListGroupItem,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

export const PropType = {
  todos: PropType.arrayOf(
    PropType.shape({
      id: PropType.ID,
      title: PropType.string,
      done: PropType.bool,
    })
  ),
};

const Todos = ({ todos, ...restProps }) => {
  return (
    <ListGroup flush {...restProps}>
      {todos.map(({ id, title, done } = {}) => (
        <ListGroupItem key={id} className="border-0">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" checked={done} readOnly />
              {done ? <strike>{title}</strike> : <span>{title}</span>}
            </Label>
          </FormGroup>
        </ListGroupItem>
      ))}
      <Button block>Add</Button>
    </ListGroup>
  );
};

Todos.PropType = PropType;

Todos.defaultProps = {
  todos: [],
};

export default Todos;
