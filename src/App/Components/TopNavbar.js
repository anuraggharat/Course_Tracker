import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";
import NewTut from "./NewTut";

export default function TopNavbar() {
  return (
    <div className="flex justify-bet">
      <NewTut />
      <Heading>Tutorial Tracker</Heading>
      <Menu colorScheme="teal">
        <MenuButton
          as={Button}
          colorScheme="teal"
          rightIcon={<ChevronDownIcon />}
        >
          TYPE
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
