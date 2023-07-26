import React from "react";
import SimpleSidebar from "../base/sidebar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { VacantList } from "./vacant-list.js/vacantList";

const Dashboard = () => {
  return (
    <Box>
      <Heading>Dashboard</Heading>
      <Box py={4}>
        <VacantList/>
      </Box>
    </Box>
  );
};

export default Dashboard;
