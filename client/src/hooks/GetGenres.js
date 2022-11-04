import axios from 'axios';

const GetGenres = async (numberOfGenres) => {
    const params = {
        number_of_genres: numberOfGenres || 5
    };

    const res = await axios.get('http://localhost:8080/', { params: params }).then((res) => res.data);
    return res;
}

export default GetGenres;