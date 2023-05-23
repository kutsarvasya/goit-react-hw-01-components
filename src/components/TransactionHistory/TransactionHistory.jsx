import PropTypes from 'prop-types';
import TransactionHistoryRow from './TransactionHistoryRow';
import styles from './TransactionHistory.module.css'

function TransactionHistory({ props }) {
  return (
    <table className={styles.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.map(el => (
          <TransactionHistoryRow {...el} key={el.id} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  el: PropTypes.objectOf(PropTypes.string.isRequired),
};
