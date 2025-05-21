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
              <input type="text" className="form-control" id="name" placeholder='Votre nom' />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="email" placeholder='Votre adresse email' />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" id="tel" placeholder='Votre numéro de téléphone' />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="subject" placeholder='Sujet' />
            </div>
            <div className="mb-3"> 
              <textarea className="form-control" id="message" placeholder='Votre message' rows="3"></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mb-5">Envoyer</button>
            </div>
          </form>
        </div>
        <div className='coordonnees'>
          <div className='container mt-2'>
            <h3 className='text-start'>Mes coordonnées</h3>
            <hr className='separation bg-primary mb-5 w-100 mx-auto'></hr>
            <strong className='text-start'>John Doe</strong>
          </div>
          
        </div>
      </div>
    </>
  )
}