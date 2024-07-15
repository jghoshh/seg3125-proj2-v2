import { useEffect, useState } from "react";
import {
  Heading,
  Container,
  Box,
  Image,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { Article, TranslatedContent, TranslatedArticle } from "../types";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/data2.json")
      .then((response) => response.json())
      .then((data: TranslatedArticle[]) => {
        const translatedArticles = data.map((article) => ({
          ...article,
          title: article.title[i18n.language as keyof TranslatedContent],
          content: article.content[i18n.language as keyof TranslatedContent],
          tags: article.tags.map(
            (tag) => tag[i18n.language as keyof TranslatedContent]
          ),
        }));
        setFeaturedArticles(translatedArticles.slice(0, 3) as Article[]);
      });
  }, [i18n.language]);

  return (
    <>
      <Container as="section" p={10} mb={12} maxW="4xl" centerContent>
        <Heading as="h1" variant="h3" mb={7} textAlign="center">
          {t("sub-header-tagline")}
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 10 }} spacing={5}>
          <Box gridColumn={{ md: "span 4" }}>
            <Heading as="h2" w="100%" variant="h1">
              {t("main-header-tagline")}:
            </Heading>
          </Box>
          <Box
            as="section"
            w="100%"
            position="relative"
            boxShadow="2xl"
            gridColumn={{ md: "span 6" }}
          >
            <Link
              to="/article/1"
              aria-labelledby="article-title"
              aria-label="Read more about Netflix's advanced video encoding"
            >
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
                {t("main-article-tagline")}
              </Heading>
            </Link>
          </Box>
        </SimpleGrid>
      </Container>
      <Divider mb={12} />
      <Container
        as="section"
        mb={12}
        maxW="6xl"
        centerContent
        aria-labelledby="featured-articles-header"
      >
        <Heading id="featured-articles-header" as="h2" variant="h2" mb={7}>
          {t("featured-articles-header")}
        </Heading>
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
  );
};

export default Home;
