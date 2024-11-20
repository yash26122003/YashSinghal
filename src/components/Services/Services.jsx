import './services.css'
import one from '../../assets/misc/1.svg'
import two from '../../assets/misc/2.svg'
import three from '../../assets/misc/3.svg'
import tick from '../../assets/misc/tick.svg'

import and from '../../assets/bg-elements/and.svg'

function Services() {
    return (
        <section id='services'>
            <img className='and' src={and} alt="bg element" />
            <h1>Hire•Me</h1>
            <div className="services">
                <div className="service">
                    <img src={one} className='servicetop' alt="" />
                    <h2><span className="highlight">Website</span> <br /> Development</h2>
                    <hr />
                    <div className='points'>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Fully Responsive</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>SEO Friendly</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Quick Delivery</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Creative Designs</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Fast & Secure</p>
                        </span>
                    </div>
                </div>
                <div className="service">
                    <img src={two} className='servicetop' alt="" />
                    <h2><span className="highlight">Machine Learning</span> <br /> Development</h2>
                    <hr />
                    <div className='points'>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Efficient Data Preprocessing</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Scalable ML Models</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Accurate Predictions</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Optimized Training Pipelines</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Seamless Model Deployment</p>
                        </span>
                    </div>
                </div>
                <div className="service">
                    <img src={three} className='servicetop' alt="" />
                    <h2><span className="highlight">Deep Learning</span> <br /> Solution</h2>
                    <hr />
                    <div className='points'>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Advanced Neural Networks</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Custom Model Architectures</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Cutting-Edge NLP and CV Solutions</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Real-time Inference</p>
                        </span>
                        <span className="point">
                            <img src={tick} alt="" />
                            <p>Secure and Reliable AI Systems</p>
                        </span>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services