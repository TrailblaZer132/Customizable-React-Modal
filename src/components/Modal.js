import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const Background = styled.div`
  width: 100%;
  height: 100%;
  backgroung: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  width: 900px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
  object-fit: center;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding: 2rem;

  p {
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
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal
      ? `translateY(0%) && translateX(0%)`
      : `translateY(100%) && translateX(100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={require("./modal.jpg")} alt="camera" />
              <ModalContent>
                <h1>We write stories in Multiple languages</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  nesciunt culpa accusamus consectetur totam. Nam consequuntur,
                  placeat nesciunt totam laudantium mollitia beatae ad quo nemo,
                  voluptatum, animi delectus. Dignissimos, ullam!
                </p>
                <button>Join now</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => {
                  setShowModal((prev) => !prev);
                }}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
