import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import {UilShoppingBag} from '@iconscout/react-unicons'

const Header = () => {
  return (
    <div className={css.header}>
        <div className={css.logo}> 
            <span>JLINS</span>
        </div>

        <ul className={css.menu}> 
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
      
        <div className={css.rightSide}>
                <div className={css.cart}>
            <UilShoppingBag size={35} color='@2E2E2E'/>
            <div className={css.badge}>1</div>
                </div>
        </div>
    </div>
  )
}

export default Header