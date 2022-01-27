import React, { useState } from 'react';
import GuestListInfo from './GuestListInfo';

function List(props) {
  return <div>{props.children}</div>;
}

export default function MainList() {
  const guestInfo = [
    {
      name: {
        first: 'Stefan',
        last: 'Laschan',
      },
      attending: false,
    },
  ];

  const [guestList, setGuestList] = useState(guestInfo);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <List>
        {guestList.map((singleGuest) => {
          return (
            <GuestListInfo
              key={singleGuest.name}
              name={singleGuest.name}
              attending={false}
            />
          );
        })}
      </List>
      <button
        onClick={() => {
          const guestListCopy = [...guestList];
          const guestListUpdated = [
            ...guestListCopy,
            {
              name: {
                first: 'Richard',
                last: 'Korn',
              },
              attending: true,
            },
          ];
          setGuestList(guestListUpdated);
        }}
      >
        {' '}
        add guest
      </button>
      <div>
        <button
          onClick={() => {
            const guestListCopy = [...guestList];
            guestListCopy.pop();
            setGuestList(guestListCopy);
          }}
        >
          remove guest
        </button>
      </div>
    </div>
  );
}
