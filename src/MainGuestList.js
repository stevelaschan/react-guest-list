import React, { useEffect, useState } from 'react';

export default function MainGuestList() {
  const [guestList, setGuestList] = useState([]);
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
      const createdGuest = await response.json();
      window.location.reload(false);
    }

    newGuest();
  };

  // set state for checkbox
  const [checkbox, setCheckbox] = useState({});

  // Object.keys() returns an array with the values of the object as strings
  // const checkboxKeys = Object.keys(checkbox);

  // when Delete button is clicked:
  async function deleteGuest() {
    const response = await fetch(
      `http://upleveled-guest-list.herokuapp.com/guests/1`,
      {
        method: 'DELETE',
      },
    );
    const deletedGuest = await response.json();
    window.location.reload(false);
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
          <tr key={singleGuest.id} data-test-id="guest">
            <td>{singleGuest.firstName}</td>
            <td>{singleGuest.lastName}</td>
            <td>
              <input
                type="checkbox"
                value={isAttending}
                defaultChecked={isAttending}
                onChange={() => {
                  setIsAttending(!isAttending);
                }}
              />
              {!isAttending ? <div>attending</div> : <div>not attending</div>}
            </td>
            {/* <td>
              <input
                type="checkbox"
                defaultChecked={checkbox[singleGuest.id]}
                onChange={() => {
                  setCheckbox({ ...checkbox, [singleGuest.id]: true });
                }}
              />
            </td> */}
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
