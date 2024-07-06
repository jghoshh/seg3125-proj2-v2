import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Heading, HStack, Image, Text, Tag } from '@chakra-ui/react';

const Category = () => {
  const { title } = useParams<{ title: string }>();
  const capitalizedTitle = title ? title.charAt(0).toUpperCase() + title.slice(1) : null;

  return (
    <>
    {capitalizedTitle ?
      <>
      <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="black" w="100%" h="500px" mb={12}>
        <Heading
          textAlign="center"
          color="white"
          variant="h1">
          {capitalizedTitle}
        </Heading>
        <Heading
          color="white"
          textAlign="center"
          variant="h4"
        >
          All about {capitalizedTitle}
        </Heading>
      </Box>
      <Container maxW="3xl" centerContent mb={12}>
      </Container>
      </>
      : <></>}
    </>
  )
}

export default Category;