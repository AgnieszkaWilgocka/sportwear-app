import logo from "../assets/jacket-start.png"
import rightJacket from "../assets/jacket-beige1.png";
import leftJacket from "../assets/jacket-beige2.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import image from "../assets/background/ryan-plomp-4bEJQM9u-Fc-unsplash-removebg-preview.png";
import {motion, useInView, useMotionValue, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";

export default function Home() {

    const refTarget = useRef(null);

    const isInView = useInView(refTarget, {
        amount: 'all',
    });

    // useEffect(() => {
    //     console.log(`The element ${isInView ? 'is' : 'is NOT'} in view`);
    //
    // }, [isInView]);

    ///

    const{scrollY} = useScroll();

    const scrollH1 = useTransform(scrollY, [0, 400], [0, 500]);
    const opacityH1 = useTransform(scrollY, [0, 400], [1, 0]);
    const opacityBackground = useTransform(scrollY, [0, 400, 400, 500], [1, 0.2, 0.2, 0.1]);
    const scrollImg = useTransform(scrollY, [0, 400], [0, -300]);
    const rotateH1 = useTransform(scrollY, [0, 400], [0, -15]);




    return(
        <>
            <nav>
                <ul>
                    <li>O nas</li>
                    <li>Produkty</li>
                    <li><span><FontAwesomeIcon icon={faBasketShopping}/></span>Koszyk</li>
                </ul>
            </nav>

            <header>
                <motion.div className="logo-img" style={{y: scrollImg}}>
                    <img src={logo} alt="Sport jacket"/>
                </motion.div>
                <motion.h1 style={{y: scrollH1, rotate: rotateH1, opacity: opacityH1}}
                           animate={{type: 'spring'}}
                >
                    Sportswear.com
                </motion.h1>
            </header>


            <motion.div style={{opacity: opacityBackground}} className="img-background">
                <div className="img img-1"></div>
                <div className="img img-2"></div>
                <div className="img img-3"></div>
                <div className="img img-4"></div>
                <div className="img img-5"></div>
                <div className="img img-6"></div>
                <div className="img img-7"></div>
                <div className="img img-8"></div>
                <div className="img img-9"></div>
                <div className="img img-10"></div>
                <div className="img img-11"></div>
                <div className="img img-12"></div>
                <div className="img img-13"></div>
                <div className="img img-14"></div>
                <div className="img img-15"></div>
                <div className="img img-16"></div>
            </motion.div>
            <div className="about">
                <motion.div ref={refTarget} className="img-about-first">
                    <motion.img
                        animate={{
                            x: isInView ? "150%" : "0%"
                        }}
                        transition={{duration: 0.5, type: 'spring', bounce: 0.5}}
                        src={image} alt="Image"/>
                </motion.div>
                <div className="button-about">
                    <motion.button
                        whileHover={{
                            scale: 1.2,
                            rotate: -10,
                        }}
                        animate={{x: isInView ? "-50%" : "0%"}}
                        transition={{duration: 1.2, type: 'spring', bounce: 0.5}}
                    >
                        Check it out
                    </motion.button>
                </div>
            </div>
            <footer>
                <p>All right reserved</p>
            </footer>
        </>
    );
}