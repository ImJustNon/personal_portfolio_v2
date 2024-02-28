import { useEffect, useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { getGuestName, saveGuestName } from "../utilities/guestNameStorage";
import { toastSuccess } from "../utilities/chakraui_toast";

function NameModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const initialRef = useRef(null);
    const finalRef = useRef(null);

    const { t, i18n } = useTranslation();
    const toast = useToast();

    const [ inputGuestName, setInputGuestName ] = useState("");
    const [ forgotToSign, setForgotToSign ] = useState(false);
    useEffect(() =>{
        setTimeout(() => {
            const guestName = getGuestName();
            if(!guestName){
                onOpen();
            }
        }, 2 * 1000);
    }, []);

    function introvert(){
        onClose();
        toast(toastSuccess(null, t("Don't worry, It's OK :)")));
        return;
    }

    function sure(){
        console.log(inputGuestName.length);
        if(inputGuestName.length == 0){
            return setForgotToSign(true);
        }
        saveGuestName(inputGuestName);
        onClose();
        toast(toastSuccess(null, `${t("Nice to meet you")}, ${inputGuestName}`));
        return;
    }

  
    return (
      <>
        <Modal
            closeOnOverlayClick={false}
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            isCentered={true}
            motionPreset='slideInBottom'
            size={"md"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <div className="flex justify-center">
                    <h1 className="text-2xl pt-3">
                        {`${t("Could I have your name")} ?`}
                    </h1>
                </div>
            </ModalHeader>
            
            <ModalBody>
                <div className="flex flex-col w-full">
                    <input className="input input-sm input-bordered w-full text-center" placeholder={t("Hi, I'm NON, And you?")} onChange={(event) =>{setInputGuestName(event.target.value); setForgotToSign(false)}}></input>
                    <p className={`text-sm mt-3 mx-auto text-error ${forgotToSign ? "flex" : "hidden"}`}>{t("Wait, I haven't known your name yet")}</p>
                </div>
            </ModalBody>
  
            <ModalFooter>
                <div className="grid grid-cols-2 w-full gap-10">
                    <button className="btn btn-sm btn-outline btn-ghost rounded-full" onClick={() => sure()}>{t("Sure")}</button>
                    <button className="btn btn-sm btn-outline btn-ghost rounded-full" onClick={() => introvert()}>{t("Sorry, I'm Introvert")}</button>
                </div>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}


export default NameModal;