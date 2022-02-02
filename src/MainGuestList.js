/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { firstLastNameForm, guestListStyle } from './AppStyle';

export default function MainGuestList() {
  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  // fetch guest info from the api
  useEffect(() => {
    const getList = async () => {
      const response = await fetch(
        `http://upleveled-guest-list.herokuapp.com/guests/`,
      );
      const data = await response.json();
      setGuestList(data);
      setLoading(true);
    };

    getList();
  }, []);

  const screenIsLoading = loading ? false : true;

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

  // update guest for attending in the api
  async function updateGuestAttending(guest) {
    await fetch(
      `http://upleveled-guest-list.herokuapp.com/guests/${guest.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attending: guest.attending }),
      },
    );
  }

  // on change update guest for attending
  async function onChangeAttending(id, attendingVariable) {
    const copyGuestList = [...guestList];
    const guestFind = copyGuestList.find((guest) => guest.id === id);
    guestFind.attending = attendingVariable;
    await updateGuestAttending(guestFind);
    setGuestList(copyGuestList);
  }

  // delete guest with "remove" button from api
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
            disabled={screenIsLoading}
          />
          <span>Last name </span>
          <input
            value={lastName}
            onInput={(e) => setLastName(e.target.value)}
            className="lastNameInput"
            disabled={screenIsLoading}
          />
          <button className="addGuestButton">add guest</button>
        </form>
      </div>
      <table>
        <tbody css={guestListStyle}>
          {guestList.map((guest) => (
            <tr key={guest.id} data-test-id="guest">
              <div>
                <td className="firstNameList">
                  {guest.firstName.toUpperCase()}
                </td>
                <td className="lastNameList">{guest.lastName.toUpperCase()}</td>
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
                  {/* {JSON.stringify(guest.attending)} */}
                  {/* {console.log(guest.attending)} */}
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
