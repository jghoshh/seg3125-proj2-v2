import { Container, VStack, HStack, Heading, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container maxW="3xl" padding={10} centerContent>
      <VStack spacing={4}>
        <Link to="/">
          <Heading size="xl" fontWeight="light">VERITAS</Heading>
        </Link>
        <HStack spacing={9}>
          <ChakraLink as={Link} to="/category/A.I.">A.I.</ChakraLink>
          <ChakraLink as={Link} to="/category/software">SOFTWARE</ChakraLink>
          <ChakraLink as={Link} to="/category/hardware">HARDWARE</ChakraLink>
          <ChakraLink as={Link} to="/category/science">SCIENCE</ChakraLink>
          <ChakraLink as={Link} to="/explore">EXPLORE</ChakraLink>
        </HStack>
      </VStack>
    </Container>
  )
}

export default Header;