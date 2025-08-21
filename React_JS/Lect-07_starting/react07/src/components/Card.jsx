import React from 'react';

const Card = () => {
    const movies = [
        {
            id: 1,
            title: "Inception",
            year: 2010,
            genre: "Sci-Fi",
            rating: 8.8,
            director: "Christopher Nolan"
        },
        {
            id: 2,
            title: "The Dark Knight",
            year: 2008,
            genre: "Action",
            rating: 9.0,
            director: "Christopher Nolan"
        },
        {
            id: 3,
            title: "Interstellar",
            year: 2014,
            genre: "Sci-Fi",
            rating: 8.6,
            director: "Christopher Nolan"
        },
        {
            id: 4,
            title: "Parasite",
            year: 2019,
            genre: "Thriller",
            rating: 8.6,
            director: "Bong Joon-ho"
        },
        {
            id: 5,
            title: "Avengers: Endgame",
            year: 2019,
            genre: "Superhero",
            rating: 8.4,
            director: "Anthony Russo, Joe Russo"
        },
        {
            id: 6,
            title: "The Matrix",
            year: 1999,
            genre: "Sci-Fi",
            rating: 8.7,
            director: "The Wachowskis"
        },
        {
            id: 7,
            title: "Gladiator",
            year: 2000,
            genre: "Action/Drama",
            rating: 8.5,
            director: "Ridley Scott"
        },
        {
            id: 8,
            title: "Titanic",
            year: 1997,
            genre: "Romance/Drama",
            rating: 7.8,
            director: "James Cameron"
        },
        {
            id: 9,
            title: "The Shawshank Redemption",
            year: 1994,
            genre: "Drama",
            rating: 9.3,
            director: "Frank Darabont"
        },
        {
            id: 10,
            title: "The Godfather",
            year: 1972,
            genre: "Crime/Drama",
            rating: 9.2,
            director: "Francis Ford Coppola"
        }
    ];

    return (
        <>
            {
                movies.map((elements) => {
                    return (
                        <div key={elements.id} style={{ backgroundColor: "lightblue", margin: "20px", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center",alignItems:"center",  width:"200px"}}>
                            <h2 style={{color:"red", fontFamily:"sans-serif"}}>Movie:{elements.title}</h2>
                            <p>director : {elements.director}</p>
                            <p>release year:{elements.year}</p>
                            <p>Rating:{elements.rating}</p>
                        </div>
                    )
                })
            }
        </>
    )

    // return (
    //     <>
    //         <main style={{ backgroundColor: "aqua" }}>
    //             <h1>{movies[9].title}</h1>
    //             <p>{movies[9].year}</p>
    //             <p>{movies[9].director} </p>
    //             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis incidunt ad debitis excepturi ipsum minima eligendi molestias repellendus. Perferendis, sunt.</p>

    //         </main>
    //     </>
    // );
}

export default Card;


//rfc react functional componets