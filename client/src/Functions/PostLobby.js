import axios from 'axios';

const PostLobby = async (props) => {
    const params = {
        name: props.name,
        genres: [...props.genres]
    };

    const res = await axios.post('http://localhost:8080/create', { params }).then((res) => res.data);
    return res;
}

export default PostLobby;