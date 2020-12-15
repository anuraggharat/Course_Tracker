import React from "react";
import {
  Box,
  HStack,
  TagLabel,
  Text,
  Heading,
  SimpleGrid,
  Tag,
  Center,
  Flex,
  Container,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { FcHighPriority } from "react-icons/fc";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function TutCard() {
  return (
    <Box
      maxW="sm"
      paddingY={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Grid
        h="100px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
      >
        <GridItem rowSpan={2} colSpan={2} padding={5}>
          <FaReact size="xs" color="#61dafb" />
        </GridItem>
        <GridItem colSpan={4} rowSpan={2} paddingY={5}>
          <Heading fontSize="md" marginBottom={1}>
            Complete react pattern using react hooks
          </Heading>
          <Text fontSize="xs" color={"grey"}>
            Youtube
          </Text>
        </GridItem>
      </Grid>
      <SimpleGrid columns={2} spacing={5} textAlign="center" marginTop="20px">
        <Center>
          <Box>
            <Text color={"grey"}>length</Text>
            <Text fontSize="xl" className="teal-color">
              1Hr
            </Text>
          </Box>
        </Center>
        <Center>
          <Box>
            <Text color={"grey"}>category</Text>
            <Text fontSize="xl" className="teal-color">
              WEBSITE
            </Text>
          </Box>
        </Center>
      </SimpleGrid>
      <Container marginTop={7} paddingX={5}>
        <Text fontSize="xs" color="grey" marginBottom={2}>
          TAGS
        </Text>
        <HStack spacing={2}>
          <Tag size="sm" borderRadius="full" variant="solid" colorScheme="teal">
            <TagLabel>React</TagLabel>
          </Tag>
          <Tag size="sm" borderRadius="full" variant="solid" colorScheme="teal">
            <TagLabel>React</TagLabel>
          </Tag>
          <Tag size="sm" borderRadius="full" variant="solid" colorScheme="teal">
            <TagLabel>React</TagLabel>
          </Tag>
        </HStack>
      </Container>
      <Container marginTop={7}>
        <Flex>
          <HStack>
            <FcHighPriority />
            <Heading fontSize="sm">High Priority</Heading>
          </HStack>
          <Spacer />
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="solid"
            size="xs"
          >
            Go to course
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
