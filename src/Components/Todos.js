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

const PropType = {
  todos: Prop.PropTypes.arrayOf(
    Prop.PropTypes.shape({
      id: Prop.ID,
      title: Prop.PropTypes.string,
      done: Prop.PropTypes.bool,
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
