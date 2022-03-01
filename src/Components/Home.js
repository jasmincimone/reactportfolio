import '../App.css';
import icon from '../imgs/JasminCimone.jpg'
import Quotelist from '../Components/QuoteList';
// import { connect } from 'react-redux';


function Home() {
  return (
    <div className="Home">
      <div>
        <img src={icon} className="img" alt="JasminCimone" />
      </div>
      <br />
      <br />

      <div>
        <Quotelist />
      </div>
      <br />
      <br />
      
      <div className='about'>
        <p className='paragraph'>
        Hello! My name is Jasmin Cimone Smith and I am a software engineer, graphic designer, and customer service professional <br />
        with an entrepreneurial mindset. have a strong commitment to personal growth, lead by example, and love to find innovative <br />
        solutions to challenges. I thrive in team environments, and execute well working individually. Combined with my strengths, <br />
        my skills and experience allow me to show empathy towards my clients and teammates which realizes stronger, trust-based relationships. <br />
        </p>
      </div>
    </div>

  );
}

export default Home;
