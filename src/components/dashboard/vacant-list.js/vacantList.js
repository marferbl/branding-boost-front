import React, { useContext, useEffect, useState } from "react";
import { Box, Text, useToast } from "@chakra-ui/react";
import { allVacants } from "../../../services/vacant";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
import { useBackendUrlBuilder } from "../../../hooks/useBackendUrlBuilder";
import HorizontalCard from "../../base/horizontal-card";

export const VacantList = () => {
  const toast = useToast();
  const { getToken } = useContext(UserContext);
  const allVacandsURL = useBackendUrlBuilder("/vacant/all");
  const [vacants, setVacants] = useState(null);

  useEffect(() => {
    getAllVacants();
  }, []);

  const getAllVacants = async () => {
    const storedToken = getToken();
    axios
      .get(allVacandsURL, {
        headers: {
          authorization: `Bearer ${storedToken || ""}`,
        },
      })
      .then((res) => {
        setVacants(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "ERROR",
          description: err.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box>
      <Text fontSize={20}>Vacantes para ti</Text>
      <Box>
        {vacants &&
          vacants.length &&
          vacants?.map((vac) => <HorizontalCard vacant={vac}/>)}
      </Box>
    </Box>
  );
};
