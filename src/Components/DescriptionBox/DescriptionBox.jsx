import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box">Reviews</div>
            <div className="descriptionbox-nav-box fade"></div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an online platform that facilitates
                buying and selling og products or services over the inetrnet
                server as a virtual marketplace where businesses and individuals
                showcase their products, interact with customers, and conduct
                transactions without the need for a physical presence. E-commerce
                webiste have gained immense popularity due to their convenience
                accessibility, and the global reachthey offer.
            </p>
            <p>
                E-commerce website typically display products or services a 
                detaled descriptions, images, prices, and any available var
                (e.g., sixes, colors). Each product usually has its own dedi
                with relavant informaton.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox