import { List, ListIcon, Tab, TabList, TabPanel, TabPanels, Tabs, ListItem, Box, FormControl, FormLabel, Input, FormHelperText, Textarea, Checkbox, Button } from "@chakra-ui/react"
import { EmailIcon, StarIcon, ChatIcon, CheckCircleIcon, WarningIcon } from "@chakra-ui/icons"
import { Form, redirect } from "react-router-dom"

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel> Task Name: </FormLabel>
          <Input type="text" name="title"></Input>
          <FormHelperText>
            Enter a Description task name
          </FormHelperText>

        </FormControl>
        <FormControl isRequired mb="40px">
          <FormLabel> Task Description: </FormLabel>
          <Textarea placeholder="Enter a detailed description for the task"
            name="description" />
          <FormHelperText>
            Enter a Description task name
          </FormHelperText>
        </FormControl>
        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox
            name="isPriority"
            size="lg"
            colorScheme="purple"
          />
          <FormLabel mb={0} ml="10px">Make this a priority task.</FormLabel>
        </FormControl>
        <Button type="submit"> Submit </Button>
      </Form>
    </Box>
  )
}


export const createAction = async ({request}) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }

  console.log(task)

  return redirect('/')
}