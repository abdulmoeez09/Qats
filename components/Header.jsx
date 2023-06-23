import styles from '../styles/Header.module.css'
import Navbarmenu from './Navbarmenu';


const Header = () => {
  return (
     <div className={styles.container}>
       <Navbarmenu />
      </div>
     );
};

export default Header;