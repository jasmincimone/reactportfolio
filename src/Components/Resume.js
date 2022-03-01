import '../App.css';
import resume1 from '../imgs/resume1.jpg'
import resume2 from '../imgs/resume2.jpg'
// import { connect } from 'react-redux';


function Resume() {
  return (
    <>
    <div className="Home">
        <img src={resume1} className="resume" alt="resume page 1" />
        <img src={resume2} className="resume" alt="resume page 2" />
    </div>
    </>
  );
}

export default Resume;