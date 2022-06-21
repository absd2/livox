import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  UseDisclosureReturn,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";
import { Movie } from "../../models";

type Props = {
  movie: Movie;
  disclosure: UseDisclosureReturn;
};

function ViewMovieDetails({ movie, disclosure }: Props) {
  return (
    <Modal isCentered isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{movie.title}</ModalHeader>
        <ModalBody mb={2}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Informação</Th>
                <Th>Valor</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Adulto</Td>
                <Td>{movie.adult ? "Sim" : "Não"}</Td>
              </Tr>
              <Tr>
                <Td>Idioma original</Td>
                <Td>{movie.original_language}</Td>
              </Tr>
              <Tr>
                <Td>Título original</Td>
                <Td>{movie.original_title}</Td>
              </Tr>
            </Tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Flex justifyContent="center">
            <Button
              backgroundColor="blue.900"
              color="white"
              onClick={disclosure.onClose}
            >
              Fechar
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ViewMovieDetails;
