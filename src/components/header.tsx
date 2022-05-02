import { Link } from 'react-router-dom';
import Layout from './Layout';

const Header = () => {
  return (
    <Layout>
      <header>
        <nav>
          <Link className="header-links" to="/">
            Home
          </Link>{' '}
          |{' '}
          <Link className="header-links" to="/about-us">
            About
          </Link>{' '}
          |{' '}
          <Link className="header-links" to="/profile">
            Profile
          </Link>
        </nav>
      </header>
    </Layout>
  );
};
export default Header;
