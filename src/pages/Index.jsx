import { Container, Text, VStack, Heading, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaCalendarAlt, FaPlus, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">Event Management Platform</Heading>
        <Text fontSize="lg">Organize and manage your events effortlessly.</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid">
            View Events
          </Button>
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="outline">
            Create Event
          </Button>
          <IconButton aria-label="Manage Users" icon={<FaUsers />} size="lg" colorScheme="teal" variant="ghost" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;