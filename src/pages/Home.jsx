import { NavBar } from "../components/components"
import {
  Box,
} from "@chakra-ui/react";

const Home = () => {
  return (
      <Box bg="#B3C6E3" minH="100vh" display={"flex"} justifyContent={"center"}>
        <NavBar />
      </Box>
  );
};

export default Home;
