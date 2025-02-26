function MovieCard({ movie }) {

    function onFavoriteclock() {

        alert("clicked")
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onlcick={onFavoriteclock}>
                        &#9829;
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date} </p>
            </div>
        </div>
    )

}

export default MovieCard;