import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link,
  useToast,
  Container,
  Flex,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const toast = useToast()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      setLoading(true)
      await login(email, password)
      navigate('/dashboard/meetings')
    } catch (error: any) {
      let errorMessage = 'Failed to log in'
      if (error.code) {
        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage = 'No account found with this email'
            break
          case 'auth/wrong-password':
            errorMessage = 'Incorrect password'
            break
          case 'auth/invalid-email':
            errorMessage = 'Please enter a valid email address'
            break
          default:
            errorMessage = error.message || 'Failed to log in'
        }
      }
      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
    setLoading(false)
  }

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Container maxW="container.sm">
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          boxShadow="xl"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Heading
                size="xl"
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
                fontWeight="extrabold"
              >
                Welcome Back
              </Heading>
              <Text mt={2} color="gray.600">
                Sign in to continue your journey
              </Text>
            </Box>

            <form onSubmit={handleSubmit}>
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel color="gray.700">Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    size="lg"
                    focusBorderColor="blue.400"
                    placeholder="Enter your email"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color="gray.700">Password</FormLabel>
                  <InputGroup size="lg">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      focusBorderColor="blue.400"
                      placeholder="Enter your password"
                    />
                    <InputRightElement>
                      <IconButton
                        variant="ghost"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  width="full"
                  isLoading={loading}
                  loadingText="Signing in..."
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  _hover={{
                    bgGradient: 'linear(to-r, blue.500, purple.600)',
                  }}
                  _active={{
                    bgGradient: 'linear(to-r, blue.600, purple.700)',
                  }}
                >
                  Sign In
                </Button>
              </VStack>
            </form>

            <Text textAlign="center" color="gray.600">
              Don't have an account?{' '}
              <Link
                as={RouterLink}
                to="/register"
                color="blue.500"
                fontWeight="semibold"
                _hover={{ color: 'blue.600' }}
              >
                Register
              </Link>
            </Text>
          </VStack>
        </Box>
      </Container>
    </Flex>
  )
} 