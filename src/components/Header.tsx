import { Container, VStack, HStack, Heading, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container as="header" maxW="3xl" padding={10} centerContent>
      <VStack spacing={4}>
        <Link to="/" aria-label="Home">
          <Heading as="h2" size="xl" fontWeight="light">VERITAS</Heading>
        </Link>
        <HStack as="nav" aria-label="Main navigation" spacing={9}>
          <ChakraLink as={Link} to="/category/A.I." aria-label="A.I. category">A.I.</ChakraLink>
          <ChakraLink as={Link} to="/category/software" aria-label="Software category">SOFTWARE</ChakraLink>
          <ChakraLink as={Link} to="/category/hardware" aria-label="Hardware category">HARDWARE</ChakraLink>
          <ChakraLink as={Link} to="/category/science" aria-label="Science category">SCIENCE</ChakraLink>
          <ChakraLink as={Link} to="/explore" aria-label="All articles">ALL ARTICLES</ChakraLink>
        </HStack>
      </VStack>
    </Container>
  )
}

export default Header;