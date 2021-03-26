import "./App.css";
import FormPerson from "./components/FormPerson";
import TablePersons from "./components/TablePersons";
import { Container, Heading } from "@chakra-ui/react";
import PersonState from "./context/PersonState";

function App() {
  return (
    <PersonState>
      <Container maxW="container.md" style={{ margin: "2em auto" }}>
        <Heading as="h1">React Hook Context</Heading>
        <FormPerson />
        <TablePersons />
      </Container>
    </PersonState>
  );
}

export default App;
