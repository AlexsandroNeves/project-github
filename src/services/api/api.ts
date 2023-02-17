
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.example.com'
});


// buscando usuario no github

const loadUser = async (userName: string, setUser: any) => {
    try {
        await api.get(`https://api.github.com/users/${userName}`)
            .then((res) => {
                setUser(res.data)
                console.log(res.data)
            })
    }
    catch (error) {
        console.error(error);

    }
}
