import { useEffect } from "react"
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading'
import ScrollService from '../../utils/ScrollService'
import Animations from '../../utils/Animations'


export default function AboutMe(props) {
    return (
        <div className='about-me-container'>
            <div className="about-me-parent">
            <ScreenHeading title={'About me'} subHeading={"Why Choose Me?"} />
            </div>
        </div>
    )
}
