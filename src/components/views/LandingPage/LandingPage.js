import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import MainImage from './Section/MainImage';
import axios from 'axios';

import GridCard from '../commons/GridCard';
import { Row } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';



function LandingPage() {

    const [Movies, setMovie] = useState([])
    const [MainMovieImage, setmainMovieImage] = useState("")
    const [CurrentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-IS&page=1`;
        fetchMovies(endpoint)
    }, [])

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                setMovie([...Movies, ...response.results])
                setmainMovieImage(response.results[0])
                setCurrentPage(response.page)
            })
    }
    const loadmoreItems = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-IS&page=${CurrentPage + 1}`;
        fetchMovies(endpoint)
    }
    return (

        <div style={{ width: '100%', margin: '0', padding: '0px' }}>
            {MainMovieImage &&
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    text={MainMovieImage.overview}
                />
            }
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <h2>최신 영화</h2>
                <hr />
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index} >
                            <GridCard
                                LandingPage
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}
                </Row>
                <script>
                </script>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button type="button" class="mb-5 mt-2 btn btn-outline-light" onClick={loadmoreItems}> 더보기</button>
            </div>

        </div>

    )
}

export default LandingPage
