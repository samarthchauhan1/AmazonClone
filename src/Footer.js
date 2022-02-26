import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'



function Footer() {
    
        // The back-to-top button is hidden at the beginning
        const [showButton, setShowButton] = useState(false);
      
        useEffect(() => {
          window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          });
        }, []);
      
        // This function will scroll the window to the top 
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
          });
        };
      
        return (
          <>
            {showButton && (
              <button onClick={scrollToTop} className="backbutton">
                <p>Back to Top</p>
              </button>
            )}
              <div className="footer">
                <div className='container'>

                    <div className='details'>
                        
                        <div className='Column'>
                            <h1>Get to Know Us</h1>
                            <Link className='links' to ='/'>About Us</Link>
                            <Link className='links' to ='/'>Careers</Link>
                            <Link className='links' to ='/'>Press Releases</Link>
                            <Link className='links' to ='/'>Amazon Cares</Link>
                            <Link className='links' to ='/'>Gift a Smile</Link>
                            <Link className='links' to ='/'>Amazon Science</Link>
                        </div>
                        <div className='Column'>
                            <h1>Connect with Us</h1>
                            <Link className='links' to ='/'>Facebook</Link>
                            <Link className='links' to ='/'>Twitter</Link>
                            <Link className='links' to ='/'>Instagram</Link>
                            
                        </div>
                        <div className='Column'>
                            <h1>Make Money with Us</h1>
                            <Link className='links' to ='/'>Sell on Amazon</Link>
                            <Link className='links' to ='/'>Sell under Amazon Accelerator</Link>
                            <Link className='links' to ='/'>Amazon Global Selling</Link>
                            <Link className='links' to ='/'>Become an Affiliate</Link>
                            <Link className='links' to ='/'>Fulfilment by Amazon</Link>
                            <Link className='links' to ='/'>Advertise Your Products</Link>
                        </div>
                        <div className='Column'>
                            <h1>Let Us Help You</h1>
                            <Link className='links' to ='/'>COVID-19 and Amazon</Link>
                            <Link className='links' to ='/'>Returns Centre</Link>
                            <Link className='links' to ='/'>100% Purchase Protection</Link>
                            <Link className='links' to ='/'>Help</Link>
                            
                        </div>
                    
                    </div>
                    
                </div>
              </div>
            
      
            
            {/* &#8679; is used to create the upward arrow */}
          </>
        );
      }
    

export default Footer;