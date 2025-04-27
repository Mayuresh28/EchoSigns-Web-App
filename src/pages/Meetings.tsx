import React, { useState } from 'react'
import {
  Box,
  Button,
  VStack,
  Heading,
  Input,
  useToast,
  Text,
  HStack,
  Container,
  useColorModeValue,
  Flex,
  Icon,
  Card,
  CardBody,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from '@chakra-ui/react'
import { JitsiMeeting } from '@jitsi/react-sdk'
import { FaVideo, FaCopy, FaUsers } from 'react-icons/fa'

export default function Meetings() {
  const [roomName, setRoomName] = useState('')
  const [isInMeeting, setIsInMeeting] = useState(false)
  const toast = useToast()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const handleStartMeeting = () => {
    if (!roomName.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a room name',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    setIsInMeeting(true)
  }

  const handleCopyLink = () => {
    const meetingLink = `${window.location.origin}/meetings?room=${roomName}`
    navigator.clipboard.writeText(meetingLink)
    toast({
      title: 'Link Copied',
      description: 'Meeting link has been copied to clipboard',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  const handleMeetingEnded = () => {
    setIsInMeeting(false)
  }

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        {!isInMeeting ? (
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading
                size="xl"
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
                fontWeight="extrabold"
              >
                Start a Meeting
              </Heading>
              <Text mt={2} fontSize="xl" color={textColor}>
                Create or join a video meeting with sign language support
              </Text>
            </Box>

            <Card bg={cardBgColor} borderRadius="xl" boxShadow="xl">
              <CardBody>
                <VStack spacing={6}>
                  <HStack spacing={4} w="full">
                    <Icon as={FaVideo} w={8} h={8} color="blue.500" />
                    <Text fontSize="lg" fontWeight="medium">
                      Enter a room name to start or join a meeting
                    </Text>
                  </HStack>

                  <InputGroup size="lg">
                    <Input
                      placeholder="Enter room name"
                      value={roomName}
                      onChange={(e) => setRoomName(e.target.value)}
                      focusBorderColor="blue.400"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleCopyLink}
                        isDisabled={!roomName.trim()}
                      >
                        <Icon as={FaCopy} />
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <Button
                    size="lg"
                    colorScheme="blue"
                    width="full"
                    onClick={handleStartMeeting}
                    bgGradient="linear(to-r, blue.400, purple.500)"
                    _hover={{
                      bgGradient: 'linear(to-r, blue.500, purple.600)',
                    }}
                    leftIcon={<Icon as={FaUsers} />}
                  >
                    Start Meeting
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={8}>
              <Card bg={cardBgColor} borderRadius="xl" boxShadow="xl">
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaVideo} w={8} h={8} color="blue.500" />
                    <Heading size="md">Video Calls</Heading>
                    <Text color={textColor} textAlign="center">
                      High-quality video calls with sign language support
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
              <Card bg={cardBgColor} borderRadius="xl" boxShadow="xl">
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaUsers} w={8} h={8} color="green.500" />
                    <Heading size="md">Collaboration</Heading>
                    <Text color={textColor} textAlign="center">
                      Work together with real-time communication
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
              <Card bg={cardBgColor} borderRadius="xl" boxShadow="xl">
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaCopy} w={8} h={8} color="purple.500" />
                    <Heading size="md">Easy Sharing</Heading>
                    <Text color={textColor} textAlign="center">
                      Share meeting links with just one click
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        ) : (
          <Box h="80vh" borderRadius="xl" overflow="hidden" boxShadow="xl">
            <JitsiMeeting
              roomName={roomName}
              configOverwrite={{
                startWithAudioMuted: true,
                startWithVideoMuted: true,
                enableClosePage: true,
              }}
              interfaceConfigOverwrite={{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
              }}
              onApiReady={(externalApi) => {
                externalApi.addEventListeners({
                  readyToClose: handleMeetingEnded,
                })
              }}
              getIFrameRef={(iframeRef) => {
                iframeRef.style.height = '100%'
                iframeRef.style.width = '100%'
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  )
} 