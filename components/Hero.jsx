import css from "../styles/Hero.module.css"
import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'

export default function Hero() {
    return(
<div className={css.container}>
    

    <div className={css.left}>

        <div className={css.heroText}>
            <span>Be the Fastest</span>
            <span>In Delivering</span>
            <span>Your
                <span style={{color: 'var(--themeRed'}}> Pizza</span>
            </span>
        </div>

        <span className={css.miniText}>
            Delicious food and free delivery.
        </span>

        <button className={`btn ${css.btn}`}>
            Get Started
        </button>

    </div>

            {/* Right */}
        <div className={css.right}>
            <div className={css.imageContainer}>
                <Image src={HeroImage} alt='' layout='intrinsic' />
            </div>

            <div className={css.ContactUs}>
                <span>Contact Us</span>
                    <div>
                    <UilPhone color='white'/>
                    </div>
            </div>

            <div className={css.Pizza}>
                <div>
                    <Image src={Pizza1} alt= '' objectFit="cover" layout="intrinsic"/>
                </div>

                <div className={css.details}>
                    <span>Italian Pizza</span>
                    <span>
                        <span style={{color: "var(--themeRed)"}}>$ </span>
                        7.48
                        </span>
                </div>
            </div>
        </div>
</div>
    )
}