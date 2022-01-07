import React, { useState } from 'react'
import { Col } from 'antd';
import Img from './choonsik.png';

const defaultZoom = {
    width: '100%', height: '320px'
};

const zoonOut = {
    width: '100%', height: '320px',
    transition: 'all 0.5s linear',
    transform: 'scale(1.4)',
    zIndex:'9999',
    position: 'relative'
}


function GridCard(props) {
    const [mouseOverFlag, setMouseOverFlag] = useState(false);

    if (props.LandingPage) {
        return (
            <Col lg={4} md={7} xs={12}>
                <div style={{ position: 'relative' }}>

                    <a href={`/movie/${props.movieId}`}>
                        <img style={mouseOverFlag ? zoonOut : defaultZoom}
                            onMouseOver={(e) => {
                                setMouseOverFlag(true);
                            }}
                            onMouseLeave={(e) => {
                                setMouseOverFlag(false);
                            }}
                            src={props.image}
                            alt={props.movieName}
                            onError={(e) => e.target.src = Img}
                        />
                    </a>
                </div>
            </Col>
        )
    } else {
        return (
            <Col lg={4} md={7} xs={12}>
                <div style={{ position: 'relative' }}>
                    <img style={defaultZoom} src={props.image} alt={props.characterName} onError={(e) => e.target.src = Img} />
                </div>
            </Col>
        )
    }
}

export default GridCard
