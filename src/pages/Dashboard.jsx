import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

export default function Dashboard() {
  const tasks = useLoaderData()

  return (
    <div>
      <SimpleGrid spacing="20px" minChildWidth="300px">
        {tasks && tasks.map(task => (
          <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box textAlign="right">
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>
                    by {task.author}
                  </Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>
                {task.description}
              </Text>
            </CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  )
}


export const tasksLoader = async () => {
  try {
    const response = await fetch('https://api.jsonbin.io/v3/b/64f4d946d972192679bdfe6d', {
      method: 'GET',
      headers: {
        'X-MASTER-KEY': '$2b$10$Efvsl0lnmYZS8rU4OjR1Jen1BX0GTijOVKrH9Osah07MIqKybis1i',
        // Other headers if required (e.g., Content-Type, Authorization, etc.)
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // Parse the JSON response

    // Extract the tasks object from the data
    const tasks = data.record.tasks;

    // Now you can use the 'tasks' variable as needed
    console.log(tasks);

    // Return the 'tasks' object
    return tasks;
  } catch (error) {
    // Handle any errors here
    console.error('Fetch error:', error);
    throw error; // You can choose to rethrow the error or handle it differently
  }
};
