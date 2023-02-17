import React, { useState } from 'react'
import { Users } from '../../interface/user'
import { FaAngleRight, FaArchive, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SearchButton } from '../search/style';

export const User = ({ avatar_url, name, login, html_url, location, email, public_repos }: Users) => {

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


            <div className="container-user" onClick={handleOpen}>
                <img src={avatar_url} alt={name} title={name} className="img-avatar" />
                <div className="user__description">
                    <div>
                        <p className="user-name">{login}</p>
                        <p className="user-link"> {html_url}</p>
                    </div>
                    <div className="icon-flag">
                        <FaAngleRight />
                    </div>
                </div>
            </div>



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
                            <div className=''>
                                <div className="bloco_modal__user-avatar">
                                
                                    <p>
                                        {name}
                                    </p>
                                </div>

                                <div className="bloco_modal__user-avatar">
                                    <p>
                                        {location}
                                    </p>
                                </div>

                                <div className="bloco_modal__user-avatar">
                                    <p>
                                        {email}
                                    </p>
                                </div>

                                <div className="bloco_modal__user-avatar">
                                    <p>
                                        <span><FaArchive /></span> {public_repos}
                                    </p>
                                </div>
                                <SearchButton> Ver repositorios</SearchButton>
                            </div>
                        </div>

                    </Box>
                </Modal>
            </div>
        </>
    )

}
