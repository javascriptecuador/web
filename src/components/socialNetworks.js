import React from 'react'
import githubSVG from '../../public/static/iconos/github.svg'
import telegramSVG from '../../public/static/iconos/telegram.svg'
import twitterSVG from '../../public/static/iconos/twitter.svg'
import eventbriteSVG from '../../public/static/iconos/eventbrite.png'

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