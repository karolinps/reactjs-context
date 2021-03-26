import React, { useContext, useState } from "react";
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
  const context = useContext(PersonContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitData = (e) => {
    e.preventDefault();
    context.addteItem(name, email);
  };

  return (
    <>
      <Heading style={{ margin: "1em auto", fontSize: 25 }}>
        Agregar Contacto
      </Heading>
      <form onSubmit={onSubmitData}>
        <Flex>
          <Box w="400px" p="4">
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
          </Box>
          <Spacer />
          <Box w="180px">
            <Button mt={12} colorScheme="green" type="submit">
              Agregar
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
};

export default FormPerson;
