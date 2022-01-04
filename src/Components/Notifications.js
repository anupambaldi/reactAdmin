import React from 'react';
import Prop from '../utils/propTypes';

import { Media } from 'reactstrap';

import Avatar from '../Components/Avatar';

const Notifications = ({ notificationsData }) => {
  return (
    notificationsData &&
    notificationsData.length &&
    notificationsData.map(({ id, avatar, message, date }) => (
      <Media key={id} className="pb-2">
        <Media left className="align-self-center pr-3">
          <Avatar tag={Media} object src={avatar} alt="Avatar" />
        </Media>
        <Media body middle className="align-self-center">
          {message}
        </Media>
        <Media right className="align-self-center">
          <small className="text-muted">{date}</small>
        </Media>
      </Media>
    ))
  );
};

Notifications.propTypes = {
  notificationsData: Prop.PropTypes.arrayOf(
    Prop.PropTypes.shape({
      id: Prop.ID,
      avatar: Prop.PropTypes.string,
      message: Prop.PropTypes.node,
      date: Prop.date,
    })
  ),
};

Notifications.defaultProps = {
  notificationsData: [],
};

export default Notifications;
