import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import vaxed from '../Images/covidVax.jpeg'
import cole from '../Images/coleStepsAfter.jpeg'
import cabin from '../Images/cabinDeckAfter.jpeg'

const HomepageCarousel = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={cabin}
                alt="Painted cabin deck"
                fluid
                />
                <Carousel.Caption>
                <h3>Deck Painting</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={cole}
                alt="new handrail"
                fluid
                />

                <Carousel.Caption>
                <h3>Front step refresh</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={vaxed}
                alt="Vaccine image"
                fluid
                />
                <Carousel.Caption>
                <h3>Fully Vaccinated</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            
        </>
    )
}

export default HomepageCarousel
