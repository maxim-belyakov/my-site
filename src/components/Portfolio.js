import React from 'react';
import { Link } from "react-router-dom";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider, DotGroup } from 'pure-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import projectsData from "../JSON/projectsData"

import './../scss/portfolio.scss';

export default function Portfolio() {
    const projects = projectsData.message

    return(      
        <div className="PortfolioContiner">
            <main className="PortfolioContiner_Back">
                <h2 className="check">
                    <Link to="/">Back</Link>
                </h2>
            </main>

            <div class="PortfolioContiner_Projects">
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={7}
                    step={1}
                    isIntrinsicHeight
                    infinite={true}
                    currentSlide={1}
                >
                    <Slider className="slider">
                        {projects.map((project, i) => (                    
                            <Slide index={i} key={i} className="slide">
                                <div className="slideContent" className={"slideContent " + (i === 0 ? 'meText' : '')}>
                                    <div className="slideContent_picturesSlider">
                                        <img className="slideContent_picture" alt={project.imgs[0]} src={'projects/' + project.imgs[0]}></img>
                                    </div>
                                    <div class="slideContent_text">
                                        <h3 className="slideContent_name">{project.name}</h3>

                                        {project.description.map((part, i) => (
                                            <p claaName="slideContent_description">{part}</p>
                                        ))}

                                        <div className="slideContent_tagContainer"> 
                                            {project.tags.map((tag, i) => (
                                                <span className="slideContent_tag" style={{backgroundColor: tag.color}}>{tag.name}</span>
                                            ))}
                                        </div>

                                        <a className="slideContent_link" target="_blank" href={project.link}>{project.linkName}</a> 
                                    </div> 
                                </div>
                            </Slide>
                        ))}
                    </Slider>
                    <div className="controllButtons">
                        <ButtonBack className="controllButtons_left"><FontAwesomeIcon className="controllButtons_icon" size="3x" icon={faAngleLeft} /></ButtonBack>
                        <ButtonNext className="controllButtons_right"><FontAwesomeIcon className="controllButtons_icon" size="3x" icon={faAngleRight} /></ButtonNext>
                        <div className="controllButtons_numbers">
                            <DotGroup dotNumbers />
                        </div>
                    </div>
                </CarouselProvider>            
            </div>            
        </div>
    )
  }