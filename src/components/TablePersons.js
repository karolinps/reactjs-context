import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Button,
} from "@chakra-ui/react";
import PersonContext from "../context/PersonContext";

const TableConctacts = () => {
  const personContext = useContext(PersonContext);

  return (
    <>
      <Heading style={{ margin: "1em auto", fontSize: 25 }}>
        Listado de Personas
      </Heading>
      <Table variant="striped" colorScheme="green">
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Email</Th>
            <Th isNumeric>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {personContext.persons.map((el) => {
            return (
              <Tr key={el.id}>
                <Td>{el.name}</Td>
                <Td>{el.email}</Td>
                <Td isNumeric>
                  <Button colorScheme="red" onClick={() => personContext.deleteItem(el.id)}>
                    Borrar
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};

export default TableConctacts;
