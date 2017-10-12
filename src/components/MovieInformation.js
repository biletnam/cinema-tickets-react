import React from 'react';


class MovieInformaton extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/antdevine/cinema-tickets-react/master/src/movies.json')
        .then((Response) => Response.json())
        .then((findresponse) =>
        {
            this.setState({
                data:findresponse.movies,
            })
            console.log(findresponse.movies)
        })
    }


    render() {
        return (
        <div>
            {
                this.state.data.map((dynamicData, key) =>
                <div key={dynamicData.movies.movieone.title}>
                    <span>{dynamicData.movies.movieone.title}: </span>
                    <span>{dynamicData.movies.movieone.releaseYear}</span>
                </div>
                )
            }
        </div>
        )
    }


   


    
}

export default MovieInformaton;