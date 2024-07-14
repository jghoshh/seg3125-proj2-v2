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
      <Container as="section" p={10} mb={12} maxW="4xl" centerContent>
        <Heading as="h1" variant="h3" mb={7}>Bringing You Real-Time, Unbiased Tech Insights</Heading>
        <SimpleGrid columns={{ sm: 1, md: 10 }} spacing={5}>
        <Box gridColumn={{ md: "span 4" }}>
          <Heading as="h2" w="100%" variant="h1" >
            See What's Happening Right Now:
          </Heading>
        </Box>
          <Box as="section" w="100%" position="relative" boxShadow='2xl' gridColumn={{ md: "span 6" }}>
            <Link to="/article/1" aria-labelledby="article-title" aria-label="Read more about Netflix's advanced video encoding">
              <Image
                src="images/netflix_article.png"
                alt="Image for Inside Netflix's bet on advanced video encoding"
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
                aria-hidden="true"
              />
              <Heading
                as="h3"
                id="article-title"
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
      <Container as="section" mb={12} maxW="5xl" centerContent aria-labelledby="featured-articles-header">
        <Heading id="featured-articles-header" as="h2" variant="h2" mb={7}>Featured Articles</Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {featuredArticles.map((article) => (
          <ArticleCard 
            id={article.id} 
            key={`${article.title}+${article.author}`} 
            title={article.title} 
            author={article.author}
            datePublished={article.datePublished} 
            imageUrl={article.imageUrl} 
            tags={article.tags} 
            aria-label={`Article titled ${article.title} by ${article.author}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Home;