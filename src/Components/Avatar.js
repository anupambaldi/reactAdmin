import React from 'react';
import Prop from '../utils/propTypes';

import classNames from 'classnames';

import userImage from '../assets/img/users/100_4.jpg';

const Avatar = ({
  rounded,
  circle,
  src,
  size,
  tag: Tag,
  className,
  style,
  ...restProps
}) => {
  const classes = classNames({ 'rounded-circle': circle, rounded }, className);
  return (
    <Tag
      src={src}
      style={{ width: size, height: size, ...style }}
      className={classes}
      {...restProps}
    />
  );
};

Avatar.Prop = {
  tag: Prop.component,
  rounded: Prop.bool,
  circle: Prop.bool,
  size: Prop.oneOfType([Prop.string, Prop.number]),
  src: Prop.string,
  style: Prop.object,
};

Avatar.defaultProps = {
  tag: 'img',
  rounded: false,
  circle: true,
  size: 40,
  src: userImage,
  style: {},
};

export default Avatar;
