import React from 'react';
import Prop from '../../utils/propTypes';

import { Card, CardText, CardTitle, Progress } from 'reactstrap';
import Typography from '../Typography';

const NumberWidget = ({
  title,
  subtitle,
  number,
  color,
  progress: { value, label },
  ...restProps
}) => {
  return (
    <Card body {...restProps}>
      <div className="d-flex justify-content-between">
        <CardText tag="div">
          <Typography className="mb-0">
            <strong>{title}</strong>
          </Typography>
          <Typography className="mb-0 text-muted small">{subtitle}</Typography>
        </CardText>
        <CardTitle className={`text-${color}`}>{number}</CardTitle>
      </div>
      <Progress value={value} color={color} style={{ height: '8px' }} />
      <CardText tag="div" className="d-flex justify-content-between">
        <Typography tag="span" className="text-left text-muted small">
          {label}
        </Typography>
        <Typography tag="span" className="text-right text-muted small">
          {value}%
        </Typography>
      </CardText>
    </Card>
  );
};

NumberWidget.propTypes = {
  title: Prop.PropTypes.string.isRequired,
  subtitle: Prop.PropTypes.string,
  number: Prop.PropTypes.oneOfType([
    Prop.PropTypes.string.isRequired,
    Prop.PropTypes.number.isRequired,
  ]),
  color: Prop.PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]),
  progress: Prop.PropTypes.shape({
    value: Prop.PropTypes.number,
    label: Prop.PropTypes.string,
  }),
};

NumberWidget.defaultProps = {
  title: '',
  subtitle: '',
  number: 0,
  color: 'primary',
  progress: {
    value: 0,
    label: '',
  },
};

export default NumberWidget;
