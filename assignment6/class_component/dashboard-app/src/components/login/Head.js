import '../../theme_styles/login/Head.css';
import logo from "../../assets/img/logo.png";

function Head() {
  return (
    <div className="header">
        <img src={logo} alt="BigCo Inc. logo"/>
        <span className="text">
            My Page
        </span>
    </div>
  );
}

export default Head;
