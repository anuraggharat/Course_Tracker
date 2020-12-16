import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ReactChipInput from "react-chip-input";

export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chips, setChips] = useState([]);
  const [value, setvalue] = useState("");

  handleKeyDown = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();

      var val = value.trim();

      if (val) {
        setChips([...chips, value]);
      }
    }
  };
  handleChange = (evt) => {
    this.setState({
      value: evt.target.value,
      error: null,
    });
  };
  handleDelete = (item) => {
    const items = chips.filter((i) => i !== item);
    setChips({
      items: this.state.items.filter((i) => i !== item),
    });
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD A NEW TUTORIAL</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name">
              <Input
                type="text"
                variant="flushed"
                placeholder="Enter name of the course"
              />
            </FormControl>
            <FormControl id="name" marginTop={5}>
              <Input
                type="text"
                variant="flushed"
                placeholder="Enter link of the course"
              />
            </FormControl>
            <SimpleGrid columns={3} spacing={4}>
              <Box height="80px">
                <FormControl id="name" marginTop={5}>
                  <Input
                    type="text"
                    variant="outline"
                    placeholder="Duration of course"
                  />
                </FormControl>
              </Box>
              <Box height="80px">
                <FormControl id="name" marginTop={5}>
                  <Input
                    type="text"
                    variant="filled"
                    placeholder="Enter name of the course"
                  />
                </FormControl>
              </Box>
              <Box height="80px">
                {this.state.items.map((item) => (
                  <div className="tag-item" key={item}>
                    {item}
                    <button
                      type="button"
                      className="button"
                      onClick={() => this.handleDelete(item)}
                    >
                      &times;
                    </button>
                  </div>
                ))}

                <input
                  className={"input " + (this.state.error && " has-error")}
                  value={this.state.value}
                  placeholder="Type or paste email addresses and press `Enter`..."
                  onKeyDown={this.handleKeyDown}
                  onChange={this.handleChange}
                  onPaste={this.handlePaste}
                />
              </Box>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
