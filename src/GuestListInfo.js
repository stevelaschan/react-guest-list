import PropTypes from 'prop-types';

export default function GuestListInfo(props) {
  return (
    <div>
      <div>
        Name: {props.name.first} {props.name.last}
        Attending : {props.attending}
      </div>
    </div>
  );
}

GuestListInfo.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }),
};
