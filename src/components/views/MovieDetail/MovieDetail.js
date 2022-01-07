import React, {useEffect, useState} from 'react'
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../Config';
import MainImage from '../LandingPage/Section/MainImage';
import Movieinfo from './Sections/Movieinfo';
import GridCard from '../commons/GridCard';
import { Row } from 'antd';

function MovieDetail(props) {

    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)
    const styles = {width:'85%', margin: '1rem auto'};
    const toggleActorView = ()=>{
        setActorToggle(!ActorToggle)
    }
    useEffect(() => {

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

      fetch(endpointInfo)
            .then(respone => respone.json())
            .then(respone => {
                setMovie(respone)
            })

      fetch(endpointCrew)
            .then(respone => respone.json())
            .then(respone => {
                console.log("responseForCrew",respone)
                setCasts(respone.cast)
            })
    }, [])

    return (
        <div>
            {/*header */}
            <div>   
            <MainImage 
                        image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                        title={Movie.original_title}
                        text={Movie.overview}
                        />
            </div>
            {/*body */ }
            <div style={{ width: '85%', margin: '1rem auto'}}>
                  <div style={{display:'flex', justifyContent:'flex-end'}}>
                  </div>

            </div>
            <div style={styles}>
                {/*영화 정보*/}
                <div style={{backgroundColor:'white'}}> 
                <Movieinfo {...{Movie}}/>
                </div>
                {/* {Movie} */}

                <br />

                {/*출연 배우*/}

                
                <div style={{display: 'flex', justifyContent :'center', margin: '2rem'}}>
                <button type="button" class="mb-5 btn btn-outline-light" onClick={toggleActorView}>출연배우</button>
                </div>

                {ActorToggle && 
                <Row gutter={[16,16]}>
                    {Casts && Casts.map((cast, index) => { 
                        return (
                        <React.Fragment key={index}>
                            <GridCard
                                image={cast.profile_path ? `${IMAGE_BASE_URL}w500${cast.profile_path}` : ''}
                                characterName={cast.name}
                            />
                        </React.Fragment>
                    )})}
                </Row>
                }
            </div>
        </div>
    )
}

export default MovieDetail
