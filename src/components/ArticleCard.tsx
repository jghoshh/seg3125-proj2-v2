import { VStack, Center, Heading, Image, Text, HStack, Tag } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: string,
  title: string;
  author: string;
  datePublished: string;
  imageUrl: string;
  tags?: string[];
}

const ArticleCard = ({ id, title, author, datePublished, imageUrl, tags }: ArticleCardProps) => {
  return (
    <Center p={4} ml={7} mr={7} w="300px" boxShadow="lg" borderRadius="10px" borderWidth="1px" borderColor="gray.500">
      <VStack>
        <Link to={`/article/${id}`}>
          <Image mb={4} src={imageUrl} width="300px" height="190px" objectFit="cover" borderRadius="15px"/>
          {tags ? <HStack spacing={2} mb={5} justify="center">
            {tags.map((val) => (
              <Tag size="sm" borderRadius="full" key={`${val}`} variant="solid" bg="black" letterSpacing={"0.05em"}>
                {val}
              </Tag>
            ))}
          </HStack> : <></>}
          <Heading variant="h4" textDecor={"underline"} mb={5} letterSpacing={"0.01em"}>{title}</Heading>
          <Text textAlign={"center"}>By: {author} <br />Published: {datePublished} </Text>
        </Link>
      </VStack>
    </Center>
  )
}

export default ArticleCard;