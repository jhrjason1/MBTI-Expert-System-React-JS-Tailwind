import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 1000;
    border-radius: 10px;
`

const ModalImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    z-index: 1000;

    p{
        margin-bottom: 1rem;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 1000;
`;



export const Modal = ({showModal, setShowModal}) => {
    return (
        <> 
            {showModal ? (
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg src={require('../images/INTJ.png')} />
                        <ModalContent>
                            <h1>INTJ</h1>
                            <p>Lorem Ipsum</p>
                        </ModalContent>
                        <CloseModalButton onClick={() => setShowModal (prev => !prev)}/>
                    </ModalWrapper>
                </Background>
            ) : null }
        </>
    )
}
