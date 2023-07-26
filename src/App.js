import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InitialPage from "./pages/start/initial-page";
import { PageRoutes } from "./routes";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/500.css"; // Specify weight
import "./App.css"

function App() {
  return (
    <Flex justify={"center"} align={"center"} minH={"100vh"} gap={5}>
      <InitialPage />
    </Flex>
  );
}

export default App;
