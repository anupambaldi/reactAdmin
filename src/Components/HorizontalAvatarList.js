import Avatar from '../Components/Avatar';
import React, { Fragment } from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import Prop from '../utils/propTypes';

const HorizontalAvatarList = ({
  tag: Tag,
  avatars,
  avatarProps,
  reversed,
  ...restProps
}) => {
  let leng = reversed ? avatars.length + 1 : 1;
  const count = reversed ? () => leng-- : () => leng++;

  return (
    <Tag className="d-flex align-items-center" {...restProps}>
      {avatars &&
        avatars.map(({ avatar, name }, i) => {
          const index = count();
          const isFirstItem = i === 0;

          return (
            <Fragment key={index}>
              <Avatar
                {...avatarProps}
                id={`HorizontalAvatarList-avatar-${index}`}
                src={avatar}
                style={{
                  zIndex: index,
                  border: '3px solid #fff',
                  marginLeft: !isFirstItem && -20,
                  marginBottom: '20px',
                  marginTop:'20px'
                }}
              />

              {!!name && (
                <UncontrolledTooltip
                  delay={{ show: 0, hide: 0 }}
                  target={`HorizontalAvatarList-avatar-${index}`}>
                  {name}
                </UncontrolledTooltip>
              )}
            </Fragment>
          );
        })}
    </Tag>
  );
};

HorizontalAvatarList.Prop = {
  tag: Prop.node,
  avatars: Prop.arrayOf(
    Prop.shape({
      avatar: Prop.string.isRequired,
      name: Prop.string,
    })
  ).isRequired,
  avatarProps: Prop.object,
  reversed: Prop.bool,
};

HorizontalAvatarList.defaultProps = {
  tag: 'div',
  avatars: [],
  avatarProps: {},
  reversed: false,
};

export default HorizontalAvatarList;
