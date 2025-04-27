import React from 'react'
import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Text,
  VStack,
  Container,
  useColorModeValue,
  Flex,
  Icon,
  Button,
  HStack,
} from '@chakra-ui/react'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'

const signLanguageWords = [
  {
    word: 'Hello',
    image: 'https://www.signingsavvy.com/media/mp4-ld/24/24929.mp4',
    description: 'Wave your hand in front of your face',
    color: 'blue.400',
  },
  {
    word: 'Thank You',
    image: 'https://www.signingsavvy.com/media/mp4-ld/24/24930.mp4',
    description: 'Touch your fingers to your chin and move your hand forward',
    color: 'green.400',
  },
  {
    word: 'Please',
    image: 'https://www.signingsavvy.com/media/mp4-ld/24/24931.mp4',
    description: 'Rub your chest in a circular motion',
    color: 'purple.400',
  },
  {
    word: 'Sorry',
    image: 'https://www.signingsavvy.com/media/mp4-ld/24/24932.mp4',
    description: 'Make a fist and rub it in a circular motion on your chest',
    color: 'orange.400',
  },
  {
    word: 'Help',
    image: 'https://www.signingsavvy.com/media/mp4-ld/24/24933.mp4',
    description: 'Place your right hand on your left palm and lift both hands up',
    color: 'red.400',
  },
  {
    word: 'Good',
    image: 'https://www.signingsavvy.com/media/mp4-ld/24/24934.mp4',
    description: 'Touch your fingers to your lips and move your hand forward',
    color: 'teal.400',
  },
]

export default function Learn() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading
              size="xl"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Learn Sign Language
            </Heading>
            <Text mt={2} fontSize="xl" color={textColor}>
              Interactive lessons to help you master sign language
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {signLanguageWords.map((word) => (
              <Card
                key={word.word}
                overflow="hidden"
                bg={cardBgColor}
                borderRadius="xl"
                boxShadow="xl"
                transition="transform 0.2s"
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Heading
                      size="md"
                      bgGradient={`linear(to-r, ${word.color}, ${word.color.replace('400', '600')})`}
                      bgClip="text"
                    >
                      {word.word}
                    </Heading>
                    <Box
                      as="video"
                      src={word.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      width="100%"
                      height="200px"
                      objectFit="cover"
                      borderRadius="lg"
                      boxShadow="md"
                    />
                    <Text color={textColor}>{word.description}</Text>
                    <HStack spacing={4}>
                      <Button
                        leftIcon={<Icon as={FaPlay} />}
                        colorScheme="blue"
                        variant="ghost"
                        size="sm"
                      >
                        Play
                      </Button>
                      <Button
                        leftIcon={<Icon as={FaVolumeUp} />}
                        colorScheme="blue"
                        variant="ghost"
                        size="sm"
                      >
                        Sound
                      </Button>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          <Flex justify="center" mt={8}>
            <Button
              size="lg"
              colorScheme="blue"
              bgGradient="linear(to-r, blue.400, purple.500)"
              _hover={{
                bgGradient: 'linear(to-r, blue.500, purple.600)',
              }}
            >
              Start Learning
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
} 