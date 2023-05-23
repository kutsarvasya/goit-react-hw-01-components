import s from './Profile.module.css'
import PropTypes from 'prop-types';

function Profile(props) {
  return (<div className={s.profile}>
  <div className={s.description}>
    <img
      src={props.avatar}
      alt="User avatar"
      className={s.avatar}
    />
    <p className={s.name}>{props.username}</p>
    <p className={s.tag}>{props.tag}</p>
    <p className={s.location}>S{props.location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
     <span className={s.quantity}>{props.stats.followers }</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{props.stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{props.stats.likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired
}

export default Profile
