import { Box, Container, Heading, Stack, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box py="10" >
      <Container maxW="7xl">
        <Stack direction={{ base: 'column', md: 'row' }} spacing="4" justify="space-between" align="center">
          <Link to="/">
            <Heading size="xl" fontWeight="light">VERITAS</Heading>
          </Link>
          <Stack direction="row" spacing="10">
            <ChakraLink as={Link} to="/report">REPORT A TIP</ChakraLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;