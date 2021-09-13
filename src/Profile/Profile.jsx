import PropTypes from 'prop-types';
import prof from '../Profile/Profile.module.css';

function Profile({ avatar, name, tag, location, stats }) {
  return (
    <div class={prof.profile}>
      <div class={prof.description}>
        <img
          src={avatar}
          alt={name}
          class={prof.avatar}
          // width={60}
        />
        <p class={prof.name}>{name}</p>
        <p class={prof.tag}>@{tag}</p>
        <p class={prof.location}>{location}</p>
      </div>

      <ul class={prof.stats}>
        <li>
          <span class={prof.label}>followers</span>
          <span class={prof.quantity}>{stats['followers']}</span>
        </li>
        <li>
          <span class={prof.label}>Views</span>
          <span class={prof.quantity}>{stats['views']}</span>
        </li>
        <li>
          <span class={prof.label}>Likes</span>
          <span class={prof.quantity}>{stats['likes']}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
