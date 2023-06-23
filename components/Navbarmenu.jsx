import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import styles from '../styles/Nav.module.css'

const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
};
  let boxClass = [styles.main_menu , styles.menu_right , styles.menuq1];
  if(isMenu) {
      boxClass.push(styles.menuq2);
  }else{
      boxClass.push('');
  }
 
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
    setMenuSubMenu2(false)
  };
  const toggleSubmenu2 = () => {
    setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
    setMenuSubMenu(false)
  };
  let boxClassSubMenu = [styles.sub_menus];
  if(isMenuSubMenu) {
    boxClassSubMenu.push(styles.sub_menus_Active);
  }else {
      boxClassSubMenu.push('');
  }
  let boxClassSubMenu2 = [styles.sub_menus];
  if(isMenuSubMenu2) {
    boxClassSubMenu2.push(styles.sub_menus_Active);
  }else {
      boxClassSubMenu2.push('');
  }
  return (
    <header className={styles.header_middle}>
    <div className={styles.container}>
        <div className={styles.row}>
        <div className={styles.header_middle_logo}>
        <Link href='/'> 
             <Image src='img/logo.jpeg' alt='logo' className={styles.img} width={65} height={65} />
        </Link>
        </div>
                <div className={styles.header_middle_menus}>
                    <div className={styles.main_nav} >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className={styles.menubar_button} style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className={styles.menubar_button} style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}

                    <ul className={boxClass.join(' ')}>
                    <li className={styles.menu_item} > <Link href ='/' 
                           exact activeClassName='is-active' onClick={toggleClass}> Home 
                        </Link> </li>
                        <li className={styles.menu_item} > <Link href ='about' onClick={toggleClass}  activeClassName='is-active'> About </Link></li>
                    <li onClick={toggleSubmenu} className={`${styles.menu_item} ${styles.sub_menus_arrows}`} > Services<FiChevronDown />
                            <ul className={boxClassSubMenu.join(' ')} > 
                           <li><Link onClick={toggleClass} activeClassName='is-active' href ='earthing'>Earthing & Lightening Protection</Link></li>
                           <li> <Link onClick={toggleClass} activeClassName='is-active' href ='civil'>Civil & Electrical Contracting</Link> </li>
                            <li><Link onClick={toggleClass} activeClassName='is-active' href ='/solar'>Solar PV System Installations</Link></li>
                            <li><Link onClick={toggleClass} activeClassName='is-active' href ='/building'>Building Maintainance Services</Link></li>
                                </ul></li>
                        <li className={`${styles.menu_item}  ${styles.sub_menus_arrows}`} onClick={toggleSubmenu2}> Projects<FiChevronDown /> 
                            <ul className={boxClassSubMenu2.join(' ')} > 
                           <li> <Link onClick={toggleClass} activeClassName='is-active' href ='/executed'> Executed Projects </Link></li>
                           <li> <Link onClick={toggleClass} activeClassName='is-active' href ='/underconstruction'>Under Contruction Projects</Link></li> 
                            </ul>
                        </li>
                        <li className={styles.menu_item}> <Link href ='contact' onClick={toggleClass} activeClassName='is-active'> Contact</Link></li>
                       
                     </ul> 
                    </div> 
                    </div>   
            </div>
	    </div>
    </header>
    )
}
export default Navbarmenu



















