import { Power, Screwdriver, Tree } from "react-bootstrap-icons";
import { Linkedin, Instagram, Github,Twitter } from "react-bootstrap-icons";
import "./Projectspage.css";
function Project() {
    return (
        <div id="Projects">
           
            <h2 class="text-primary text-center mt-5">Projects</h2>
            <div class="row mx-5 mt-5">
                <div class=" col-md-4  col-sm-12">
                    <div class="card px-5 mb-5 bg-light">
                        <div class="card-img mt-2"><Power size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Stock price prediction</h3>
                            <br></br>
                            <br></br>
                            <p className="card-text">I applied machine learning techniques to predict stock prices, undertaking comprehensive data analysis, training various algorithms, and rigorously evaluating their performance. This process is involved to enhance accuracy and make informed predictions in the dynamic realm of financial markets.</p>
                        </div>
                    </div>
                </div>
                <div class=" col-md-4 col-sm-12">
                    <div class="card px-5 mb-5 bg-light">
                        <div class="card-img mt-2 fa-solid fa-leaf"><Tree size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title"> Tomato Plant Leaf Disease Prediction. </h3>
                            <br></br>
                            <br></br>
                            <p className="card-text">
I utilized machine learning to predict tomato plant leaf diseases, integrating data analysis and model training. This proactive approach aids in early disease detection, enabling timely interventions to safeguard plant health and optimize agricultural yield in a sustainable manner.</p>
                        </div>
                    </div>
                </div>
                <div class=" col-md-4 col-sm-12">
                    <div class="card px-5 mb-5 bg-light">
                        <div class="card-img mt-2"><Screwdriver size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Smart Home Automation.</h3>
                            <br></br>
                            <br></br>
                            <p className="card-text">Employing Arduino, I developed a smart home automation system. Utilizing sensors and actuators, it enables remote control of devices. This DIY solution enhances home efficiency, security, and user comfort through custom automation scripts and sensor-triggered actions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="text-primary text-center mt-5">Contact</h2>
            <br></br>
            <center>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={35}  color = "black" className="rounded mx-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram size={35} color="black" className="rounded mx-4" />
                </a>
                <a href="https://github.com/jaddunani" target="_blank" rel="noopener noreferrer">
                    <Github size={35} color = "black" className="rounded mx-4" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Twitter size={35} color = "black" className="rounded mx-4" />
                </a>
                
            </center>
            <br></br>
            <p class="text-center">@2023</p>
        </div>
    )
}
export default Project;