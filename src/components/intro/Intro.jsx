import "./intro.css"
import image from "./perfil.jpg"
import Box from "./Box.jsx";
import Box2 from "./Box2.jsx";

function text(){
    console.log("scrolled");
}

const Intro = () => {
    return (
        <div className="i page" id="i" onScrollCapture={text()} >
            <div className="i-top">
                <div className="i-top-menu">
                    <a href="#i" className="i-top-menu-item">
                        <a href="#i" className="i-menu-text active">WHO AM I</a>
                    </a>
                    <a href="#story" className="i-top-menu-item">
                        <a href="#story" className="i-menu-text blue">HOW I MET WITH SOFTWARE</a>
                    </a>
                    <a href="#contact" className="i-top-menu-item">
                        <a href="#contact" className="i-menu-text green">CONTACT</a>
                    </a>
                </div>
            </div>
            <div className="i-left" id="left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Emin Bilgen</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI Designer</div> 
                            <div className="i-title-item">Politics Researcher</div>
                        </div>
                    </div>
                    <div className="i-desc">
                                I am a web developer and UI designer. I have a passion for
                                every kind of technology and software. I am also a global politics researcher , I really like to publish my opinions about politics.
                    </div>
                </div>    
            </div>
            <div className="i-right" id="right">
                <div className="i-right-wrapper">
                    <div className="i-image">
                        <img src={image} className="i-img"/>
                    </div>
                    <Box />
                    <Box2 />
                </div>
            </div>

        </div>
    );
}    

export default Intro;