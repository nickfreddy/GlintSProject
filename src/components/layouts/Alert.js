import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = ({ alert: { alert } }) => {
  useEffect(() => {
    alert &&
      alert.message &&
      alert.message.map((message) => toast.error(message));
  }, [alert]);

  return <ToastContainer />;
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, {})(Alert);
