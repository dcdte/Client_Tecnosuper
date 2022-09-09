import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import Departament from "../../../utilities/Departament";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
  ContentContainer,
} from "./ModalElements";

export const Modal = ({ showModal, setShowModal}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  let Shops = [];
  function Products() {
    for (let i = 0; i < Departament.stores.length; i++) {
      if (Departament.stores[i]["Nombre_Comercial"].includes("tecnosuper")) {
        if (
          Departament.stores[i]["Municipio.Departamento"] === Departament.name
        ) {
          Shops.push(Departament.stores[i]);
        }
      }
    }
   //console.log(Shops);
  }
  console.log(Departament.stores);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {Products()}
              {Shops.map((e) => (
                <ModalContent key={e.ID}>
                  <ModalImg
                    src={e.img}
                    alt="camera"
                  />
                  <ContentContainer>
                    <h1>{e.Nombre_Comercial}</h1>
                    <p>{e.Direccion}</p>

                  </ContentContainer>
                </ModalContent>
              ))}
              ;
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
