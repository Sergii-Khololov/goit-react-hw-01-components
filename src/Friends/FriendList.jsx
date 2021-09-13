import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul>
      <FriendListItem friends={friends} />
    </ul>
  );
}

export default FriendList;
