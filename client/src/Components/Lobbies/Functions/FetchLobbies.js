import axios from 'axios';

const FetchLobbies = (numberOfLobbies) => {
    const params = {
        number_of_lobbies: numberOfLobbies || 6
    };

    try {
        const res = axios.get('http://localhost:8080/fetch-lobbies', { params }).then((res) => res.data);
        return res;
    }
    catch (error) {
        console.error('Could not fetch lobbies\n', error.toJSON());
    }
}

export default FetchLobbies;