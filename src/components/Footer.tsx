import { Box, Container, Heading, Stack, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box as="footer" py={10} >
      <Container maxW="8xl">
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="space-between" align="center">
          <Link to="/" aria-label="Home">
            <Heading as="h2" size="xl" fontWeight="light">VERITAS</Heading>
          </Link>
          <Stack as="nav" aria-label="Footer navigation" direction="row" spacing={10}>
            <ChakraLink as={Link} to="/about-us" aria-label="About Us">{t('footer.first')}</ChakraLink>
            <ChakraLink as={Link} to="/report" aria-label="Report a Tip">{t('footer.second')}</ChakraLink>
            <ChakraLink as={Link} to="/create" aria-label="Create an Article">{t('footer.third')}</ChakraLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;