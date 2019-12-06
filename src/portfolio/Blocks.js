import React, { Component } from 'react';
import Slider from 'react-slick'
import './blks.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import '../../node_modules/slick-carousel/slick/slick.css'


export default class Blocks extends Component {
    render() {
        const settings = {
            dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
          };
        return (
            <div className='conten' id='conten'>
                <Slider {...settings}>
              <div>
              <div className='blocks' ><a href="https://usmanalicodes.netlify.com/" rel="noopener noreferrer" target='_blank'>
              <div className='nytim'> </div>
                  <div>
                    <p className='blk-text'>NYT Stories</p>
                  </div></a>
                </div>   
                
                </div>
              <div>
              <div className='blocks' ><a href="https://usmanaliredditapi.netlify.com/" rel="noopener noreferrer" target='_blank'>
              <div className='stor'> </div>
                  <div>
                    <p className='blk-text'>Reddit Feeds</p>
                  </div></a>
                </div>                 
                </div>
              <div>
              <div className='blocks'><a href="https://upcomingshowsbyusman.netlify.com/" rel="noopener noreferrer" target='_blank'>
              <div className='finkin'> </div>
                  <div>
                    <p className='blk-text'>Finnkino Shows</p>
                  </div></a>
                </div> 
              </div>
              <div>
              <div className='blocks'><a href="https://play.google.com/store/apps/details?id=com.sometry.usman.proretro" rel="noopener noreferrer" target='_blank'>
              <div className='anro'> </div>
                  <div>
                    <p className='blk-text'>Location Tracking</p>
                  </div></a>
                </div>               
              </div>
              </Slider>
            </div>
        )
    }
}
