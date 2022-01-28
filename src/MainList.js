import React, { useState } from 'react';
import GuestListInfo from './GuestListInfo';

function List(props) {
  return <div>{props.children}</div>;
}

export default function MainList() {
  // const guestInfo = [
  //   {
  //     name: {
  //       first: 'Stefan',
  //       last: 'Laschan',
  //     },
  //     attending: false,
  //   },
  // ];

  const [guestList, setGuestList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <List>
        <div>
          <input
            value={firstName}
            onInput={(e) => setFirstName(e.target.value)}
          />
          <input
            value={lastName}
            onInput={(e) => setLastName(e.target.value)}
          />
        </div>

        {guestList.map((singleGuest) => {
          return (
            <GuestListInfo
              key={singleGuest.name}
              name={singleGuest.name}
              attending={singleGuest.attending}
            />
          );
        })}
        <button
          onClick={() => {
            const guestListAdded = [
              ...guestList,
              {
                name: {
                  first: { firstName },
                  last: { lastName },
                },
                attending: true,
              },
            ];
            setGuestList(guestListAdded);
          }}
        >
          {' '}
          add guest
        </button>
        <div>
          <button
            onClick={() => {
              const guestListRemoved = guestList.pop();
              setGuestList(guestListRemoved);
            }}
          >
            remove guest
          </button>
        </div>
      </List>
    </div>
  );
}
