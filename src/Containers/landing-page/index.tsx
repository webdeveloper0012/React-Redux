import React from 'react'
import CoverImage from './cover-image-section';
import Section2 from './section-2';
import './landing-page.scss';

const Devider = () => {
    return (
        <div className="divider">
            <div className="custom-border" />
        </div>
    )
}

const LandingPage = () => {
    return (
        <div className="Landing-page">
            <CoverImage />
            <Section2 />
            <Devider />
        </div>
    )
}

export default LandingPage;