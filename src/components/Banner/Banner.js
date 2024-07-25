import React, { useState, useEffect } from 'react';
import axios from '../axios.js';
import requests from '../../Requests.js';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(requests.fetchNetflixOriginals);
                const randomIndex = Math.floor(
                    Math.random() * response.data.results.length
                );
                setMovie(response.data.results[randomIndex]);
            } catch (error) {
                console.error('Error fetching banner data:', error);
            }
        }
        fetchData();
    }, []);

    function truncateOverview(text, maxLength) {
        if (text && text.length > maxLength) {
            return text.substring(0, maxLength - 1) + '...';
        }
        return text;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncateOverview(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner-fadeBottom"></div>
        </header>
    );
}

export default Banner;
