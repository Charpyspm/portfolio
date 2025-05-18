import React from 'react';
import johnDoeImg from '../images/john-doe-about.jpg';

export default function HOME() {
  return (
    <>
      <div className="home d-flex flex-column justify-content-center align-items-center presentation">
        <h1 className='text-center'>Bonjour, je suis John DOE</h1>
        <h2 className='text-center'>Développeur web full stack</h2>
        <button className='btn btn-danger mt-3'>En savoir plus</button>
      </div>
      <div className='section-presentation'>
        <div className='presentation-text row'>
          <div className='presentation-text-title col-12 col-md-6'>
            <h3 className='text-start'>A propos</h3>
            <hr className='separation bg-primary'/>
            <img src={johnDoeImg} alt='John Doe' className='img-john'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Deleniti numquam hic optio nisi! Voluptatem omnis, sapiente voluptas,
               temporibus natus earum dignissimos autem ex distinctio in quaerat doloremque repellat sint quas.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Deleniti numquam hic optio nisi! Voluptatem omnis, sapiente voluptas,
                temporibus natus earum dignissimos autem ex distinctio in quaerat doloremque repellat sint quas.</p>
          </div>
          <div className='presentation-text-title col-12 col-md-6'>
            <h3 className='text-start'>Mes compétences</h3>
            <hr className='separation bg-primary'/>
            <p className='mb-1'>HTML5 90%</p>
            <div className="progress mb-3" style={{height: "15px"}}>
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{width: "90%"}}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <p className='mb-1'>CSS3 80%</p>
            <div className="progress mb-3" style={{height: "15px"}}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{width: "80%"}}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <p className='mb-1'>JAVASCRIPT 70%</p>
            <div className="progress mb-3" style={{height: "15px"}}>
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{width: "70%"}}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <p className='mb-1'>PHP 60%</p>
            <div className="progress mb-3" style={{height: "15px"}}>
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{width: "60%"}}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
            <p className='mb-1'>REACT 50%</p>
            <div className="progress mb-3" style={{height: "15px"}}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{width: "50%"}}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}
