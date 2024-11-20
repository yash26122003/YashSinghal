import { useEffect, useRef } from 'react'

import discord from '../../assets/socials/discord.png'
import email from '../../assets/socials/email.png'
import github from '../../assets/socials/github.png'
import linkedin from '../../assets/socials/linkedin.png'
import twitter from '../../assets/socials/twitter.png'

import homeimg from '../../assets/misc/home-image.png'
import slash from '../../assets/bg-elements/slash.svg'

import VanillaTilt from 'vanilla-tilt';


function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

function Landing() {

    const options = {
        scale: 1.05,
        speed: 500,
        max: 10,
        perspective: 2000,
    };

    return (
        <section id='home' className='wrapper'>
            <div className="home-text">
                <img className='slash' src={slash} alt="slash" />
                <h1>Yash Singhal</h1>
                <h3>or simply, Yash26</h3>
                <p>Full Stack and ML Developer <br />Working on freelance projects</p>
                <div className="home-socials">
                    <a href="https://discord.com/users/1163313790331387955" target="_blank" rel="noopener noreferrer"><img src={discord} alt="" /></a>
                    <a href="mailto:yashsinghal2612@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="" /></a>
                    <a href="https://github.com/yash26122003" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/yash-singhal-3bba42272/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                    <a href="https://twitter.com/YashSinghal2612" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
                </div>
                <div className="cta-group">
                    <a href="#projects">
                        <button>
                        <div className="side">
                        </div>
                        View Work
                    </button>
                    </a>
                    <a href="https://www.linkedin.com/in/yash-singhal-3bba42272/" target="_blank" rel="noopener noreferrer">
                    <button>
                        <div className="side">
                        </div>
                        Hire Me
                    </button>
                    </a>
                </div>
            </div>
            <div className="home-image">
                <Tilt className="box" options={options} >
                    
                    <img src={homeimg} alt="" />
                </Tilt>
            </div>


            

        </section>
    )
}

export default Landing