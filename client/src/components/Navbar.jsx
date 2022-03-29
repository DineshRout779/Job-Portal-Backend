import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className='container'>
        <nav className='nav flex align-center justify-between'>
          <Link to='/' className='logo'>
            <h2>Logo</h2>
          </Link>
          <div>
            <Link to='/profile'>Profile</Link>
            <Link to='/jobs'>All Jobs</Link>
            <Link to='/applied'>Applied</Link>
            <Link to='/login-as-applicant' className='btn'>
              Login
            </Link>
            <Link to='/register-as-applicant' className='btn btn-rev'>
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
