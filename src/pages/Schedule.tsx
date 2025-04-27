import React from 'react'
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Button,
  Flex,
} from '@chakra-ui/react'
import { FaCalendarAlt, FaClock, FaBell, FaShare } from 'react-icons/fa'

export default function Schedule() {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const features = [
    {
      icon: FaCalendarAlt,
      title: 'Calendar Integration',
      description: 'Sync with your favorite calendar apps',
      color: 'blue.500',
    },
    {
      icon: FaClock,
      title: 'Time Management',
      description: 'Efficiently manage your meeting times',
      color: 'green.500',
    },
    {
      icon: FaBell,
      title: 'Reminders',
      description: 'Get notified before your meetings',
      color: 'orange.500',
    },
    {
      icon: FaShare,
      title: 'Easy Sharing',
      description: 'Share your schedule with others',
      color: 'purple.500',
    },
  ]

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
              Schedule Meetings
            </Heading>
            <Text mt={2} fontSize="xl" color={textColor}>
              Manage your meetings and calendar with ease
            </Text>
          </Box>

          <Card bg={cardBgColor} borderRadius="xl" boxShadow="xl">
            <CardBody>
              <VStack spacing={6}>
                <Text fontSize="lg" color={textColor}>
                  Schedule your meetings and manage your calendar here. This feature will be implemented in the future. Stay tuned!
                </Text>
                <Button
                  size="lg"
                  colorScheme="blue"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, blue.500, purple.600)',
                  }}
                  leftIcon={<Icon as={FaCalendarAlt} />}
                >
                  Coming Soon
                </Button>
              </VStack>
            </CardBody>
          </Card>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mt={8}>
            {features.map((feature) => (
              <Card
                key={feature.title}
                bg={cardBgColor}
                borderRadius="xl"
                boxShadow="xl"
                transition="transform 0.2s"
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={feature.icon} w={8} h={8} color={feature.color} />
                    <Heading size="md">{feature.title}</Heading>
                    <Text color={textColor} textAlign="center">
                      {feature.description}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
} 