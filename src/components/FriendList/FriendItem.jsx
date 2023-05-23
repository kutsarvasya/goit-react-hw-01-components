import PropTypes from 'prop-types';
import  s from './FriendList.module.css'

function FriendItem({ isOnline, avatar, name }) {
    return (<li className={s.items}>
          <span
            className={isOnline ? s.statusOff : s.statusOn}
          ></span>
          <img
            className={s.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{name}</p>
        </li>)
}

FriendItem.propTypes={
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
}

export default FriendItem