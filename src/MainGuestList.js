/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { firstLastNameForm, guestListName } from './AppStyle';

export default function MainGuestList() {
  const [guestList, setGuestList] = useState([
    { firstName: '', lastName: '', attending: false },
  ]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAttending, setIsAttending] = useState(false);

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

  // create a new guest
  const handleSubmit = (e) => {
    e.preventDefault();

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
      const createdGuest = await response.json();
      window.location.reload(false);
    }

    newGuest();
  };

  // update guest for attending
  async function updateGuestAttending(id) {
    const response = await fetch(
      `http://upleveled-guest-list.herokuapp.com/guests/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: isAttending }),
      },
    );
    const updatedGuest = await response.json();
  }

  // delete guest with "remove" button
  async function deleteGuest(id) {
    const response = await fetch(
      `http://upleveled-guest-list.herokuapp.com/guests/${id}`,
      {
        method: 'DELETE',
      },
    );
    const deletedGuest = await response.json();
    window.location.reload(false);
  }

  return (
    <div>
      <div css={firstLastNameForm}>
        <form on onSubmit={handleSubmit}>
          <span>First name </span>
          <input
            value={firstName}
            onInput={(e) => setFirstName(e.target.value)}
            className="firstNameInput"
          />
          <span>Last name </span>
          <input
            value={lastName}
            onInput={(e) => setLastName(e.target.value)}
            className="lastNameInput"
          />
          <button className="addGuestButton">add guest</button>
        </form>
      </div>
      <tbody css={guestListName}>
        {guestList.map((singleGuest) => (
          <tr key={singleGuest.id} data-test-id="guest">
            <td className="firstNameList">{singleGuest.firstName}</td>
            <td className="lastNameList">{singleGuest.lastName}</td>
            <td>
              <input
                className="attendingCheckBoxList"
                type="checkbox"
                value={isAttending}
                defaultChecked={isAttending}
                aria-label="attending"
                onChange={() =>
                  setIsAttending(!isAttending)(
                    updateGuestAttending(singleGuest.id),
                  )
                }
              />
              attending
            </td>
            <td>
              <button onClick={() => deleteGuest(singleGuest.id)}>
                remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}
