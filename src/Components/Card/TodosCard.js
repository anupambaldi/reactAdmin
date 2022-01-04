import React from 'react';
import Prop from '../../utils/propTypes';

import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from 'reactstrap';

import Todos from '../../Components/Todos';

import backgroundImage from '../../assets/img/bg/background_1920-2.jpg';

const TodosCard = ({ image, title, subtitle, todos, ...restProps }) => {
  return (
    <Card {...restProps}>
      <div className="position-relative">
        <CardImg src={image} />
        <CardImgOverlay className="bg-dark" style={{ opacity: 0.2 }}>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardText className="text-white">{subtitle}</CardText>
        </CardImgOverlay>
      </div>
      <Todos todos={todos} />
    </Card>
  );
};

TodosCard.propTypes = {
  image: Prop.PropTypes.string,
  title: Prop.PropTypes.string,
  subtitle: Prop.PropTypes.string,
  // todos: TodosPropTypes.todos,
};

TodosCard.defaultProps = {
  image: backgroundImage,
  title: 'Tasks',
  subtitle: 'Due soon...',
};

export default TodosCard;
