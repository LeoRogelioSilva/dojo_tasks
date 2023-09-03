import { UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'

export default function NavBar() {
    const toast = useToast()

    const showToast = () => {
        toast({
            title: 'Logged out',
            description: 'Successfully logged out',
            duration: 5000,
            isClosable: true,
            status: 'success',
            position: 'top',
            icon: <UnlockIcon />
        })
    }

    return (
        <div>
            <Flex as="nav" p="10px" mb="40px" alignItems="center" gap="30px">
                <Heading as="h1">
                    Dojo Tasks
                </Heading>
                <Spacer>

                </Spacer>

                <HStack spacing="20px">
                    <Avatar src="/img/mario.png">
                        <AvatarBadge width="1.3em" bg="teal.500">
                            <Text fontSize="xs" color="white">3</Text>
                        </AvatarBadge>
                    </Avatar>
                    <Text>
                        mario@netninja.dev
                    </Text>
                    <Button colorScheme='purple' onClick={showToast}>
                        Login
                    </Button>
                </HStack>

            </Flex>


            {/*
                <Flex bg="gray.200" justify="space-around"> 
                    <Box w="150px" h="50px" bg="red" >1</Box>
                    <Box w="150px" h="50px" bg="blue" >2</Box>
                    <Box w="150px" h="50px" bg="green" >3</Box>
                    <Box w="150px" h="50px" bg="yellow" >4</Box>
                </Flex>
            */}
        </div>
    )
}
