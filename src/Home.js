import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
                className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />

            <div className='home__row'>
                <Product id='231311' title='Amazon Basics Gaming Headset for PC and Consoles (Xbox, PS4) with Desktop Mixer – Red'
                        price={3499} image='https://m.media-amazon.com/images/I/71kWaWSmlYL._AC_SL1500_.jpg' rating={4}
                
                />
                <Product id='231312' title='Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)'
                        price={6499} image='https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg' rating={5}
                
                />
                

            </div>


            <div className='home__row'>
                <Product id='231313' title='HP DeskJet 4155e All-in-One Wireless Color Printer, with bonus 6 months free Instant Ink with HP+ (26Q90A)'
                    price={7999} image='https://m.media-amazon.com/images/I/612G5AUOZWL._AC_SL1500_.jpg' rating={4}
                
                />
                <Product id='231314' title='Apple iPhone 12 Pro Max, 512GB, Pacific Blue - Unlocked (Renewed Premium)'
                        price={75999} image='https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg' rating={4}
                
                />
                <Product id='231315' title='Triple Texture Dog Toy Ropes Training Puppy Chew Toys Fetch Tug of War Catch Rope Pet Supplies Dogs Molar for Small/Medium/Large Aggressive Chewers Bulk Birthday Gift'
                    price={435} image='https://m.media-amazon.com/images/I/71SdWoB9fcL._AC_SL1500_.jpg' rating={4}
                
                />
                

            </div>
            
            
            <div className='home__row'>
                
                <Product id='231316' title=
                    'LG OLED C1 Series 65” Alexa Built-in 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K, Dolby Cinema, WiSA Ready, Gaming Mode (OLED65C1PUB, 2021)'
                    price={52999} image='https://m.media-amazon.com/images/I/916NVBBT0mS._AC_SL1500_.jpg' rating={4}
                
                />

            </div>

        </div>  

    </div>
  )
}

export default Home