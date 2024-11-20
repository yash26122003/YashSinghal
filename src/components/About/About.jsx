import html from '../../assets/skills/html.svg'
import css from '../../assets/skills/css.svg'
import js from '../../assets/skills/js.svg'
import bootstrap from '../../assets/skills/bootstrap.svg'
import git from '../../assets/skills/git.svg'
import github from '../../assets/skills/github.svg'
import mongo from '../../assets/skills/mongo.svg'
import express from '../../assets/skills/express.svg'
import react from '../../assets/skills/react.svg'
import node from '../../assets/skills/nodejs.svg'
import shopify from '../../assets/skills/shopify.svg'
import liquid from '../../assets/skills/liquid.svg'
import wordpress from '../../assets/skills/wordpress.svg'
import wix from '../../assets/skills/wix.svg'
import tailwind from '../../assets/skills/tailwind.svg'
import sass from '../../assets/skills/sass.svg'
import npm from '../../assets/skills/npm.svg'
import unity from '../../assets/skills/unity.svg'
import figma from '../../assets/skills/figma.svg'
import canva from '../../assets/skills/canva.svg'

import docker from '../../assets/skills/docker.svg'
import django from '../../assets/skills/django.svg'
import java from '../../assets/skills/java.svg'
import linux from '../../assets/skills/linux.svg'
import mysql from '../../assets/skills/mysql.svg'
import python from '../../assets/skills/python.svg'
import numpy from '../../assets/skills/numpy.svg'
import pandas from '../../assets/skills/pandas.svg'
import tensorflow from '../../assets/skills/tensorflow.svg'
import keras from '../../assets/skills/keras.svg'
import pytorch from '../../assets/skills/pytorch.svg'
import scikitlearn from '../../assets/skills/scikitlearn.svg'
import selenium from '../../assets/skills/selenium.svg'
import flutter from '../../assets/skills/flutter.svg'





import './about.css'
import exclaim from '../../assets/bg-elements/exclaimation.svg'
import Skill from './Skill.jsx'

function About() {
    return (
        <section id='about' className='wrapper'>
            <img className='exclaim' src={exclaim} alt="bg element" />
            <div className="skills">
                <Skill src={python} name='Python' />
                <Skill src={java} name='Java' />
                <Skill src={flutter} name='Flutter' />
                <Skill src={linux} name='Linux' />
                <Skill src={scikitlearn} name='Scikitlearn' />
                <Skill src={pytorch} name='pytorch' />
                <Skill src={keras} name='Keras' />
                <Skill src={tensorflow} name='Tensorflow' />
                <Skill src={numpy} name='Numpy' />
                <Skill src={pandas} name='Pandas' />
                <Skill src={selenium} name='Selenium' />
                <Skill src={figma} name='Figma' />
                <Skill src={git} name='Git' />
                <Skill src={github} name='GitHub' />
                <Skill src={docker} name='Docker' />
                <Skill src={mysql} name='Mysql' />
                <Skill src={html} name='HTML' />
                <Skill src={css} name='CSS' />
                <Skill src={js} name='Javascript' />
                <Skill src={bootstrap} name='Bootstrap' />
                <Skill src={react} name='React' />
                <Skill src={node} name='Node' />
                <Skill src={npm} name='npm' />
                <Skill src={django} name='Django' />
                
            </div>
            <div className='about'>
                <h1>About•Me</h1>

                
                            <p><span className="highlight">🚀</span> Hello there! <span className="highlight">:&gt;</span> I&apos;m Yash, a <span className="highlight">frontend and ML developer</span> with an interest in everything and a life-long dedication to learning. I am a <span className="highlight">20</span> year old student based in <span className="highlight">India</span>. I started coding in <span className="highlight">2021</span> and now I am pursuing my degree in <span className="highlight">computer science</span>. I enjoy creating things that live on the internet. <span className="highlight">🌐</span></p>

                           
            </div>
        </section>
    )
}

export default About