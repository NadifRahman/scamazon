import logo from '../../assets/scamazon-logo.png';
import HomeStyle from './Home.module.css';
function Home() {
  return (
    <div className={HomeStyle.container}>
      <div className={HomeStyle.welcome}>Welcome to</div>
      <img className={HomeStyle.img} src={logo} alt="Company logo" />
    </div>
  );
}

export default Home;
