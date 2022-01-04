import PropTypes from 'prop-types';


const Prop = {
  ...PropTypes,
  ID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
}
export default Prop;
