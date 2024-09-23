import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <nav className="foot">
        <a className="foot__link" href="#">ABOUT</a>
        <a className="foot__link" href="#">BLOG</a>
        <a className="foot__link" href="#">MEDIA</a>
        <a className="foot__link" href="#">PRESS</a>
        <a className="foot__link" href="#">SOCIAL SITE</a>
        <a className="foot__link" href="#">PRIVACY POLICY</a>
        <a className="foot__link" href="#">REVIEWS</a>
        <a className="foot__link" href="#">ADD + EMAIL</a>
      </nav>
      <p className='copyright'>Copyright © 2022 Letucheva Anastasia group 2073 * UNI DUBNA</p>
    </div>
  );
};

export default Footer;
