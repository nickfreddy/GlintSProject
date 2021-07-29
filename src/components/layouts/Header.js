import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSignOut, loadMe } from '../../actions/authActions';

const Header = ({ user, authSignOut, loadMe }) => {
  useEffect(() => {
    loadMe();
  }, []);

  const onSignOut = (event) => {
    event.preventDefault();

    authSignOut();
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary text-light p-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Backend
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {user.isAuthenticated && (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item px-2">
                    <Link to="/" className="nav-link active">
                      Dashboard
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link">
                      <i className="fas fa-user"></i> {user?.user?.name}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a onClick={onSignOut} className="nav-link">
                      <i className="fas fa-user-times"></i> Logout
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>

      <section id="actions" className="py-4 mb-4 bg-dark">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { authSignOut, loadMe })(Header);
