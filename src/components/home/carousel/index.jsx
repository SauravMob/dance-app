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

  return (
    <div className='carousel'>
      <div className="ambassador-slider" id="slider">
        <input type="radio" name="slider" id="s1" className="radiobtn" checked={activeCarousel === 1} />
        <input type="radio" name="slider" id="s2" className="radiobtn" checked={activeCarousel === 2} />
        <input type="radio" name="slider" id="s3" className="radiobtn" checked={activeCarousel === 3} />
        <input type="radio" name="slider" id="s4" className="radiobtn" checked={activeCarousel === 4} />
        <input type="radio" name="slider" id="s5" className="radiobtn" checked={activeCarousel === 5} />
        <input type="radio" name="slider" id="s6" className="radiobtn" checked={activeCarousel === 6} />
        <input type="radio" name="slider" id="s7" className="radiobtn" checked={activeCarousel === 7} />

        <label for="s1" id="slide1" className="label1" onClick={() => setActiveCarousel(1)}>
          <div className="ambassador-slider-img">
            <img src={adriano_leropoli_samantha_scali} alt="fantasy" />
          </div>
        </label>
        <label for="s2" id="slide2" className="label2" onClick={() => setActiveCarousel(2)}>
          <div className="ambassador-slider-img">
            <img src={valerie_chartier} alt="forest" />
          </div>
        </label>
        <label for="s3" id="slide3" className="label3" onClick={() => setActiveCarousel(3)}>
          <div className="ambassador-slider-img">
            <img src={naomi_hilaire_guillaume_michaud} alt="left day" />
          </div>
        </label>
        <label for="s4" id="slide4" className="label4" onClick={() => setActiveCarousel(4)}>
          <div className="ambassador-slider-img">
            <img src={francine_liboiron_raphael_bouchard} alt="left night" />
          </div>
        </label>
        <label for="s5" id="slide5" className="label5" onClick={() => setActiveCarousel(5)}>
          <div className="ambassador-slider-img">
            <img src={carol_prieur_emmanuel_jouthe} alt="moon" />
          </div>
        </label>
        <label for="s6" id="slide6" className="label6" onClick={() => setActiveCarousel(6)}>
          <div className="ambassador-slider-img">
            <img src={barbara_kaneratonni_diabo} alt="barbara_kaneratonni_diabo" />
          </div>
        </label>
        <label for="s7" id="slide7" className="label7" onClick={() => setActiveCarousel(7)}>
          <div className="ambassador-slider-img">
            <img src={axelle_munezero} alt="axelle_munezero" />
          </div>
        </label>
      </div>
    </div>
  )
}

export default Carousel
