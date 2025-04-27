import React from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorMode,
  SimpleGrid,
  Icon,
  Flex,
  Image,
  useColorModeValue,
  IconButton,
  HStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaVideo, FaCalendarAlt, FaBook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  const { colorMode } = useColorMode()
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const features = [
    {
      icon: FaVideo,
      title: 'Video Meetings',
      description: 'Join or create video meetings with sign language support',
      gradient: 'linear(to-r, blue.400, purple.500)',
    },
    {
      icon: FaCalendarAlt,
      title: 'Schedule',
      description: 'Schedule meetings and manage your calendar',
      gradient: 'linear(to-r, green.400, teal.500)',
    },
    {
      icon: FaBook,
      title: 'Learn',
      description: 'Learn American Sign Language through interactive lessons',
      gradient: 'linear(to-r, orange.400, red.500)',
    },
  ]

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, blue.400, purple.500)"
        color="white"
        py={20}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            gap={8}
          >
            <VStack
              spacing={6}
              align={{ base: 'center', md: 'flex-start' }}
              textAlign={{ base: 'center', md: 'left' }}
              maxW="2xl"
            >
              <Heading
                size="2xl"
                fontWeight="extrabold"
                bgGradient="linear(to-r, white, gray.200)"
                bgClip="text"
              >
                Welcome to Echosigns
              </Heading>
              <Text fontSize="xl" opacity={0.9}>
                A video calling platform designed for the deaf and hard of hearing
                community, featuring sign language translation and learning resources.
              </Text>
              <HStack spacing={4}>
                <Button
                  as={RouterLink}
                  to="/register"
                  size="lg"
                  px={8}
                  bg="white"
                  color="blue.600"
                  _hover={{ bg: 'gray.100' }}
                >
                  Get Started
                </Button>
                <Button
                  as={RouterLink}
                  to="/login"
                  variant="outline"
                  size="lg"
                  px={8}
                  borderColor="white"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Login
                </Button>
              </HStack>
            </VStack>
            <Box
              w={{ base: 'full', md: '50%' }}
              display={{ base: 'none', md: 'block' }}
            >
              <Image
                src="/src/assets/Meeting-Apps.png"
                alt="Meeting Apps Illustration"
                w="full"
                h="auto"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} textAlign="center">
          <Heading
            size="xl"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Features
          </Heading>
          <Text fontSize="xl" maxW="2xl" color={textColor}>
            Everything you need to communicate effectively
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
            {features.map((feature) => (
              <Box
                key={feature.title}
                p={8}
                bg={cardBgColor}
                borderRadius="xl"
                boxShadow="xl"
                transition="transform 0.2s"
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <VStack spacing={4}>
                  <Icon
                    as={feature.icon}
                    w={12}
                    h={12}
                    bgGradient={feature.gradient}
                    bgClip="text"
                  />
                  <Heading size="md">{feature.title}</Heading>
                  <Text color={textColor}>{feature.description}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg={cardBgColor} py={8} mt={20}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text color={textColor}>
              © 2024 Echosigns. All rights reserved.
            </Text>
            <HStack spacing={4}>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                color={textColor}
                _hover={{ color: 'blue.500' }}
              />
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                color={textColor}
                _hover={{ color: 'blue.400' }}
              />
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                color={textColor}
                _hover={{ color: 'blue.600' }}
              />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
} 