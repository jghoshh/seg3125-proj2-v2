import { useEffect, useState } from 'react';
import { Heading, Container, HStack, Box, Image, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { Article } from '../types';

const Home = () => {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then((data: Article[]) => setFeaturedArticles(data.slice(0, 3)));
  }, []);

  return (
    <>
      <Container mb={12} maxW="3xl" centerContent>
        <Heading variant="h3" mb={7}>Bringing You Real-Time, <Heading variant="h3" as='i'>Unbiased</Heading> Tech Insights</Heading>
        <HStack>
          <Heading w="50%" variant="h1"> See What's Happening Right Now: </Heading>
          <Box w="50%" position="relative" width="550px" height="300px">
            <Link to="/your-target-page">
              <Image
                src="images/main_section_pic.png"
                alt="Example Image"
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius="10"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg="rgba(0, 0, 0, 0.7)"
                borderRadius="10"
              />
              <Heading
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                color="white"
                width="85%"
                variant="h2"
                textDecor={"underline"}
              >
                Inside Netflix's bet on advanced video encoding
              </Heading>
            </Link>
          </Box>
        </HStack>
      </Container>
      <Divider />
      <Container mb={12} maxW="3xl" centerContent>
        <Heading variant="h2" m={7}>Featured Articles</Heading>
        <HStack>
          {featuredArticles.map((article) => (
          <ArticleCard id={article.id} key={`${article.title}+${article.author}`} title={article.title} author={article.author} datePublished={article.datePublished} imageUrl={article.imageUrl} tags={article.tags} />
          ))}
        </HStack>
      </Container>
    </>
  )
}

export default Home;