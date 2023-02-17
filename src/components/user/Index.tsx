import React, { useState } from 'react'
import { Users } from '../../interface/user'
import { FaAngleRight, FaArchive } from "react-icons/fa";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { SearchButton } from '../search/style';
import { ContainerUser, ImgAvatar, UserDescription, UserLink, UserName } from './style';

export const User = ({ avatar_url, name, login, html_url, location, email, public_repos, followers,following }: Users) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <ContainerUser onClick={handleOpen}>
                <ImgAvatar src={avatar_url} alt={name} title={name} />
                <UserDescription>
                    <div>
                        <UserName>{login}</UserName>
                        <UserLink> {html_url}</UserLink>
                    </div>
                    <div className="icon-flag">
                        <FaAngleRight />
                    </div>
                </UserDescription>
            </ContainerUser>

            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="modal__user">
                        <div>
                            <div className="bloco_modal__user-avatar">
                                <img className="modal__user-avatar" src={avatar_url} alt={name} />
                            </div>
                            <div className='modal__description'>
                                <div>
                                    <p>
                                        Usuário: {login}
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        url: {html_url}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Nome: {name}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Cidade: {location}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Email: {email}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Seguidores:  {followers}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Seguindo:  {following}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Repositórios: {public_repos}
                                    </p>
                                </div>
                           
                            </div>
                        </div>

                    </Box>
                </Modal>
            </div>
        </>
    )

}
