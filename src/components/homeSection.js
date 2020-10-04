import React from 'react'
import ComunityDescription from './comunityDescription'
import SocialNetworks from './socialNetworks'

export default function homeSection() {
    return (
        <div className="ec-container home-section-container">
            <ComunityDescription />
            <SocialNetworks />
        </div>
    )
}