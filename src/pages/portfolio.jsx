import React from 'react';
import bannerImg from '../images/banner.jpg';
import freshFood from '../images/portfolio/fresh-food.jpg';

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
        <div className='card text-center mb-5 mx-3' style={{width: "18rem"}}>
          <img src={freshFood} alt='Fresh food' className='card-img-top mx-auto'/>
          <h3>Fresh Food</h3>
          <p>Site de vente de produit frais en ligne</p>
          <button className='btn btn-primary mb-3 w-50 mx-auto'>Voir le site</button>
          <div className='card-extension'>
            <p className='legend'>Site réaliser avec PHP et MySQL</p>
          </div>
        </div>
      </div>
    </>
  )
}