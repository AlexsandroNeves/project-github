import { useState } from "react"
import { Users } from "../interface/user"
import { Search } from "../components/search/Search"
import {api} from '../services/api/api'
import { User } from "../components/user/Index"
import "../components/user/style.css"
import { Error } from "./style"
const Home = () => {

    const [user, setUser] = useState<Users>()
    const [inputError, setInputError] = useState('');

    const loadUser = async (userName: string) => {

        if (!userName) {
            setInputError('Digite nome de usuário');
            return;
          }
    
        try {
            await api.get(`users/${userName}`)
                .then((res) => {
                    setUser(res.data)
                })
            setInputError('')
        }
        catch (error) {
            setUser(null)
            setInputError("Usuário não encontrado");
        }
    }

    return (
        <>
            <Search loadUser={loadUser} />
            {inputError && <Error>{inputError}</Error>}
            {user && <User {...user} />}
        </>
    )
}

export default Home