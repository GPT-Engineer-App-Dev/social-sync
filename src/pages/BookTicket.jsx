import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react";

const BookTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    toast({
      title: "Booking confirmed.",
      description: `You have successfully booked ${quantity} ticket(s).`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear the form
    setName("");
    setEmail("");
    setQuantity(1);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Book Tickets</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="quantity" isRequired>
          <FormLabel>Ticket Quantity</FormLabel>
          <Input type="number" value={quantity} min={1} onChange={(e) => setQuantity(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Book Now</Button>
      </VStack>
    </Container>
  );
};

export default BookTicket;