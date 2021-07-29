import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getAllTransactions,
  createTransaction,
  updateTransaction,
} from '../../actions/transactionActions';
import { getAllCustomers } from '../../actions/customerActions';
import { getAllGoods } from '../../actions/goodActions';
import TransactionItem from './TransactionItem';
import { setAlert } from '../../actions/alertActions';
import { loadMe } from '../../actions/authActions';
import Alert from '../layouts/Alert';

const Transaction = ({
  transaction: { allTransactions, error: transactionError },
  customer: { allCustomers, error: customerError },
  good: { allGoods, error: goodError },
  getAllTransactions,
  createTransaction,
  loadMe,
  getAllCustomers,
  getAllGoods,
  setAlert,
}) => {
  const [id_barang, setIdBarang] = useState();
  const [id_pelanggan, setIdPelanggan] = useState();
  const [jumlah, setJumlah] = useState('1');

  useEffect(() => {
    getAllTransactions();
    getAllCustomers();
    getAllGoods();
    loadMe();
  }, []);

  useEffect(() => {
    if (transactionError) {
      setAlert(transactionError?.data?.errors, 'danger');
    }
  }, [transactionError]);

  useEffect(() => {
    if (customerError) {
      setAlert(customerError?.data?.errors, 'danger');
    }
  }, [customerError]);

  useEffect(() => {
    if (goodError) {
      setAlert(goodError?.data?.errors, 'danger');
    }
  }, [goodError]);

  const hideTransactionModal = () => {
    window.$('#addTransactionModal').modal('toggle');
  };

  const onCreateTransaction = async (event) => {
    event.preventDefault();

    await createTransaction({
      id_good: id_barang,
      id_customer: id_pelanggan,
      quantity: jumlah,
    });

    if (!transactionError) {
      hideTransactionModal();
    }
  };

  return (
    <>
      <section id="actions" className="py-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a
                href="#"
                className="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#addTransactionModal"
              >
                <i className="fas fa-plus"></i> Tambah Transaksi
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="posts">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header bg-primary text-white">
                  <h4>Transaksi</h4>
                </div>
                <Alert />
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Pelanggan</th>
                      <th scope="col">Barang</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTransactions &&
                      allTransactions.map((transaction, index) => (
                        <TransactionItem
                          key={transaction._id}
                          index={index}
                          transaction={transaction}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center bg-primary text-white mb-3">
                <div className="card-body">
                  <h3>Transaksi</h3>
                  <h4 className="display-4">
                    <i className="fa fa-exchange"></i>{' '}
                    {allTransactions && allTransactions.length}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="addTransactionModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Tambah Transaksi</h5>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Alert />
              <form id="add-transaction" onSubmit={onCreateTransaction}>
                <div className="form-group">
                  <label htmlFor="barang">Barang</label>
                  <select
                    className="form-control"
                    onChange={(event) => setIdBarang(event.target.value)}
                    value={id_barang}
                    required
                  >
                    <option value="default" disabled>
                      Pilih Barang
                    </option>
                    {allGoods &&
                      allGoods.map((good) => (
                        <option key={good._id} value={good._id}>
                          {good.name} [
                          {good.price.toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                          })}
                          ]
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="pelanggan">Pelanggan</label>
                  <select
                    className="form-control"
                    onChange={(event) => setIdPelanggan(event.target.value)}
                    value={id_pelanggan}
                    required
                  >
                    <option value="default" disabled>
                      Pilih Pelanggan
                    </option>
                    {allCustomers &&
                      allCustomers.map((customer) => (
                        <option key={customer._id} value={customer._id}>
                          {customer.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="jumlah">Jumlah</label>
                  <input
                    type="number"
                    placeholder="jumlah"
                    className="form-control"
                    min="1"
                    value={jumlah}
                    onChange={(event) => setJumlah(event.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                type="submit"
                form="add-transaction"
                value="Submit"
              >
                Tambah Transaksi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  transaction: state.transaction,
  good: state.good,
  customer: state.customer,
});

export default connect(mapStateToProps, {
  getAllTransactions,
  createTransaction,
  updateTransaction,
  getAllCustomers,
  getAllGoods,
  setAlert,
  loadMe,
})(Transaction);
