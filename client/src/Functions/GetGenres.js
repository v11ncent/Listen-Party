import axios from 'axios';

const GetGenres = async (numberOfGenres) => {
    const params = {
        number_of_genres: numberOfGenres || 5
    };

    try {
        const res = await axios.get('http://localhost:8080/', { params }).then((res) => res.data);
        return res;
    }
    catch (error) {
        console.error('Could not fetch genres', error.toJSON());
        return [];
    }
}

export default GetGenres;