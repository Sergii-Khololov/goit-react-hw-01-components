import f from "../Friends/Friend.module.css";
import PropTypes from 'prop-types';

function FriendListItem({ friends }) {
    return friends.map(frend => (
                
        <li class={f.item} key={frend.id}>
            {frend.isOnline ? <span class={f.online}></span> : <span class={f.offline}></span>}
            <img src={frend.avatar} class={f.avatar} alt={frend.name} width={48} />
            <p class={f.name}>{frend.name}</p>
        </li>
    )
            
    );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default FriendListItem;