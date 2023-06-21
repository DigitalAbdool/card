import facebook from '../Images/Facebook Icon.svg';
import Twitter from '../Images/Twitter Icon.svg';
import Instagram from '../Images/Instagram Icon.svg';
import GitHub from '../Images/GitHub Icon.svg';

function Footer(){
    return(
        <div className="footer-wrapper">
            <img src={facebook} alt= "facebook" className='facebook'/>
            <img src={Twitter} alt= "Twitter" className='Twitter'/>
            <img src={Instagram} alt= "Instagram" className='Instagram'/>
            <img src={GitHub} alt= "GitHub" className='Github'/>
        </div>
    );
}


export default Footer;