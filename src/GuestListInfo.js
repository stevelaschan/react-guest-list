import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function GuestListInfo(guestListAddedGuest) {
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
        {guestListAddedGuest.name.first} {guestListAddedGuest.name.last}
      </div>
      <br />
      <div className="guestAttending">
        <button
          type="checkbox"
          value={isAttending}
          onChange={() => {
            setIsAttending(true);
          }}
        >
          not attending
        </button>
      </div>
    </div>
  );
}
