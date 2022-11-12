import axios from 'axios';

const FetchGenres = (numberOfGenres) => {
    const params = {
        number_of_genres: numberOfGenres || 5
    };

    try {
        const res = axios.get('http://localhost:8080/fetch-genres', { params }).then((res) => res.data);
        return res;
    }
    catch (error) {
        console.error('Could not fetch genres\n', error.toJSON());
        return [];
    }
}

export default FetchGenres;