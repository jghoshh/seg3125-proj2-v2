import { useState } from "react";
import {
  Container,
  VStack,
  HStack,
  Heading,
  Link as ChakraLink,
  Icon,
  FormControl,
  FormLabel,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Globe } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const getLanguageLabel = () => {
    return language === "en" ? "FRANÇAIS" : "ENGLISH";
  };

  return (
    <Container as="header" maxW="5xl" padding={10} centerContent>
      <VStack spacing={4}>
        <Link to="/" aria-label="Home">
          <Heading as="h2" size="xl" fontWeight="light">
            VERITAS
          </Heading>
        </Link>
        <HStack as="nav" aria-label="Main navigation" spacing={9}>
          <ChakraLink as={Link} to="/category/A.I." aria-label="A.I. category">
            {t("nav.first")}
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/category/software"
            aria-label="Software category"
          >
            {t("nav.second")}
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/category/hardware"
            aria-label="Hardware category"
          >
            {t("nav.third")}
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="/category/science"
            aria-label="Science category"
          >
            {t("nav.fourth")}
          </ChakraLink>
          <ChakraLink as={Link} to="/explore" aria-label="All articles">
            {t("nav.fifth")}
          </ChakraLink>
          <FormControl id="language-selector" width="150px">
            <VisuallyHidden as={FormLabel} htmlFor="language">
              Select Language
            </VisuallyHidden>
            <HStack>
              <ChakraLink
                id="language-toggle"
                display="flex"
                alignItems="center"
                cursor="pointer"
                onClick={toggleLanguage}
                aria-label={`Switch to ${getLanguageLabel()}`}
              >
                <Icon as={Globe} w={6} h={6} mr={2} aria-hidden="true" />
                {getLanguageLabel()}
              </ChakraLink>
            </HStack>
          </FormControl>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Header;
