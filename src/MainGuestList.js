import React, { useEffect, useState } from 'react';
import { guestListName } from './AppStyle';

export default function MainGuestList() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // fetch guest info from the api
  useEffect(() => {
    const getList = async () => {
      const response = await fetch(
        `http://upleveled-guest-list.herokuapp.com/guests/`,
      );
      const data = await response.json();
      setGuestList(data);
    };

    getList();
  }, []);

  // when add guest button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    // create a new guest
    async function newGuest() {
      const response = await fetch(
        `http://upleveled-guest-list.herokuapp.com/guests/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
          }),
        },
      );
      // eslint-disable-next-line no-unused-vars
      const createdGuest = await response.json();

      window.location.reload(false);
    }

    newGuest();
  };

  // set state for checkbox
  const [checkbox, setCheckbox] = useState({});

  // Object.keys() returns an array with the values of the object as strings
  const checkboxKeys = Object.keys(checkbox);

  // when Delete button is clicked:
  function handleDelete(id) {
    async function deleteGuest() {
      const response = await fetch(
        `http://upleveled-guest-list.herokuapp.com/guests/${checkboxKeys}`,
        {
          method: 'DELETE',
        },
      );
      // eslint-disable-next-line no-unused-vars
      const deletedGuest = await response.json();

      window.location.reload(false);
    }
    deleteGuest();
  }

  return (
    <div>
      <form on onSubmit={handleSubmit}>
        First name{' '}
        <input
          value={firstName}
          onInput={(e) => setFirstName(e.target.value)}
        />
        Last name{' '}
        <input value={lastName} onInput={(e) => setLastName(e.target.value)} />
        <button>add guest</button>
      </form>
      <tbody>
        {guestList.map((singleGuest) => (
          <tr
            key={singleGuest.id}
            className={singleGuest.attending ? 'notAttending' : 'attending'}
            data-test-id="guest"
          >
            <td>{singleGuest.firstName}</td>
            <td>{singleGuest.lastName}</td>
            <td>
              <input
                type="checkbox"
                defaultChecked={checkbox[singleGuest.id]}
                onChange={() => {
                  setCheckbox({ ...checkbox, [singleGuest.id]: true });
                }}
              />
            </td>
          </tr>
        ))}
        <div>
          <button
            type="button"
            onClick={(singleGuest) => handleDelete(singleGuest.id)}
            id="delete"
          >
            remove
          </button>
        </div>
      </tbody>
    </div>
  );
}
