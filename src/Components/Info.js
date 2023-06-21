import Abdulazeez from '../Images/My img.JPG';
import Email from '../Images/Email Icon.png';
import LinkedIn from '../Images/Vector.svg';

function Info(){
    return(
        <>
            <div className="Info-img">
                <img src= {Abdulazeez} alt = "Abdulazeez" width= "40%" />
            </div>
           <div className="Info-content">
                    <h2>Abdulazeez kabir</h2>
                    <h3>Frontend Developer</h3>
                    <p>Abdulazeez.website</p>
                <div className="Info-btns">
                    <button className='Email-btn'>
                    <img src={Email} alt= "Email"/>  Email
                    </button> <br /> <br />
                    <button className='In-btn'>
                        <img src={LinkedIn} alt= "LinkedIn"/> LinkedIn
                    </button>
                </div>
                <div className='cnt-wrapper'>
                    <div className="Info-Abt">
                        <h3>About</h3>
                        <p> I am a graduate of Agricultural Economics who is currently a freelance Frontend web developer. i try to
                            keep up with security and best practices, and i am always looking to perfect my craft by always learning 
                            new things. </p>
                    </div>
                    <div className="Info-intts">
                        <h3>Interests</h3>
                        <p>Technology. Agriculture.Sustainable Agriculture. Transportation. Reading Books and Writing</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;