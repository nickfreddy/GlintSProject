import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment/locale/id';
import { getOneTransaction } from '../../actions/transactionActions';

const Transaction = ({
  match,
  transaction: { currentTransaction },
  getOneTransaction,
}) => {
  useEffect(() => {
    getOneTransaction(match.params.id);
  }, [match.params.id]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card text-dark bg-light text-center rounded">
            <div className="card-header bg-primary text-white">
              Transaksi #{currentTransaction && currentTransaction._id}
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Dibeli oleh{' '}
                {currentTransaction && currentTransaction.customer.name}
              </h5>
              <p className="card-text">
                Barang {currentTransaction && currentTransaction.good.name}{' '}
                dengan harga Rp{' '}
                {currentTransaction &&
                  currentTransaction.good.price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}{' '}
                dengan jumlah{' '}
                {currentTransaction && currentTransaction.quantity} maka
                didapatkan total{' '}
                {currentTransaction &&
                  currentTransaction.total.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  })}
              </p>
            </div>
            <div className="card-footer text-muted">
              Waktu:{' '}
              <Moment fromNow ago>
                {currentTransaction && currentTransaction.waktu}
              </Moment>{' '}
              yang lalu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction,
});

export default connect(mapStateToProps, { getOneTransaction })(Transaction);
