import React, { useState } from "react";
import { Grid, GridItem, Heading, Input, Button, Text, VStack, HStack, IconButton, Spacer, useToast } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      toast({
        title: "Please enter a todo",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Grid templateRows="1fr 1fr 3fr" height="100vh">
      <GridItem>
        <Heading as="h1" size="xl" textAlign="center" mb={8}>
          Todo App
        </Heading>
      </GridItem>
      <GridItem>
        <VStack mt={8} spacing={4} align="stretch">
          {todos.map((todo, index) => (
            <HStack key={index}>
              <Text>{todo}</Text>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="red" />
            </HStack>
          ))}
        </VStack>
      </GridItem>
      <GridItem>
        <form onSubmit={handleSubmit}>
          <HStack>
            <Input placeholder="Enter a todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <Button type="submit" colorScheme="blue" px={8}>
              Add
            </Button>
          </HStack>
        </form>
      </GridItem>
    </Grid>
  );
};

export default Index;
