import { Heading, Link, Stack } from '@chakra-ui/react';

const GetInTouch = () => {
  return (
    <Stack justifyContent="center" alignItems="center" p={5} height="75vh">
      <Heading variant="h1" mb={4}>Get in Touch</Heading>
      <Heading variant="h3">
        Send us an email at: 
        <Link href="mailto:hello@veritas.com" isExternal ml={1} sx={{letterSpacing: "0em"}}>
          hello@veritas.com
        </Link>
      </Heading>
    </Stack>
  );
};

export default GetInTouch;