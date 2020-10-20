import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className="home__row">
                    <Product id="1" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries - Paperback" price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg" rating={5} />
                    <Product id="2" title="Apple Macbook Air 2020 Model, (13-Inch, Intel Core i3, 1.1Ghz, 8GB, 256GB, MWTJ2), Eng-KB, Space Gray"  price={2341} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg" rating={4} />
                </div>
                <div className="home__row">
                    <Product id="3" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries - Paperback" price={788} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg" rating={5} />
                    <Product id="4" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries - Paperback" price={999} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg" rating={3}/>
                    <Product id="5" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries - Paperback" price={4000} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg" rating={2} />
                </div>
                <div className="home__row">
                    <Product id="6" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries - Paperback" price={2399} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg" rating={5} />
                </div>            
            </div>
        </div>
    )
}

export default Home
