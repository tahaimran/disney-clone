import React from 'react'
import './login.css'
import Brands from '../../assets/images/cta-logo-one.svg'
import Brand from '../../assets/images/cta-logo-two.png'
import Header from '../Header/Header'
function Login() {
  return (
    <>
      <div className='loginPage'>
      <Header />
        <div className='content'>
          <div className='ctaPng'>
            <img className='imgBrands' src={Brands} alt="" srcset="" />
          </div>
          <div className='callToAction'>
            <div className='button'>
              <p>GET ALL THERE</p>
            </div>
          </div>
          <div className='textCont'>
            <p>Get Premier Acces to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1</p>
          </div>
          <div className='ctaPng'>
            <img className='imgBrand' src={Brand} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  )

}

export default Login