import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isFAQRoute = location.pathname === '/faq';

  return (
    <header className="yeeter-container">
      <Link to="/">
        <h2 className="yeeter-title">Yeeter</h2>
      </Link>
      {isFAQRoute ? (
        <>
          <p className="yeeter-description">Frequently Asked Questions</p>
        </>
      ) : (
        <>
          <p className="yeeter-description">Unruggable Crowdfunding</p>
          <p className="yeeter-subtitle">
            Empower Your Project With Trust and Transparency
          </p>
        </>
      )}
    </header>
  );
}

export default Header;
