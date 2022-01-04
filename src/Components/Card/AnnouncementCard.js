import React from 'react';
import Prop from '../../utils/propTypes';

import { Card, CardHeader, CardBody, CardText, Button } from 'reactstrap';

import Avatar from '../../Components/Avatar';

import classNames from 'classnames';

const AnnouncementCard = ({
  color,
  header,
  avatar,
  avatarSize,
  name,
  date,
  text,
  className,
  buttonProps,
  ...restProps
}) => {
  const bgColor = `bg-${color}`;
  const classes = classNames(bgColor, className);

  return (
    <Card inverse className={classes} {...restProps}>
      {header && typeof header === 'string' ? (
        <CardHeader className={bgColor}>{header}</CardHeader>
      ) : (
        header
      )}
      <CardBody className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <Avatar size={avatarSize} src={avatar} />
        <CardText className="text-center">
          <strong className="d-block">{name}</strong>
          <small className="text-muted">{date}</small>
        </CardText>
        <CardText className="text-center">{text}</CardText>

        <Button color="primary" {...buttonProps} />
      </CardBody>
    </Card>
  );
};

AnnouncementCard.propTypes = {
  color: Prop.PropTypes.string,
  header: Prop.PropTypes.node,
  avatar: Prop.PropTypes.string,
  avatarSize: Prop.PropTypes.number,
  name: Prop.PropTypes.string,
  date: Prop.PropTypes.date,
  className: Prop.PropTypes.string,
  children: Prop.PropTypes.element,
};

AnnouncementCard.defaultProps = {
  color: 'gradient-secondary',
  avatarSize: 60,
};

export default AnnouncementCard;
