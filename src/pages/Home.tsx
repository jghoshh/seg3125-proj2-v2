import { useEffect, useState } from 'react';
import { Heading, Container, Box, Image, Divider, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { Article } from '../types';

const Home = () => {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then((data: Article[]) => setFeaturedArticles(data.slice(1, 4)));
  }, []);

  return (
    <>
      <Container p={10} mb={12} maxW="4xl" centerContent>
        <Heading variant="h3" mb={7}>Bringing You Real-Time, <Heading variant="h3" as='i'>Unbiased</Heading> Tech Insights</Heading>
        <SimpleGrid columns={{ sm: 1, md: 10 }} spacing={5}>
        <Box gridColumn={{ md: "span 4" }}>
          <Heading w="100%" variant="h1" >
            See What's Happening Right Now:
          </Heading>
        </Box>
          <Box w="100%" position="relative" boxShadow='2xl' gridColumn={{ md: "span 6" }}>
            <Link to="/article/1">
              <Image
                src="images/netflix_article.png"
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
                variant="h3"
                textDecor="underline"
              >
                Inside Netflix's bet on advanced video encoding
              </Heading>
            </Link>
          </Box>
        </SimpleGrid>
      </Container>
      <Divider mb={12} />
      <Container mb={12} maxW="5xl" centerContent>
        <Heading variant="h2" mb={7}>Featured Articles</Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {featuredArticles.map((article) => (
          <ArticleCard 
            id={article.id} 
            key={`${article.title}+${article.author}`} 
            title={article.title} 
            author={article.author}
            datePublished={article.datePublished} 
            imageUrl={article.imageUrl} 
            tags={article.tags} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Home;