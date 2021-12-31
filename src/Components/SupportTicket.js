import React from 'react';
import Prop from '../utils/propTypes';

import { Media, Button } from 'reactstrap';

import Avatar from './Avatar';

const statusMap = {
  open: 'info',
  closed: 'muted',
  pending: 'success',
};

const SupportTicket = ({
  avatar,
  name,
  date,
  text,
  status,
  onClick,
  ...restProps
}) => {
  return (
    <div {...restProps}>
      <Media className="m-2">
        <Media left className="mr-2">
          <Avatar src={avatar} />
        </Media>
        <Media body>
          <Media heading tag="h6" className="m-0">
            {name}
          </Media>
          <p className="text-muted m-0">
            <small>{date}</small>
          </p>
        </Media>
        <Media right className="align-self-center">
          <Button
            color="link"
            className={`text-capitalize text-${statusMap[status]}`}
          >
            {status}
          </Button>
        </Media>
      </Media>
      <Media>
        <p className="text-muted">{text}</p>
      </Media>
    </div>
  );
};

SupportTicket.Prop = {
  avatar: Prop.string,
  name: Prop.string,
  date: Prop.date,
  text: Prop.string,
  status: Prop.oneOf(['open', 'closed', 'pending']),
  onClick: Prop.func,
};

SupportTicket.defualtProps = {
  avatar: '',
  name: '',
  date: '',
  text: '',
  status: 'pending',
  onClick: () => {},
};

export default SupportTicket;
