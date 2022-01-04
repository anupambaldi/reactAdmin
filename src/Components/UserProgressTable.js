import React from 'react';
import Prop from '../utils/propTypes';

import { Table, Progress } from 'reactstrap';

import Avatar from '../Components/Avatar';

import withBadge from '../hocs/withBadge';

const AvatarWithBadge = withBadge({
  position: 'bottom-right',
  color: 'success',
})(Avatar);

const UserProgressTable = ({ headers, usersData, ...restProps }) => {
  return (
    <Table responsive hover {...restProps}>
      <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {usersData.map(({ avatar, name, date, progress }, index) => (
          <tr key={index}>
            <td className="align-middle text-center">
              <AvatarWithBadge src={avatar} />
            </td>
            <td className="align-middle text-center">{name}</td>
            <td className="align-middle text-center">{date}</td>
            <td className="align-middle text-center">
              <Progress value={progress} style={{ height: 5 }} />
            </td>
            <td className="align-middle text-center">{progress}%</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

UserProgressTable.propTypes = {
  headers: Prop.PropTypes.node,
  usersData: Prop.PropTypes.arrayOf(
    Prop.PropTypes.shape({
      avatar: Prop.PropTypes.string,
      name: Prop.PropTypes.string,
      date: Prop.PropTypes.date,
    })
  ),
};

UserProgressTable.defaultProps = {
  headers: [],
  usersData: [],
};

export default UserProgressTable;
