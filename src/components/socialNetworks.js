import React from 'react'
import githubSVG from '../images/iconos/github.svg'
import telegramSVG from '../images/iconos/telegram.svg'
import twitterSVG from '../images/iconos/twitter.svg'
import eventbriteSVG from '../images/iconos/eventbrite.png'

export default function SocialNetworks() {
    return (
        <div className="section-home-social-networks">
            Siguenos en:
            <div>
                <a href="https://github.com/javascriptecuador/web" target="_blank">
                    <img src={githubSVG} alt="imagen github" />
                </a>
                <a href="#">
                    <img src={telegramSVG} alt="imagen github" />
                </a>
                <a href="#">
                    <img src={twitterSVG} alt="imagen github" />
                </a>
                <a href="#">
                    <img src={eventbriteSVG} alt="imagen github" />
                </a>
            </div>
        </div>
    )
}