import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import TutCard from "./TutCard";

export default function Body() {
  return (
    <div className="content">
      <SimpleGrid columns={3} spacing={10}>
        <TutCard />
        <TutCard />
        <TutCard />
      </SimpleGrid>
    </div>
  );
}
