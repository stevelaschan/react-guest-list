import PropTypes from 'prop-types';
import { useState } from 'react';

export default function GuestListInfo(props) {
  const [isAttending, setIsAttending] = useState(false);

  GuestListInfo.propTypes = {
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
  };

  return (
    <div>
      <div className="guestName" data-test-id="guest">
        {props.name.first} {props.name.last}
      </div>
      <br />
      <div className="guestAttending">
        <button
          type="checkbox"
          value={isAttending}
          onChange={() => {
            setIsAttending(true);
          }}
        />
      </div>
    </div>
  );
}
