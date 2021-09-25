import f from '../Friends/Friend.module.css';
// import PropTypes from 'prop-types';

function FriendListItem({ isOnline, name, avatar }) {
  return (
    <li className={f.item}>
      {isOnline ? (
        <span className={f.online}></span>
      ) : (
        <span className={f.offline}></span>
      )}
      <img className={f.avatar} src={avatar} alt={name} width="48" />
      <p className={f.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
