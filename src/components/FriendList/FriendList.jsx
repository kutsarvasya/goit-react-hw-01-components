import FriendItem from './FriendItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css'


function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(el => (
        <FriendItem {...el} key={el.id}/>
     
      ))}
    </ul>
  );
}

FriendList.propTypes = {
    el: PropTypes.shape({
        id: PropTypes.number.isRequired
     })

}

export default FriendList;





