import { VStack, Center, Heading, Image, Text, HStack, Tag } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleCardProps {
  id: string,
  title: string;
  author: string;
  datePublished: string;
  imageUrl: string;
  tags?: string[];
}

const ArticleCard = ({ id, title, author, datePublished, imageUrl, tags }: ArticleCardProps) => {

  const { t } = useTranslation();

  return (
    <Center p={3} ml={5} mr={5} w="320px" borderRadius="10px" borderWidth="1px" boxShadow="xl" role="group">
      <VStack h="100%" justifyContent="space-between">
        <Link to={`/article/${id}`} aria-labelledby={`article-title-${id}`}>
          <Image mb={4} src={imageUrl} alt={`Image for ${title}`} width="320px" height="190px" objectFit="cover" borderRadius="10px" />
          {tags && <HStack as="ul" spacing={2} mb={5} justify="center">
            {tags.map((val) => (
              <Tag as="li" size="sm" borderRadius="full" key={`${val}`} variant="solid" bg="black" letterSpacing="0.05em">
                {val}
              </Tag>
            ))}
          </HStack>}
          <Heading id={`article-title-${id}`} as="h4" variant="h4" textDecor="underline" mb={5} letterSpacing="0.01em" textAlign="center" minHeight="3em">{title}</Heading>
          <Text as="p" textAlign="center">{t('article-card.by')}: {author} <br />{t('article-card.published')}: {datePublished} </Text>
        </Link>
      </VStack>
    </Center>
  )
}

export default ArticleCard;