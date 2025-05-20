import React from 'react';
import bannerImg from '../images/banner.jpg';
import freshFoodImg from '../images/portfolio/fresh-food.jpg';
import coderImg from '../images/portfolio/coder.jpg';
import espaceBienEtreImg from '../images/portfolio/espace-bien-etre.jpg';
import restaurantJaponaisImg from '../images/portfolio/restaurant-japonais.jpg';
import screensImg from '../images/portfolio/screens.jpg';
import seoImg from '../images/portfolio/seo.jpg';

export default function PORTFOLIO() {
  return (
    <>
      <div>
        <img src={bannerImg} alt="Banner" className='img-fluid'/>
      </div>
      <div>
        <h2 className='text-center mt-5'>Portfolio</h2>
        <p className='text-center presta'>Voici quelques-unes de mes réalisations</p>
        <hr className='separation bg-primary w-25 mx-auto'/>
      </div>
      <div className='portfolio-list mt-5'>
        <div className='d-flex justify-content-center flex-wrap mb-4'>
          <div className='card text-center mb-5 mx-3' style={{width: "18rem"}}>
            <img src={freshFoodImg} alt='Fresh food' className='card-img-top mx-auto'/>
            <h3 className='portfolio-title'>Fresh Food</h3>
            <p className='description'>Site de vente de produit frais en ligne</p>
            <button className='btn btn-primary mb-3 w-50 mx-auto'>Voir le site</button>
            <div className='card-extension mt-auto'>
              <p className='legend'>Site réaliser avec PHP et MySQL</p>
            </div>
            </div>
            <div className='card text-center mb-5 mx-3' style={{width: "18rem"}}>
              <img src={restaurantJaponaisImg} alt='Restaurant japonais' className='card-img-top mx-auto'/>
              <h3 className='portfolio-title'>Restaurant Akira</h3>
              <p className='description'>Site de vente de produit frais en ligne</p>
              <button className='btn btn-primary mb-3 w-50 mx-auto'>Voir le site</button>
              <div className='card-extension mt-auto'>
                <p className='legend'>Site réaliser avec WordPress</p>
              </div>
            </div>
            <div className='card text-center mb-5 mx-3' style={{width: "18rem"}}>
              <img src={espaceBienEtreImg} alt='Espace bien être' className='card-img-top mx-auto'/>
              <h3 className='portfolio-title'>Espace bien-être</h3>
              <p className='description'>Site de vente de produit frais en ligne</p>
              <button className='btn btn-primary mb-3 w-50 mx-auto'>Voir le site</button>
              <div className='card-extension mt-auto'>
                <p className='legend'>Site réaliser avec LARAVEL</p>
              </div>
            </div>
        </div>
        <div className='d-flex justify-content-center flex-wrap mb-4'>
          <div className='card text-center mb-5 mx-3' style={{width: "18rem"}}>
            <img src={seoImg} alt='Seo' className='card-img-top mx-auto'/>
            <h3 className='portfolio-title'>SEO</h3>
            <p className='description'>Amélioration du référencement d'un site e-commerce</p>
            <button className='btn btn-primary mb-3 w-50 mx-auto'>Voir le site</button>
            <div className='card-extension mt-auto'>
              <p className='legend'>utilisation des outils SEO</p>
            </div>
          </div>
          <div className='card text-center mb-5 mx-3' style={{width: "18rem"}}>
            <img src={coderImg} alt='Ligne de code' className='card-img-top mx-auto'/>
            <h3 className='portfolio-title'>Création  d'une API</h3>
            <p className='description'>Création d'une API RESTFULL publique</p>
            <button className='btn btn-primary mb-3 w-50 mx-auto'>Voir le site</button>
            <div className='card-extension mt-auto'>
              <p className='legend'>PHP - SYMFONY</p>
            </div>
          </div>
          <div className='card text-center mb-5 mx-3' style={{width: "18rem"}}>
            <img src={screensImg} alt='Differents périphérique' className='card-img-top mx-auto'/>
            <h3 className='portfolio-title'>Maquette d'un site web</h3>
            <p className='description'>Création du prototype d'un site</p>
            <button className='btn btn-primary mb-3 w-50 mx-auto'>Voir le site</button>
           <div className='card-extension mt-auto'>
              <p className='legend'>Réaliser avec FIGMA</p>
           </div>
          </div>
        </div>  
      </div>
    </>
  )
}