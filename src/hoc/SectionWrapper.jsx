import {MotionConfig, motion} from 'framer-motion';

import {styles} from '../styles';
import { staggerContainer   } from '../utils/motion';

const SectionWrapper = (component,idName) => function HOC(){
    return(
        <Motion.section>
            <Component />
        </Motion.section>
    )
}

export default SectionWrapper