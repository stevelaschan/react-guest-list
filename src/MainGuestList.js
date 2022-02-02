/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { firstLastNameForm, guestListName } from './AppStyle';

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

  // create a new guest
  const handleSubmit = (e) => {
    e.preventDefault();

    async function newGuest() {
      await fetch(`http://upleveled-guest-list.herokuapp.com/guests/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      });
      window.location.reload(false);
    }

    newGuest();
  };

  // update guest for attending
  async function updateGuestAttending(id, attending) {
    await fetch(`http://upleveled-guest-list.herokuapp.com/guests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: !attending }),
    });
  }

  // delete guest with "remove" button
  async function deleteGuest(id) {
    await fetch(`http://upleveled-guest-list.herokuapp.com/guests/${id}`, {
      method: 'DELETE',
    });
    window.location.reload(false);
  }

  return (
    <div>
      <div css={firstLastNameForm}>
        <form onSubmit={handleSubmit}>
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
      <table>
        <tbody css={guestListName}>
          {guestList.map((guest) => (
            <tr key={guest.id} data-test-id="guest">
              <td className="firstNameList">{guest.firstName}</td>
              <td className="lastNameList">{guest.lastName}</td>
              <td>
                <label>
                  <input
                    className="attendingCheckBoxList"
                    type="checkbox"
                    value={guest.attending}
                    aria-label="attending"
                    onChange={
                      () => updateGuestAttending(guest.id, guest.attending)
                      // !guest.attending
                      //   ? updateGuestAttending(guest.id, guest.attending)
                      //   : updateGuestAttending(guest.id, !guest.attending)
                    }
                  />{' '}
                  {/* {guest.attending ? 'attending' : ' not attending'} */}
                  {JSON.stringify(guest.attending)}
                </label>
              </td>
              <td>
                <button onClick={() => deleteGuest(guest.id)}>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
