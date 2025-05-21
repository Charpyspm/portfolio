import React from 'react';

export default function CONTACT() {
  return (
    <>
      <div>
        <h2 className='text-center mt-5'>Contact</h2>
        <p className='text-center presta'>Pour me contacter en vue d'un entretien ou d'un future collaboration, merci de remplir le formulaire de contact.</p>
        <hr className='separation bg-primary mb-5 w-25 mx-auto'/>
      </div>
      <div className='prepa mb-5'>
        <div className='formulaire'>
          <form className='container mt-2'>
            <h3 className='text-start'>Formulaire de contact</h3>
            <hr className='separation bg-primary mb-5 w-100 mx-auto'></hr>
            <div className="mb-3">
              <input type="text" className="form-control" id="name" placeholder='Votre nom' required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder='Votre adresse email' required />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" id="tel" placeholder='Votre numéro de téléphone' required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="subject" placeholder='Sujet' required />
            </div>
            <div className="mb-3"> 
              <textarea className="form-control" id="message" placeholder='Votre message' rows="15" required></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-sombre mb-5">Envoyer</button>
            </div>
          </form>
        </div>
        <div className='coordonnees'>
          <div className='container mt-2'>
            <h3 className='text-start'>Mes coordonnées</h3>
            <hr className='separation bg-primary mb-5 w-100 mx-auto'></hr>
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
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
              width="500"
              height="500"
              style={{ border: 0, borderRadius: "12px", width: "100%", maxWidth: "700px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            
            </iframe>
          </div>
        </div>
        
      </div>
    </>
  )
}