import { useParams } from "react-router-dom";
import { Container, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Article } from "../types";
import ArticleCard from "../components/ArticleCard";

const Category = () => {
  let caption = null;

  const { title } = useParams<{ title: string }>();
  const capitalizedTitle = title
    ? title.charAt(0).toUpperCase() + title.slice(1)
    : null;
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data: Article[]) =>
        title
          ? setArticles(
              data.filter((article) =>
                article.tags.includes(title.toUpperCase())
              )
            )
          : setArticles([])
      );
  }, [title]);

  switch (capitalizedTitle) {
    case "A.I.":
      caption =
        "Learn about the vast advancements in Artificial Intelligence, as they happen.";
      break;
    case "Software":
      caption =
        "Intake the latest Software Development trends and technologies.";
      break;
    case "Hardware":
      caption =
        "Dive into the world of cutting-edge Hardware innovations and discoveries.";
      break;
    case "Science":
      caption =
        "Explore the fascinating world of Science & Technology breakthroughs.";
      break;
  }

  return (
    <>
      {capitalizedTitle && caption ? (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            bgColor="black"
            w="100%"
            h="500px"
            mb={12}
          >
            <Heading textAlign="center" color="white" variant="h1">
              {capitalizedTitle}
            </Heading>
            <Heading color="white" textAlign="center" variant="h4">
              {caption}
            </Heading>
          </Box>
          <Container maxW="6xl" centerContent mb={12}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
              {articles.map((article) => (
                <ArticleCard
                  id={article.id}
                  key={article.id}
                  title={article.title}
                  author={article.author}
                  datePublished={article.datePublished}
                  imageUrl={article.imageUrl}
                  tags={article.tags}
                />
              ))}
            </SimpleGrid>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Category;
