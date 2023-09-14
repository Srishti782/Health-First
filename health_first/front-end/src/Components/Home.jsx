import React from 'react'
import services from '../services'
import Card from './Card'
import Carousel from './Carousel'
import "./Home.css";

const Body = () => {
  return (
    <>
    
    <img className="homeFirstImage" src="img.jpg" alt=""></img>
    <div class="home"> 
      <div className="cards">
        {
          services.map((service,index)=>{
            return(
              <Card key={service.key}
                    id={service.key}
                    img={service.img}
                    title={service.title}
                    content={service.content}
              />
            )
          })
    
        }
      </div>
      <Carousel />
    </div>
    </>
  )
}

export default Body