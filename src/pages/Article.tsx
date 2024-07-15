import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  Tag,
} from "@chakra-ui/react";
import { Article } from "../types";
import Comments from "../components/Comments";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data: Article[]) => {
        const foundArticle = data.find((article) => article.id === id);
        setArticle(foundArticle || null);
      });
  }, [id]);

  if (!article) {
    return (
      <Container centerContent>
        <Heading variant="h3">Article not found</Heading>
      </Container>
    );
  }

  return (
    <>
      <Box position="relative" width="100%" height="500px" mb={12}>
        <Image
          src={article.imageUrl}
          alt="Example Image"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.85)"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Heading textAlign="center" color="white" variant="h1">
            {article.title}
          </Heading>
          <Heading color="white" textAlign="center" variant="h4">
            By: {article.author} <br />
            Published: {article.datePublished}
          </Heading>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        pl={7}
      >
        <HStack spacing={2} mb={12} justify="center">
          <Text fontWeight="bold">TAGS: </Text>
          {article.tags.map((val) => (
            <Tag
              key={`${val}`}
              variant="solid"
              bg="black"
              letterSpacing={"0.05em"}
              color="white"
              borderRadius="full"
            >
              {val}
            </Tag>
          ))}
        </HStack>
      </Box>
      <Container maxW="3xl" centerContent mb={12}>
        <Text whiteSpace="pre-line" fontSize="lg">
          {article.content}
        </Text>
      </Container>
      <Container maxW="3xl" centerContent>
        <Heading variant="h2">COMMENTS</Heading>
        <Comments articleId={article.id} />
      </Container>
    </>
  );
};

export default ArticlePage;
