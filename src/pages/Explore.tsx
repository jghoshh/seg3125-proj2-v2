import {
  Box, Heading, Container, SimpleGrid, HStack, Link, Select, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { parse, isAfter, subDays, subMonths, subYears } from 'date-fns';
import { Article } from '../types';
import ArticleCard from '../components/ArticleCard';

const Explore = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [articleType, setArticleType] = useState('');
  const [dateRange, setDateRange] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setArticles(data);
        setFilteredArticles(data); 
      });
  }, []);


  const checkDate = (datePublished: string, dateRange: string) => {
    const dateFormat = "MMM dd yyyy";
    const date = parse(datePublished, dateFormat, new Date());
    const now = new Date();
    switch (dateRange) {
      case "last-week":
        return isAfter(date, subDays(now, 7));
      case "last-month":
        return isAfter(date, subMonths(now, 1));
      case "last-year":
        return isAfter(date, subYears(now, 1));  
      default:
        return true; 
    }
  };
  
  const applyFilters = () => {
    const filteredArticles = articles.filter(article => {
      const dateFilter = checkDate(article.datePublished, dateRange);
      const categoryFilter = category ? article.tags.includes(category) : true;
      const articleTypeFilter = articleType ? article.type === articleType : true;
      return dateFilter && categoryFilter && articleTypeFilter;
    });
    setFilteredArticles(filteredArticles);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" bgColor="black" w="100%" h="500px" mb={12}>
        <Heading
          textAlign="center"
          color="white"
          variant="h1">
          All of tech, in one place.
        </Heading>
      </Box>
      <Box display="flex" justifyContent="flex-start" alignItems="center" pl={7}>
        <HStack spacing={2} mb={12} justify="center">
          <Link onClick={() => setIsOpen(true)}>FILTER</Link>
        </HStack>
      </Box>
      <Container maxW="6xl" centerContent mb={12}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
          {filteredArticles.map((article) => (
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
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="3xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" /> 
        <ModalContent p="18">
          <ModalHeader fontSize='2xl'>Filter by</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select placeholder="Filter By Category" value={category} mb={4} size='lg' onChange={(e) => setCategory(e.target.value)}>
              <option value="A.I.">A.I.</option>
              <option value="SOFTWARE">Software</option>
              <option value="HARDWARE">Hardware</option>
            </Select>
            <Select placeholder="Filter By Article Type" value={articleType} mb={4} size='lg' onChange={(e) => setArticleType(e.target.value)}>
              <option value="review">Review</option>
              <option value="opinion">Opinion</option>
              <option value="news">News</option>
            </Select>
            <Select placeholder="Filter By Date Range" value={dateRange} mb={4} size='lg' onChange={(e) => setDateRange(e.target.value)}>
              <option value="last-week">Last Week</option>
              <option value="last-month">Last Month</option>
              <option value="last-year">Last Year</option>
            </Select>
            <Box display="flex" justifyContent="flex-end">
              <Button onClick={applyFilters}>Apply Filters</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Explore;