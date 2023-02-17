import { useState } from "react"
import { Searchs } from "../../interface/user"
import { SearchInput, Blocksearch, ContainerSearch, SearchButton, Title } from "./style";

export const Search = ({ loadUser }: Searchs) => {
    const [userName, setUserName] = useState('')
    return (
        <Blocksearch>
            <Title> Explore Usuario no Github</Title>
            <ContainerSearch>
                <SearchInput type="text" placeholder="Digite o nome do usuário" onChange={(e) => setUserName(e.target.value)} />
                <SearchButton onClick={() => loadUser(userName)}>
                    Pesquisar
                </SearchButton>
            </ContainerSearch>
        </Blocksearch>
    )

}
