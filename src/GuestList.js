import { useEffect, useState } from 'react';

export default function GuestList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <div>
        <label for="First name">
          First Name
          <input
            // Connect state variable to input value
            value={firstName}
            // Update state variable with new value (text user types in)
            onInput={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label for="Last name">
          Last Name
          <input
            // Connect state variable to input value
            value={lastName}
            // Update state variable with new value (text user types in)
            onInput={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
