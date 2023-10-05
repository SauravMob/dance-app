import React, { useState } from "react";
import adriano_leropoli_samantha_scali from '../../assets/images/adriano_leropoli_samantha_scali.jpg'
import valerie_chartier from '../../assets/images/valerie_chartier.jpg'
import naomi_hilaire_guillaume_michaud from '../../assets/images/naomi_hilaire_guillaume_michaud.jpg'
import francine_liboiron_raphael_bouchard from '../../assets/images/francine_liboiron_raphael_bouchard.jpg'
import carol_prieur_emmanuel_jouthe from '../../assets/images/carol_prieur_emmanuel_jouthe.jpg'
import barbara_kaneratonni_diabo from '../../assets/images/barbara_kaneratonni_diabo.jpg'
import axelle_munezero from '../../assets/images/axelle_munezero.jpg'


const Carousel = () => {

  const [activeCarousel, setActiveCarousel] = useState(1)
  const imgArray = [adriano_leropoli_samantha_scali, valerie_chartier, naomi_hilaire_guillaume_michaud, francine_liboiron_raphael_bouchard, barbara_kaneratonni_diabo, axelle_munezero, carol_prieur_emmanuel_jouthe,]

  return (
    <div className='carousel'>
      <div className="ambassador-slider" id="slider">
        {imgArray.map((val, key) => {
          return (
            <input type="radio" name="slider" key={key} id={`s${key}`} className="radiobtn" checked={activeCarousel === key} onChange={() => setActiveCarousel(key)} />
          )
        })}
        {imgArray.map((value, key) => {
          return (
            <label key={key} htmlFor={`s${key}`} id={`slide${key}`} className={`label${key}`} onClick={() => setActiveCarousel(key)}>
              <div className="ambassador-slider-img">
                <img src={value} alt={value} />
              </div>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default Carousel