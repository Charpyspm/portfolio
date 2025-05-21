import React from 'react';
import { Helmet } from 'react-helmet';


export default function MENTIONS() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div>
        <h2 className='text-center mt-5'>Mentions légales</h2>
        <hr className='separation bg-primary mb-5 w-25 mx-auto'/>
      </div>
      <div className='faq'>
        <div className="accordion accordion-w" id="monAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              Editeur du site
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#monAccordion">
              <div className="accordion-body first-faq">
                <h4 className='text-start'>John Doe</h4>
                <p className='text-start'>
                  <i className='bi bi-map me-2'></i>
                    40 rue Laure Diebold
                </p>
                <p className='text-start'>
                  <i className='bi bi-geo-alt me-2'></i>
                    69009 Lyon, France
                </p>
                <p className='text-start'>
                  <i className='bi bi-phone me-2'></i>
                    10 20 30 40 50  
                </p>
                <p className='text-start'>
                  <i className='bi bi-envelope-at me-2'></i>
                    john.doe@gmail.com
                </p> 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Hébergeur
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#monAccordion">
              <div className="accordion-body">
                <h4 className='text-start'>alwaysdata</h4>
                <p className='text-start'>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <p className='text-start'>
                  <i className='bi bi-globe me-2'></i>
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Crédits
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#monAccordion">
              <div className="accordion-body">
                <h4 className='text-start'>Crédits</h4>
                <p className='text-start'>
                  Ce site a été réalisé par John Doe, étudiant au 
                  <a href='hhtps://www.centre-europeen-formation.com' target="_blank" rel="noopener noreferrer">Centre Européen de Formation</a>.
                </p>
                <p className='text-start'>
                  Les images utilisées sur ce site sont libre de droits et ont été obtenues sur le site 
                  <a href='pixabay.com' target="_blank" rel="noopener noreferrer">Pixabay</a>.
                </p>
                <p className='text-start'>
                  La favicon de ce site a été fournie par 
                  <a href='https://www.flaticon.com/de/kostenlose-icons/john-doe' target="_blank" rel="noopener noreferrer">John doe Icons erstellt von Freepik - Flaticon</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}