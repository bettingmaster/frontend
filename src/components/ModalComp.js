"use client";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalComp = ({ isOpen, onClose, children, size, mt, color }) => {
  return (
    <Modal size={size} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={color}>
        <ModalCloseButton size="xl" m={3} color="#fff" />
        <ModalBody mt={mt}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComp;
