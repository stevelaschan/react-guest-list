import PropTypes from 'prop-types';
import { GuestInfo } from './GuestInfo';

export default function GuestListInfo(props) {
  return (
    <div>
      <ul>
        <li>
          Name: {props.GuestInfo.GuestOne.name.first}{' '}
          {props.GuestInfo.GuestOne.name.last}
          Attending : {props.GuestInfo.GuestOne.attending}
        </li>
        <li>
          Name: {GuestInfo.GuestTwo.name.first} {GuestInfo.GuestTwo.name.last}
          Attending : {GuestInfo.GuestTwo.attending}
        </li>
      </ul>
    </div>
  );
}

GuestListInfo.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }),
  attending: PropTypes.bool.isRequired,
};
