import {UilFacebook, UilGithub, UilInstagram} from '@iconscout/react-unicons'
import css from '../styles/Footer.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png';

export default function Footer(){
    return (

    <div className={css.container}>
       
        <div className={css.social}>
            <UilFacebook size={35}/>
        </div> 

        <div className={css.logo}> 
            <span>JLINS</span>
        </div>

   </div>
    )
  }
  
