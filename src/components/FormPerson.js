import React, { useContext, useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import PersonContext from "../context/PersonContext";

const FormPerson = () => {
  const { dataByPerson, edit, updatePerson, addPerson } = useContext(
    PersonContext
  );
  const [person, setPerson] = useState(dataByPerson);

  useEffect(() => {
    setPerson(dataByPerson);
  }, [dataByPerson]);

  const onSubmitData = (e) => {
    e.preventDefault();
    if (edit === true) {
      updatePerson(person.name, person.email);
      console.log(person.name, person.email)

    } else {
      addPerson(person.name, person.email);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPerson({ ...person, [name]: value });
  };

  return (
    <>
      <Heading style={{ margin: "1em auto", fontSize: 25 }}>
        {!edit ? "Agregar" : "Editar"} Contacto
      </Heading>
      <form onSubmit={onSubmitData}>
        <Flex>
          <Box w="400px" p="4">
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                name="name"
                value={person.name}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Box>
          <Spacer />
          <Box w="400px" p="4">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={person.email}
                onChange={handleInputChange}
                required
              />
            </FormControl>
          </Box>
          <Spacer />
          <Box w="180px">
            <Button
              mt={12}
              colorScheme={!edit ? "green" : "blue"}
              type="submit"
            >
              {!edit ? "Agregar" : "Actualizar"}
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
};

export default FormPerson;
