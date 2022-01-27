import { GuestInfo } from './GuestInfo';
import GuestListInfo from './GuestListInfo';

function List(props) {
  return <div>{props.children}</div>;
}

export default function GuestList() {
  return (
    <div>
      <List>
        <GuestListInfo />
      </List>
    </div>
  );
}
