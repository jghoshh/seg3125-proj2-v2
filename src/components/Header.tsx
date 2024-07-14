import { Container, VStack, HStack, Heading, Link as ChakraLink, Icon, FormControl, FormLabel, Select, VisuallyHidden } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Globe } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Container as="header" maxW="5xl" padding={10} centerContent>
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
          <FormControl id="language-selector" width="170px">
            <VisuallyHidden as={FormLabel} htmlFor="language">
              Select Language
            </VisuallyHidden>
            <HStack>
              <Icon as={Globe} w={6} h={6} mr={2} aria-hidden="true" />
              <Select
                id="language"
                sx={{ letterSpacing: "widest", fontWeight: "bold" }}
                size="sm"
                onChange={changeLanguage}
              >
                <option value="en">ENGLISH</option>
                <option value="fr">FRANÇAIS</option>
              </Select>
            </HStack>
          </FormControl>
        </HStack>
      </VStack>
    </Container>
  )
}

export default Header;