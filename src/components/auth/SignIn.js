import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { authSignIn, authWithOauth } from '../../actions/authActions';
import { setAlert } from '../../actions/alertActions';
import Alert from '../layouts/Alert';

const SignIn = ({
  user: { isAuthenticated, error, token },
  authSignIn,
  authWithOauth,
  setAlert,
  history,
  location,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // ?token=sadasdasdasd -> sadasdasdasd
    if (location.search.includes('?token=')) {
      let token = location.search.replace('?token=', '');

      authWithOauth(token);
    }
  }, [location.search]);

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }

    if (error) {
      setAlert(error?.data?.errors, 'danger');
    }
  }, [error, isAuthenticated, history]);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      await authSignIn({
        email,
        password,
      });
    }
  };

  return (
    <section id="categories">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header">
                <h4>Sign In</h4>
              </div>
              <div className="card-body">
                <Alert />
                <div className="row">
                  <div className="col ">
                    <a
                      href="http://localhost:5000/auth/google"
                      className="btn btn-primary google"
                    >
                      <i className="fa fa-google fa-fw"></i> Login with Google+
                    </a>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary btn-block"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  authSignIn,
  setAlert,
  authWithOauth,
})(SignIn);
