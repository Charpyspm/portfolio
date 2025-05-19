import React from 'react';
import bannerImg from '../images/banner.jpg';
import logoLoupe from '../images/icons/chercher.png';
import logoCode from '../images/icons/codage-simple.png';
import logoPinceau from '../images/icons/pinceau.png';


export default function SERVICES() {
  return (
    <>
      <div>
        <img src={bannerImg} alt="Banner" className='img-fluid'/>
      </div>
      <div className='services'>
        <h2 className='text-center mt-5'>Mon offre de services</h2>
        <p className='text-center presta'>Voici les préstations sur lesquelles je peut intervenir</p>
        <hr className='separation bg-primary w-25 mx-auto'/>
      </div>
      <div className='services-list mt-5'>
        <div className="card text-center mb-5 mx-3" style={{width: "18rem"}}>
          <img src={logoPinceau} className="card-img-top mx-auto mt-3" alt="Logo pinceau" style={{width: "32px", height: "32px", objectFit: "contain"}} />
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">UX design</h3>
            <p className="card-text">
              L'UX Design est une discipline qui consiste à concevoir des produits
              (sites web, applications mobiles, logiciels, objets connecter, etc.) en plaçant
              l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience
              utilisateur la plus fluide et agréable possible.
            </p>
          </div>
        </div>
        <div className="card text-center mb-5 mx-3" style={{width: "18rem"}}>
          <img src={logoCode} className="card-img-top mx-auto mt-3" alt="Logo Code" style={{width: "32px", height: "32px", objectFit: "contain"}} />
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">Développement web</h3>
            <p className="card-text">
              Le développement web consiste à créer des sites internet en utilisant des languages
              de programmation (HTML, CSS, JavaScript, PHP, etc.) et de frameworks
              (Bootstrap, React, Angular, etc.).
            </p>
          </div>
        </div>
        <div className="card text-center mb-5 mx-3" style={{width: "18rem"}}>
          <img src={logoLoupe} className="card-img-top mx-auto mt-3" alt="Logo loupe" style={{width: "32px", height: "32px", objectFit: "contain"}} />
          <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">Référencement</h3>
            <p className="card-text">
              Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web
              pour le faire remonter dans les résultats des moteurs de recherche
              (Google, Bing, Yahoo, etc.). 
              L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}