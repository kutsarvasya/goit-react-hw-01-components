import PropTypes from 'prop-types';
function TransactionHistoryRow({ type, amount, currency }) {
      return  (<tr  >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>)
}

TransactionHistoryRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionHistoryRow