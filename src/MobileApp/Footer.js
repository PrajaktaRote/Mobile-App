import React from 'react';

import './Footer.css';

function Footer () {
    return (
        <section className="footer">
            <hr className="footer-seperator" />          
                <section className="footer-info">
                    <section className="footer-info-left">
                        <section className="footer-info__name">
                            POLICY
                        </section>
                        <section className="footer-info__returns">
                            Returns Policy
                            <br />
                            Delivery
                            <br/>
                            Security
                            <br/>
                            Privacy
                        </section>        
                    </section>
                    <section className="footer-info-center">
                
                            <section className="footer-info__email signup-color">
                            ABOUT US
                            </section>
                    
                        <section className="footer-info__terms">
                           
                            ©2023 pvt.ltd, All rights reserved
                            <br/>
                        </section>
                    </section>
                    <section className="footer-info-right">
                        <section className="footer-info__number">
                        Follows Us On 
                        </section>
                        <section className="footer-info__contact">
                        <i class="bi bi-whatsapp"></i>
                            <br />
                            <i class="bi bi-facebook"></i>
                            <br/>
                            <i class="bi bi-instagram"></i>
                        </section>
                    </section>
                </section>
            <hr className="footer-seperator" />
        </section>
    )
}

export default Footer;