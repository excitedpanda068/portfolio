import styles from '../styles/Project.module.css'
import Image from 'next/image'

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import Carousel from 'better-react-carousel'

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} loop >
      <Carousel.Item>
        <img width="100%" src="/imgs/insidertrends/slide1.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/imgs/insidertrends/slide1.png" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/imgs/insidertrends/slide1.png" />
      </Carousel.Item>
    </Carousel>
  )
}

export default function Project(props) {
    return(
        <div className= {styles.container}>

            <div className = {styles.detailsContainer}>

                <h3 className = {styles.tags}>

                    {`${props.tags[0]} | ${props.tags[1]} | ${props.tags[2]}`}

                </h3>

                <h2 className = {styles.title}>
                    {props.title}
                </h2>

                <h4 className = {styles.description}>
                    {props.description}
                </h4>

                <button onClick={() =>{ 
                  props.setIsOpen(true)
                  props.setIndex(props.index)
                  }} className = {styles.projectButton}>
                    View Project
                </button>


            </div>

            {/* <div className = {styles.galleryContainer}>
                <Gallery/>

            </div> */}

            <div className = {styles.galleryContainer}>
              <Image
              src = {props.image}
              layout = "fill"
              objectFit='contain'
              />

            </div>


        </div>
    )
}