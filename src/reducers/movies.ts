import { Action, Reducer } from "redux";


export interface Movie {
    id: number,
    title: string,
    popularity: number,
    overview: string
}


interface MovieState {
    top: Movie[]
}


const initialState: MovieState = {
    top: [
        { id: 1, title: "Incentions", popularity: 98, overview: "Dreems..." },
        { id: 2, title: "The Goodfather", popularity: 96, overview: "Father..." },
        { id: 3, title: "The Dark Knight", popularity: 97, overview: "Batmam..." },
        { id: 4, title: "The Goodfather part II", popularity: 96, overview: "Father..." },
        { id: 5, title: "The Star Track", popularity: 98, overview: "Starship..." }
    ]
}

const moviesReducer: Reducer<MovieState, Action > = (state, action) => {
    return initialState;
}

export default moviesReducer;