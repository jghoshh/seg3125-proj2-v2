import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';

const AboutUs = () => { 
  return (
    <>
    <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="black" w="100%" h="500px" mb={12}>
    <Heading
      textAlign="center"
      color="white"
      variant="h1">
      About Us
    </Heading>
    <Heading
      color="white"
      textAlign="center"
      variant="h4"
    >
      Who we are and about the structure of the site. 
    </Heading>
  </Box>
  <Stack direction="column" justifyContent="center" alignItems="center" height="60vh" mb={12}>
    <Container maxW="4xl" mb={12} centerContent>
      <Heading mb={3}>Who We Are</Heading>
      <Text fontSize="lg">At Veritas, our mission is to deliver accurate, unbiased, real-time reporting on a wide range of technological topics. Our name, meaning "truth" in Latin, reflects our commitment to factual reporting. Our team of dedicated journalists and fact-checkers work diligently to ensure that every story we publish adheres to the highest standards of journalistic integrity. </Text>
    </Container>
    <Container maxW="4xl" centerContent>
      <Heading mb={3}>Site Structure</Heading>
      <Text fontSize="lg">Veritas is designed for easy navigation and engagement. Our homepage serves as the central hub, with a navbar linking to specialized category pages for Artificial Intelligence (A.I.), Software, Hardware, and Science. For a comprehensive view, the "All Articles" link in the navbar displays every article on the site. The footer contains vital links: "About Us" provides insights into our organization and site structure, "Report a Tip" allows users to inform us about breaking tech events, and "Create an Article" empowers community contributions, subject to our editorial team's review.</Text>
    </Container>
  </Stack>
  </>
  );
} 

export default AboutUs;