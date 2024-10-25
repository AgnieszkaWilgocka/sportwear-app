
import {useScroll, useTransform} from "framer-motion";
import Header from "./Header.jsx";
import AnimatingBackground from "./AnimatingBackground.jsx";


export default function MainPage() {

    const{scrollY} = useScroll();

    const scrollH1 = useTransform(scrollY, [0, 400], [0, 500]);
    const scrollH1SmallDevice = useTransform(scrollY, [0, 400], [0, 400]);

    const opacityH1 = useTransform(scrollY, [0, 400], [1, 0]);
    const opacityBackground = useTransform(scrollY, [0, 400, 400, 500], [1, 0.2, 0.2, 0.1]);
    const scrollImg = useTransform(scrollY, [0, 400], [0, -300]);
    const rotateH1 = useTransform(scrollY, [0, 400], [0, -15]);

    const topAnimate = useTransform(scrollY, [0, 100, 200], [0, -200, -400]);
    const leftAnimate = useTransform(scrollY, [0, 100, 200, 300], [0, -300, -600, -900]);
    const rightAnimate = useTransform(scrollY, [0, 100, 200, 300], [0, 300, 600, 900]);
    const downAnimate = useTransform(scrollY, [0, 100, 200], [0, 200, 400]);


    return(
        <>
            <Header scrollImg={scrollImg}
                    scrollH1={scrollH1}
                    rotate={rotateH1}
                    opacity={opacityH1}
                    scrollH1SmallDevice={scrollH1SmallDevice}
            />
            <AnimatingBackground opacity={opacityBackground}
                                 topAnimate={topAnimate}
                                 leftAnimate={leftAnimate}
                                 rightAnimate={rightAnimate}
                                 downAnimate={downAnimate}
            />
            <footer>
                <p>All right reserved</p>
            </footer>
        </>
    )
}