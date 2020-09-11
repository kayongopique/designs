/** @jsx jsx */
import {jsx} from '@emotion/core'
import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {isMobile} from 'react-device-detect';

import './content.css';
import Path from './assets/Path.png';
import Line from './assets/Line.png';
import Agent from './assets/agent.png';
import Property1 from './assets/property-1.png';
import Property2 from './assets/property-2.png';
import Property3 from './assets/property-3.png';
import Star from './assets/lnr-star.png';
import FamilySale from './assets/fam-sale.png';
import HouseSale from './assets/house-sale.png';
import MountainBg from './assets/mountain-bg.png';
import IconCall from './assets/phone-solid.png';
import IconEvelope from './assets/envelope-regular.png';
import MapPoint from './assets/map-marker-alt-solid.png';
import IMAGEONE from './assets/carousel-1.png';
import IMAGETWO from './assets/carousel-2.png';
import IMAGETHREE from './assets/carousel-3.png';
import IMAGEFOUR from './assets/carousel-4.png';
import IMAGEFIVE from './assets/carousel-5.png';
import FaceBook from './assets/facebook-square-brands.png';
import Instagram from './assets/instagram-brands.png';
import Youtube from './assets/youtube-brands.png';
import Linkedin from './assets/linkedin-in-brands.png';
import MapView from './assets/mapview.png';
import * as mq from '../styles/media-queries';

const contactbg = {
    width: "125%",
    height: 900,
    backgroundImage: `url(${MountainBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [mq.small]: {
        width: '100%',
        height: 1500,
    },
 }

const HexToRGBA = (hex, alpha) => {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(1,3), 16);
    const b = parseInt(hex.slice(1,3), 16);
    if (alpha) {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
        return `rgba(${r}, ${g}, ${b})`;
    }
}

const PropertiesList = () => {
    return ( 
        <section className="container">
            <div  css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '55px',
            [mq.small]: {
                marginTop: '0px',
            }
        }}>
                <h6 css={{
                    fontWeight: '400',
                    color: HexToRGBA('#707070', 0.5),
                    fontSize: '21px',
                    [mq.small]: {
                        fontSize: '14px',
                    }
                    }}>LAS VEGAS, HENDERSON, SUMMERLIN + MORE</h6>
                <h3><span
                css={{
                    fontFamily: 'Raleway-Bold',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#000000',
                    [mq.small]: {
                        fontSize: '22px',
                    }
                }}
                >FEATURED</span>
                <span css={{
                    fontSize: '36px',
                    fontFamily: 'Raleway-Regular',
                    [mq.small]: {
                        fontSize: '22px',
                    },
                    fontWeight: '400',
                    color: '#000000',
                }}> HOMES FOR SALE</span>
                </h3>
                <div >
                    <img css={{
                    width: 76,
                    paddingTop: '20px',
                    paddingBottom: '10px',
                }} src={Path} alt="path"/>
                </div>
            </div>
            <div className="properties-center">
                <div className="card" css={{
                    width: '100%',
                    height: '417px',
                    color: '#000000',
                }}>
                    <img css={{
                        width: '100%',
                        minHeight: '12rem',
                    }} src={Property1} alt="property"/>
                    <div>
                    <p css={{
                        fontSize: '18px',
                        marginTop: '15px',
                        fontWeight: '400',
                        textAlign: 'center',
                    }}>123 MAIN ST. LAS VEGAS, NV 89147</p>
                    <h4 css={{
                        fontSize: '28px',
                        marginTop: '-8px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>$800,150</h4>
                <ul className="nav"
                css={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                        <li>
                            <span><i className="fa fa-bed" ></i></span>
                            3
                        </li>
                    <li>
                    <span><i className="fa fa-bath" ></i></span>
                    5
                    </li>
                    <li>
                    <span><i className="fa fa-home" ></i></span>
                    2,504 SqFt
                    </li>        
                </ul> 
                <div css={{
                    textAlign: 'center',
                    paddingTop: '16px',
                }}>
                    <a href="#" css={{
                        fontSize: '16px',
                        fontWeight: "500",
                        color: '#023061',
                        textDecoration: 'underline',
                    }}>Schedule a Showing</a>
                </div>
                    </div>
                </div><div className="card" css={{
                    width: '100%',
                    height: '417px',
                    color: '#000000',
                }}>
                    <img css={{
                        width: '100%',
                        minHeight: '12rem',
                    }} src={Property2} alt="property"/>
                    <div>
                    <p css={{
                        fontSize: '18px',
                        marginTop: '15px',
                        fontWeight: '400',
                        textAlign: 'center',
                    }}>123 MAIN ST. LAS VEGAS, NV 89147</p>
                    <h4 css={{
                        fontSize : '28px',
                        marginTop: '-8px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>$800,150</h4>
                <ul className="nav"
                css={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>
                        <li>
                            <span><i className="fa fa-bed" ></i></span>
                            3
                        </li>
                    <li>
                    <span><i className="fa fa-bath" ></i></span>
                    5
                    </li>
                    <li>
                    <span><i className="fa fa-home" ></i></span>
                    2,504 SqFt
                    </li>        
                </ul> 
                <div css={{
                    textAlign: 'center',
                    paddingTop: '16px',
                }}>
                    <a href="#" css={{
                        fontSize: '16px',
                        fontWeight: "500",
                        color: '#023061',
                        textDecoration: 'underline',
                    }}>Schedule a Showing</a>
                </div>
                    </div>
                </div>
                <div className="card" css={{
                    width: '100%',
                    height: '417px',
                    color: '#000000',
                }}>
                    <img css={{
                        width: '100%',
                        minHeight: '12rem',
                    }} src={Property3} alt="property"/>
                    <div>
                    <p css={{
                        fontSize: '18px',
                        marginTop: '15px',
                        fontWeight: '400',
                        textAlign: 'center',
                    }}>123 MAIN ST. LAS VEGAS, NV 89147</p>
                    <h4 css={{
                        fontSize: '28px',
                        marginTop: '-8px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}>$800,150</h4>
                <ul className="nav"
                css={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>
                        <li>
                            <span><i className="fa fa-bed" ></i></span>
                            3
                        </li>
                    <li>
                    <span><i className="fa fa-bath" ></i></span>
                    5
                    </li>
                    <li>
                    <span><i className="fa fa-home" ></i></span>
                    2,504 SqFt
                    </li>        
                </ul> 
                <div css={{
                    textAlign: 'center',
                    paddingTop: '16px',
                }}>
                    <a href="#" css={{
                        fontSize: '16px',
                        fontWeight: "500",
                        color: '#023061',
                        textDecoration: 'underline',
                    }}>Schedule a Showing</a>
                </div>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export {PropertiesList};

const BannnerView = () => {
    return ( 
        <section>
            <div css={{
                width: "100%",
                height: 550,
                [mq.small]: {
                    // height: 455,
                    height: 930,
                },
                [mq.medium]: {
                    // height: 455,
                    height: 455,
                },
                margin: '110px 0 40px 0',
                backgroundColor: '#023061',
            }}>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4" css={{
                        [mq.small]: {
                            paddingBottom: '20px',
                        }
                    }}>
                        <img css={{
                            marginTop: '-45px',
                            width: 420,
                            height: 595,
                            [mq.small]: {
                                width: 350,
                                height: 500,
                            },
                            [mq.medium]: {
                                width: 350,
                                height: 500,
                            }
                        }} src={Agent} alt="agent" />
                    </div>
                    <div css={{
                        color: '#fff',
                        marginLeft: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }} className="col-md-6">
                        <h4 css={{
                            fontSize: '48px',
                            [mq.small]:{
                                fontSize: '30px',
                            },
                            [mq.medium]:{
                                fontSize: '30px',
                            },
                            fontWeight: '300',
                        }}><span className="fbrand">ALDEN</span> CASAS</h4>
                        <div css={{paddingLeft: '10px'}}>
                        <p css={{
                            fontSize: '21px',
                            [mq.small]:{
                                fontSize: '16px',
                            },
                            [mq.medium]:{
                                fontSize: '16px',
                            },
                        }}>LICENSED REALTOR® (# 0.547777)</p>
                        <img css={{
                            width: 70,
                            padding: '20px 0 40px 0',
                            [mq.small]:{
                                padding: '10px 20px 20px 0',
                            },
                        }} src={Line} alt="line" />
                        <p css={{
                            fontSize: '18px',
                            fontWeight: '400',
                            letterSpacing: 0.25,
                            lineHeight: '24px',
                            paddingRight: '20px',
                            [mq.small]:{
                                fontSize: '14px',
                                paddingRight: '25px',
                            },
                            [mq.medium]:{
                                fontSize: '14px',
                            },
                        }}>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip 
                            ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa 
                            qui officia deserunt mollit anim id est laborum.</p>
                        <button
                        onClick={""}
                        css={{
                            fontFamily: 'Raleway-Medium',
                            width: 249,
                            height: 60,
                            fontSize: 21,
                            border: '2px solid #ffffff',
                            paddingTop: "10px",
                            paddingBottom: '10px',
                            backgroundColor: 'transparent',
                            color: 'white',
                            marginTop: '20px',
                        }}>
                            CONTACT ME
                        </button>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </section>
     );
}
 
export {BannnerView};

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
        slidesToSlide: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
}
const TestimonialsView = () => {
    return ( 
        <section>
            <div css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '60px',
            }}>
                <p css={{
                    fontSize: '21px',
                    [mq.small]: {
                        fontSize: '18px',
                    },
                    color: HexToRGBA('#707070', 0.5),
                }}>CLIENT</p>
                <h5 css={{
                     fontFamily: 'Raleway-Bold',
                     fontSize: '36px',
                     fontWeight: 'bold',
                     color: '#000000',
                     [mq.small]: {
                         fontSize: '26px',
                     }
                }}>TESTIMONIALS</h5>
                <img css={{
                    width: 70,
                    padding: '20px 0',
                }} src={Path} alt="path"/>
                <Carousel 
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={isMobile ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                // transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                css={{
                    width: '70%',
                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    padding: '50px 0'
                }} 
                responsive={responsive}>
                    <div css={{
                        padding: '0 10px',
                    }}>
                        <div css={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: '15px',
                        }}>
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                        </div>
                        <p css={{
                            textAlign: 'center',
                            fontSize: '18px',
                            [mq.small]: {
                                fontSize: '14px',
                            },
                            [mq.medium]: {
                                fontSize: '16px',
                            },
                            color: '#000',
                            fontWeight: '400',
                        }}>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.  
                            officia deserunt mollit anim id est laborum.</p>
                            <p css={{
                            textAlign: 'center',
                            fontSize: '18px',
                            [mq.small]: {
                                fontSize: '14px',
                            },
                            [mq.medium]: {
                                fontSize: '16px',
                            },
                            color: '#000',
                            fontWeight: '400',
                        }}>- First Last</p>
                    </div>
                    <div css={{
                        padding: '0 10px',
                    }}>
                        <div css={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: '15px',
                        }}>
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                        </div>
                        <p css={{
                            textAlign: 'center',
                            fontSize: '18px',
                            [mq.small]: {
                                fontSize: '14px',
                            },
                            [mq.medium]: {
                                fontSize: '16px',
                            },
                            color: '#000',
                            fontWeight: '400',
                        }}>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.  
                            officia deserunt mollit anim id est laborum.</p>
                            <p css={{
                            textAlign: 'center',
                            fontSize: '18px',
                            [mq.small]: {
                                fontSize: '14px',
                            },
                            [mq.medium]: {
                                fontSize: '16px',
                            },
                            color: '#000',
                            fontWeight: '400',
                        }}>- First Last</p>
                    </div>
                    <div>
                        <div css={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: '15px',
                        }}>
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                        </div>
                        <p css={{
                            textAlign: 'center',
                            fontSize: '18px',
                            [mq.small]: {
                                fontSize: '14px',
                            },
                            [mq.medium]: {
                                fontSize: '16px',
                            },
                            color: '#000',
                            fontWeight: '400',
                        }}>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.  
                            officia deserunt mollit anim id est laborum.</p>
                            <p css={{
                            textAlign: 'center',
                            fontSize: '18px',
                            [mq.small]: {
                                fontSize: '14px',
                            },
                            [mq.medium]: {
                                fontSize: '16px',
                            },
                            color: '#000',
                            fontWeight: '400',
                        }}>- First Last</p>
                    </div>
                    <div css={{
                        padding: '0 10px',
                    }}>
                        <div css={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingBottom: '15px',
                        }}>
                             <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                            <img css={{
                                padding: '0 5px',
                            }} src={Star} alt="star" />
                        </div>
                        <p css={{
                            textAlign: 'center',
                            fontSize: '18px',
                            [mq.small]: {
                                fontSize: '14px',
                            },
                            [mq.medium]: {
                                fontSize: '16px',
                            },
                            color: '#000',
                            fontWeight: '400',
                        }}>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua.  
                            officia deserunt mollit anim id est laborum.</p>
                            <p css={{
                            textAlign: 'center',
                            fontSize: '18px',
                            [mq.small]: {
                                fontSize: '14px',
                            },
                            [mq.medium]: {
                                fontSize: '16px',
                            },
                            color: '#000',
                            fontWeight: '400',
                        }}>- First Last</p>
                    </div>
                </Carousel>
            </div>
        </section>
     );
}
 
export {TestimonialsView};

const AdvertisementView = () => {
    return ( 
        <section css={{
            width: '100%',
            height: 890,
            [mq.small]: {
                height: 1300,
            },
            marginTop: '20px',
            backgroundColor: HexToRGBA('#023061', 0.10),
        }}>
            <div className="row">
                <div className="col-md-6">
                    <img css={{
                        width: "100%",
                        height: 445,
                        [mq.small]: {
                            height: '300px'
                        }
                    }} src={FamilySale} alt="family sale" />
                </div>
                <div css={{
                    paddingLeft: '50px',
                    paddingTop: '40px',
                }} className="col-md-5">
                    <h4 css={{
                        fontFamily: 'Raleway-Bold',
                        fontSize: '36px',
                        fontWeight: 700,
                        color: '#000',
                        [mq.small]: {
                            fontSize: '28px',
                        }
                    }}>PURCHASE</h4>
                    <h4 css={{
                        fontFamily: 'Raleway-Regular',
                        fontSize: '36px',
                        fontWeight: 400,
                        color: '#000',
                        [mq.small]: {
                            fontSize: '28px',
                        }
                    }}> A HOME</h4>
                    <img css={{
                        padding: '20px 0',
                        width: 76,
                    }} src={Path} alt="path" />
                    <p css={{
                        fontSize: '18px',
                        padding: '10px 20px 10px 0',
                        [mq.small]: {
                            fontSize: '14px',
                            padding: '10px 30px 10px 0'
                        }
                    }}>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    </p>
                    <button
                        onClick={""}
                        css={{
                            width: 249,
                            height: 60,
                            fontFamily: 'Raleway-Medium',
                            border: '2px solid #000',
                            paddingTop: "10px",
                            paddingBottom: '10px',
                            fontSize: '21px',
                            marginTop: '20px',
                            backgroundColor: 'transparent',
                            color: '#000',
                        }}>
                            GET STARTED
                        </button>
                </div>
            </div>
            <div className="row">
                <div css={{
                     paddingTop: '30px',
                     paddingLeft: 130,
                     [mq.small]: {
                         paddingLeft: 60,
                     }
                }} className="col-md-5">
                <h4 css={{
                    fontFamily: 'Raleway-Bold',
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#000',
                      [mq.small]: {
                          fontSize: '28px',
                      }
                }}>LIST</h4>
                    <h4 css={{
                        fontFamily: 'Raleway-Regular',
                        fontSize: '36px',
                        fontWeight: 400,
                        color: '#000',
                        [mq.small]: {
                            fontSize: '28px',
                        }
                    }}> A HOME</h4>
                    <img css={{
                        padding: '20px 0',
                        width: 76,
                    }} src={Path} alt="path" />
                    <p css={{
                          fontSize: '18px',
                          padding: '10px 20px 10px 0',
                          [mq.small]: {
                              fontSize: '14px',
                          }
                    }}>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    </p>
                    <button
                        onClick={""}
                        css={{
                            fontFamily: 'Raleway-Medium',
                            width: 380,
                            border: '2px solid #000',
                            padding: '10px 20px',
                            fontSize: '21px',
                            marginTop: '20px',
                            backgroundColor: 'transparent',
                            color: '#000',
                            [mq.small]: {
                                width: 240,
                                marginBottom: '20px',
                            },
                            [mq.medium]:{
                                marginTop: '10px',
                            }
                        }}>
                            GET A FREE HOME ESTIMATE
                        </button> 
                </div>
                <div className="col-md-7">
                    <img css={{
                        width: "100%",
                        height: 445,
                        paddingLeft: 85,
                        [mq.small]: {
                            height: '300px',
                            paddingLeft: '0px',
                        },
                        [mq.medium]:{
                            paddingLeft: 60,
                        },
                    }} src={HouseSale} alt="house sale" />
                </div>
            </div>
        </section>
     );
}
 
export {AdvertisementView};
const ContactView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {}

    return ( 
        <section className="container">
            <div  css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '80px',
            [mq.small]: {
                marginTop: '100px',
            }
        }}>
                <h6 css={{
                    fontSize: '21px',
                    fontWeight: '400',
                    color: HexToRGBA('#707070', 0.5),
                    [mq.small]: {
                        fontSize: '18px',
                    }
                    }}>I AM AVAILABLE</h6>
                <h3><span
                css={{
                    fontFamily: 'Raleway-Bold',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#000000',
                    [mq.small]: {
                        fontSize: '28px',
                    }
                }}
                >CONTACT ME</span>
                <span css={{
                    fontFamily: 'Raleway-Regular',
                    fontSize: '36px',
                    fontWeight: '400',
                    color: '#000000',
                    [mq.small]: {
                        fontSize: '28px',
                    }
                }}> TODAY</span>
                </h3>
                <div css={{
                    marginTop: '10px',
                    marginBottom: '60px',
                }}>
                    <img css={{
                        width: 70,
                    }} src={Path} alt="path"/>
                </div>
                <div style={contactbg}>
                <div css={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    [mq.small]: {
                        flexDirection: 'column',
                        gridGap: '1.5rem',
                    }
                }}className="row">
                        <div css={{
                            color: HexToRGBA('#000000', 0.50),
                            fontSize: '21px',
                    }} className="center">
                            <img src={IconCall} alt="phone" />
                            <p>DIRECT PHONE #</p>
                            <a css={{
                                color: HexToRGBA("#000000"),
                                marginTop: '-10px',
                            }} href="#">702-123-4567</a>
                        </div>
                        <div css={{
                            color: HexToRGBA('#000000', 0.50)
                        }} className="center">
                            <img src={IconEvelope} alt="message" />
                            <p>EMAIL ME</p>
                            <a css={{
                                color: HexToRGBA("#000000"),
                                marginTop: '-10px',
                            }} href="#">EMAIL@MAIL.COM</a>
                        </div>
                        <div css={{
                            color: HexToRGBA('#000000', 0.50),
                        }} className="center">
                            <img src={MapPoint} alt="location" />
                            <p>OFFICE</p>
                            <a css={{
                                color: HexToRGBA("#000000"),
                                marginTop: '-10px',
                            }} href="#">REALTY OFFICE</a>
                        </div>
                    </div>
                    <div css={{
                        marginTop: '90px',
                        [mq.small]: {
                            marginTop: '70px',
                        }
                    }}>
                        <p css={{
                            fontSize: '21px',
                            textAlign: 'center',
                            fontWeight: '300',
                            color: HexToRGBA("#000000", 0.50),
                            [mq.small]: {
                                fontSize: '18px',
                            }
                        }}>SCHEDULE A FREE</p>
                        <h3 css={{
                            fontFamily: 'Raleway-Bold',
                            fontSize: '36px',
                            textAlign: 'center',
                            color: '#023061',
                            fontWeight: '700',
                            [mq.small]: {
                                fontSize: '28px',
                            }
                        }}>HOME CONSULTATION</h3>
                        <div>
                        <form css={{
                            marginTop: '50px',
                        }} onSubmit={handleSubmit}>
                <fieldset>
                  <div className="" css={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      [mq.small]: {
                          flexDirection: 'column',
                      }
                  }}>
                    <input css={{
                        width: 268,
                        height: 50,
                        borderRadius: 0,
                        color: '#000',
                        border: '1px solid #707070',
                        margin: '10px 20px 10px 0',
                    }}
                      className="form-control"
                      placeholder="NAME"
                      onChange={(ev)=> setEmail(ev.target.value)} />
                      <input css={{
                        width: 268,
                        height: 50,
                        borderRadius: 0,
                        border: '1px solid #707070',
                        margin: '10px 20px 10px 0',
                    }}
                      className="form-control"
                      placeholder="EMAIL"
                      onChange={(ev)=> setPassword(ev.target.value)} />
                  </div>
                  <div className="" css={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      [mq.small]: {
                        flexDirection: 'column',
                    }
                  }}>
                    <input css={{
                        width: 268,
                        height: 50,
                        borderRadius: 0,
                        border: '1px solid #707070',
                        margin: '10px 20px 10px 0',
                    }}
                      className="form-control"
                      placeholder="PHONE"
                      onChange={(ev)=> setEmail(ev.target.value)} />
                      <input css={{
                        width: 268,
                        height: 50,
                        borderRadius: 0,
                        border: '1px solid #707070',
                        margin: '10px 20px 10px 0',
                    }}
                      className="form-control"
                      placeholder="OPTION"
                      onChange={(ev)=> setPassword(ev.target.value)} />
                  </div>
                  <div css={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}>
                      <textarea css={{
                        width: 555,
                        [mq.small]:{
                            width: '80%',
                        },
                        minHeight: 197,
                        borderRadius: 0,
                        padding: '10px 13px',
                        border: '1px solid #707070',
                        margin: '10px 20px 10px 0',
                      }}
                      defaultValue="MESSAGE"
                      >
                      </textarea>
                  </div>
                      <div css={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginTop: '40px',
                      }}>
                      <button css={{
                        fontFamily: 'Raleway-Medium',
                      width: 220,
                      height: 60,
                      fontSize: '21px',
                      backgroundColor: '#023061',
                      color: '#fff',
                      borderRadius: 0,
                      border: '1px solid #023061',
                  }}
                    className="btn"
                    type="submit"
                    disabled={false}>
                    SUBMIT
                  </button>
                      </div>
                </fieldset>
              </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export {ContactView};

const ImageCarousel = () => {
    const responsiveImages = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
          }
    }
    return ( 
        <section css={{
            marginBottom: 210,
            [mq.small]: {
                marginTop: 300,
            }
        }}>
            <div>
                <Carousel css={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center,'
                }} 
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                responsive={responsiveImages}>
                    <img css={{
                        width: '273px',
                        height: 254,
                        border: '1px solid #fff',
                    }} src={IMAGEONE} alt="family house" />
                    <img css={{
                         width: '273px',
                        height: 254,
                        border: '1px solid #fff',
                    }} src={IMAGETWO} alt="family house" />
                    <img css={{
                         width: '273px',
                        height: 254,
                        border: '1px solid #fff',
                    }} src={IMAGETHREE} alt="family house" />
                    <img css={{
                         width: '273px',
                        height: 254,
                        border: '1px solid #fff',
                    }} src={IMAGEFOUR} alt="family house" />
                    <img css={{
                         width: '273px',
                        height: 254,
                        border: '1px solid #fff',
                    }} src={IMAGEFIVE} alt="family house" />
                </Carousel>
            </div>
        </section>
     );
}
 
export {ImageCarousel};

const footerbg = {
    height: 311,
    [mq.small]: {
        height: 311,
    },
    backgroundColor: '#023061',  
}
const Footer = () => {
    return ( 
        <footer style={footerbg} >
            <div css={{
                backgroundColor: '#023061', 
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                color: '#fff',
                [mq.large]: {
                    height: 180,
                },
                [mq.medium]: {
                    height: 180,
                },
                padding: '20px 0',
                [mq.small]: {
                    flexDirection: 'column',
                    gridGap: '2rem',
                }
            }}>
                <div css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
            }}>
                <h4 css={{
                    fontSize: '32px',
                    [mq.small]: {
                        fontSize: '22px',
                    }
                    }}>
                    <span className="fbrand">ALDEN</span>
                    <span css={{
                        fontFamily: 'Roboto-Light',
                    }}> CASAS</span></h4>
                <div>
                    <img css={{
                        padding: '5px',
                    }} src={FaceBook} alt="facebook" />
                    <img css={{
                        padding: '5px',
                    }} src={Instagram} alt="instagram" />
                    <img css={{
                        padding: '5px',
                    }} src={Youtube} alt="youtube" />
                    <img css={{
                        padding: '5px',
                    }} src={Linkedin} alt="linkedin" />
                </div>
                </div>
                <div css={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                    <a css={{
                        color: '#fff',
                        fontSize: '18px',
                        [mq.small]:{
                            fontSize: '14px',
                        }
                    }} href="#">About Alden</a>
                    <a css={{
                        color: '#fff',
                        fontSize: '18px',
                        [mq.small]:{
                            fontSize: '14px',
                        }
                    }} href="#">Search Homes</a>
                    <a css={{
                        color: '#fff',
                        fontSize: '18px',
                        [mq.small]:{
                            fontSize: '14px',
                        }
                    }} href="href">Buy or Sell</a>
                    <a css={{
                        color: '#fff',
                        fontSize: '18px',
                        [mq.small]:{
                            fontSize: '14px',
                        }
                    }} href="href">Contact Me</a>
                </div>
                <div className="location">
                    <div css={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        paddingRight: '20px',
                        
                    }}>
                        <h5 css={{
                            fontFamily: 'Raleway-Bold',
                            fontSize: '21px',
                            [mq.small]: {
                                fontSize: '18px',
                            },
                            paddindBottom: '20px'
                        }}>REALTY OFFICE</h5>
                        <p css={{
                            fontSize: "18px",
                            [mq.small]: {
                                fontSize: '14px',
                            }
                        }}>123 Street City, <br></br>State 8907</p>
                        <a css={{
                            fontSize: '18px',
                            color: '#fff',
                            marginTop: '-15px',
                            textDecoration: 'underline',
                            [mq.small]: {
                                fontSize: '14px',
                            }
                        }} href="#">Get Directions</a>
                    </div>
                    <div>
                        <img css={{
                            width: 181,
                            height: 116,
                        }} src={MapView} alt="map view" />
                    </div>
                </div>
            </div>
            <div css={{
                padding: '0 150px',
                marginTop: '10px',
                backgroundColor: '#023061', 
            }}>
                <p css={{
                    fontSize: '16px',
                    color: '#fff',
                    textAlign: 'center',
                    padding: '30px 0',
                    borderTop: `1px solid #707070`,
                    [mq.small]: {
                        fontSize: '12px',
                        padding: '20px 0',
                    }
                }}>Ⓒ No Rights Reserved - Project Brief</p>
            </div>
        </footer>
     );
}
 
export {Footer};

const ContentView = () => {
    return ( 
        <section> 
            <PropertiesList/>
            <BannnerView/>
            <TestimonialsView/>
            <AdvertisementView/>
            <ContactView/>
            <ImageCarousel/>
            <Footer/>
        </section>
    );
}
 
export default ContentView;