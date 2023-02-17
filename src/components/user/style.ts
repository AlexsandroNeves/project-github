import styled from "styled-components";

export const ContainerUser = styled.div`
    max-width: 710px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    margin-top: 30px;
    @media (max-width: 768px) {
        width: 90%;
      }
`;
export const ImgAvatar = styled.img`
    max-width: 80px;
    border-radius: 70px;
`;

export const UserDescription = styled.div`
    display: flex;
    align-items: center;    
    justify-content: space-between;
    width: 100%;
`;

export const UserName = styled.p`
    font-size: 22px;
`;

export const UserLink = styled.p`
    color: #aeaeae;
    @media (max-width: 768px) {
        font-size:0.75rem;
      }
`;

export const FaAngleRight = styled.svg`
    height: 25px;
    color: #4d4d4d;
`;

// estilização do modal


