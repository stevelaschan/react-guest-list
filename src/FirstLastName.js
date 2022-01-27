/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { guestListName } from './AppStyle';

export default function FirstLastName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <div className={guestListName}>
        <div>
          <label for="First name">
            First Name{' '}
            <input
              // Connect state variable to input value
              value={firstName}
              // Update state variable with new value (text user types in)
              onInput={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <br />
        <div>
          <label for="Last name">
            Last Name{' '}
            <input
              // Connect state variable to input value
              value={lastName}
              // Update state variable with new value (text user types in)
              onInput={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
