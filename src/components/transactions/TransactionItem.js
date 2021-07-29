import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTransaction } from '../../actions/transactionActions';

const TransactionItem = ({ transaction, index, deleteTransaction }) => {
  const onDelete = (event) => {
    event.preventDefault();

    deleteTransaction(transaction._id);
  };

  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>
          {transaction && transaction.customer && transaction.customer.name}
        </td>
        <td>{transaction && transaction.good && transaction.good.name}</td>
        <td>
          <Link
            to={`/${transaction._id}`}
            className="btn btn-primary btn-block"
          >
            Detail
          </Link>
          <button className="btn btn-danger btn-block" onClick={onDelete}>
            Hapus
          </button>
        </td>
      </tr>
    </>
  );
};

export default connect(null, { deleteTransaction })(TransactionItem);
