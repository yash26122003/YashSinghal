import { useState } from 'react'


import justicegpt from '../../assets/projects/justicegpt.png'


import campus from '../../assets/projects/campusconnect.png'
import chatbot from '../../assets/projects/chatbot.webp'
import Deepfake from '../../assets/projects/Deepfake.jpg'
import frauddetect from '../../assets/projects/frauddetect.png'
import learn2earn from '../../assets/projects/learn2earn.jpg'
import Phisher from '../../assets/projects/Phisher.jpg'
import selfdrive from '../../assets/projects/selfdrive.png'
import spamclass from '../../assets/projects/spamclass.png'

import dollar from '../../assets/bg-elements/dollar.svg'

import Project from './Project'
import './projects.css'

function Projects() {

    let [set, setSet] = useState(1)

    const ComponentOne = () => {
        return <>
            <Project work='Hackathon' title='Phishing Website Detection' src={Phisher} />
            <Project work='Project' title='Self-Driven Car Simulators' src={selfdrive} />
            <Project work='Project' title='campus connect' src={campus} />
        </>;
    };

    const ComponentTwo = () => {
        return <>
            <Project work='Hackathon' title='Deep fake' src={Deepfake} />
            <Project work='Freelance' title='Chatbot' src={chatbot} />
            <Project work='Hackathon' title='JusticeGPT' src={justicegpt} />
        </>;
        
    };

    const ComponentThree = () => {
        return <>
            <Project work='Freelance' title='Learn 2 earn' src={learn2earn} />
            <Project work='Project' title='Money safe' src={frauddetect} />
            <Project work='Freelance' title='Email Spam Classification' src={spamclass} />
        </>;
        
    };

    const renderComponent = () => {
        switch (set) {
            case 1:
                return <ComponentOne />;
            case 2:
                return <ComponentTwo />;
            case 3:
                return <ComponentThree />;
            default:
                return <ComponentOne />;
        }
    };

    const getButtonStyle = (buttonState) => {
        return {
            backgroundColor: set === buttonState ? 'white' : '',
            color: set === buttonState ? 'black' : '',
        };
    };

    return (
        <section id='projects'>
            <img className='dollar' src={dollar} alt="bg element" />
            <h1>Project•Work</h1>
            <div className="project-btns">
                <button style={getButtonStyle(1)} onClick={() => { setSet(1) }}><div className="side"></div>
                    Work 1</button>
                <button style={getButtonStyle(2)} onClick={() => { setSet(2) }}><div className="side"></div>
                    Work 2</button>
                <button style={getButtonStyle(3)} onClick={() => { setSet(3) }}><div className="side"></div>
                    Work 3</button>
            </div>
            <div className='projects'>
                {renderComponent()}
            </div>
        </section>
    )
}

export default Projects