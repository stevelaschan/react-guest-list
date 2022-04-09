/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { firstLastNameForm, guestListStyle } from './AppStyle';

export default function MainGuestList() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(true);
  const baseUrl = `https://upleveled-guest-list.herokuapp.com`;

  // fetch guest data from the api
  useEffect(() => {
    const getList = async () => {
      setLoading(true);
      const response = await fetch(`${baseUrl}/guests/`);
      const data = await response.json();
      setGuestList(data);
      setLoading(() => false);
    };

    getList().catch((error) => console.log('get all guests error:' + error));
  }, [baseUrl]);

  // const screenIsLoading = loading ? false : true;

  // create a new guest
  const handleSubmit = (e) => {
    e.preventDefault();

    async function newGuest() {
      const response = await fetch(`${baseUrl}/guests/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
        }),
      });
      const createdGuest = await response.json();
      setGuestList([...guestList, createdGuest]);
    }

    newGuest().catch((error) => console.log('create new guest:' + error));
    setFirstName('');
    setLastName('');
  };

  // update guest for attending
  async function updateGuestAttending(guest) {
    await fetch(`${baseUrl}/guests/${guest.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: guest.attending }),
    });
  }

  // on change update guest for attending
  async function onChangeAttending(id, attendingVariable) {
    const copyGuestList = [...guestList];
    const guestFind = copyGuestList.find((guest) => guest.id === id);
    guestFind.attending = attendingVariable;
    await updateGuestAttending(guestFind);
    setGuestList(copyGuestList);
  }

  // delete guest with "remove" button
  async function deleteGuest(id) {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    const newList = guestList.filter((guest) => guest.id !== deletedGuest.id);
    setGuestList([...newList]);
  }

  // delete all guests from api
  async function deleteAllGuests() {
    for (const guest of guestList) {
      await fetch(`${baseUrl}/guests/${guest.id}`, {
        method: 'DELETE',
      });
    }
    setGuestList([]);
  }

  return (
    <div>
      <div css={firstLastNameForm}>
        {loading ? (
          'Loading...'
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <span>First name </span>
              <input
                value={firstName}
                onInput={(e) => setFirstName(e.target.value)}
                className="firstNameInput"
                aria-label="First name input"
                // disabled={screenIsLoading}
              />
            </div>
            <div>
              <span>Last name </span>
              <input
                value={lastName}
                onInput={(e) => setLastName(e.target.value)}
                className="lastNameInput"
                aria-label="Lirst name input"
                // disabled={screenIsLoading}
              />
            </div>
            <button className="addGuestButton">add guest</button>
            <button
              className="deleteGuestsButton"
              onClick={() => deleteAllGuests()}
            >
              remove all
            </button>
          </form>
        )}
      </div>
      <table>
        <tbody css={guestListStyle}>
          {guestList.map((guest) => (
            <tr key={guest.id} data-test-id="guest">
              <div key={guest.id}>
                <td className="firstNameList">{guest.firstName}</td>
                <td className="lastNameList">{guest.lastName}</td>
                <td className="attendingCheckBoxList">
                  <input
                    type="checkbox"
                    value={guest.attending}
                    aria-label="attending"
                    onChange={(e) =>
                      onChangeAttending(guest.id, e.currentTarget.checked)
                    }
                  />{' '}
                  <span>
                    {guest.attending ? 'attending' : ' not attending'}
                  </span>
                </td>
                <td>
                  <button
                    className="deleteButton"
                    onClick={() => deleteGuest(guest.id)}
                  >
                    remove
                  </button>
                </td>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
