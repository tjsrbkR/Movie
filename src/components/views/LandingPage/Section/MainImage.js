import React, { useRef, useEffect } from "react"

function MainImage(props) {
    return (
        <div style={{
            backgroundImage: `url('${props.image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '1000px',
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem',backgroundColor:'rgba(0,0,0,0.5)' }}>
                    <h2 style={{ color: 'white',opacity:'1' }}>{props.title}</h2>
                    <p style={{ color: 'white', fontSize: '1rem',opacity:'1' }}>{props.text}</p>
                </div>
            </div>
        </div>

    )
}

export default MainImage