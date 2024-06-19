import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from "@chakra-ui/react";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Event created.",
      description: "Your event has been created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear the form
    setTitle("");
    setDescription("");
    setDate("");
    setLocation("");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Create Event</Heading>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="description" isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl id="date" isRequired>
          <FormLabel>Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <FormControl id="location" isRequired>
          <FormLabel>Location</FormLabel>
          <Input value={location} onChange={(e) => setLocation(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Create Event</Button>
      </VStack>
    </Container>
  );
};

export default CreateEvent;