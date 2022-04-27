import React from 'react'

function Footer() {
  return (
      <React.Fragment>
    <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 '>
                    <h6>ABOUT</h6>
                   
                </div>
                <div className='col-md-2 '>
                    <h6>PRODUCT</h6>
                   
                </div>
                <div className='col-md-2 '>
                    <h6>AWARD</h6>
                    
                </div>
                <div className='col-md-2 '>
                    <h6>HELP</h6>
                    
                </div>
                <div className='col-md-3 '>
                    <h6>CONTACT</h6>
                   
                </div>
            </div>
            <hr />
            <div className='paragraph'>
                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div className='icon'>
            <i className="bi bi-facebook"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-github"></i>
            </div>
            <div className='bottom'>
                <p>© 2020 Copyright: MDBootstrap.com</p>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Footer
