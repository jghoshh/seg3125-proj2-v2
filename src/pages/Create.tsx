import { useRef } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Textarea, Button, Text, Heading, useToast } from '@chakra-ui/react';

const Create = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast({
      title: "Article Sent For Review",
      description: "Your article has been submitted for review!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleClick = () => {
    if (inputFileRef.current) inputFileRef.current.click();
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="85vh" flexDir="column">
      <Heading variant="h1" mb={4}>Create An Article </Heading>
      <Text fontSize="xl" mb={4}>Write an article and submit it for review by our editing team.</Text>
      <Box width={["100%", "100%", "3xl"]} m={5} p={7} borderWidth="1px" borderRadius="lg" boxShadow="2xl">
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input id="title" name="title" placeholder="Write your article title here..." />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="imageUpload">Article Image</FormLabel>
            <Input ref={inputFileRef} id="imageUpload" name="imageUpload" type="file" hidden />
            <Box display="flex" justifyContent="flex-start" alignItems="center" border="1px" borderRadius="5px" p={2} borderColor="blackAlpha.200">
              <Button onClick={handleClick} mr={2} size="sm">Browse...</Button>
              <Text color="blackAlpha.500">Choose your image</Text>
            </Box>
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="tags">Tags</FormLabel>
            <Select id="tags" name="tags" placeholder="Select tag">
              <option value="A.I.">A.I.</option>
              <option value="software">Software</option>
              <option value="hardware">Hardware</option>
              <option value="science">Science</option>
            </Select>
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="content">Content</FormLabel>
            <Textarea
              id="content"
              name="content"
              placeholder="Write your article content here..."
              rows={20}
            />
          </FormControl>
          <Box display="flex" justifyContent="flex-end" mb={4}>
            <Button type="submit">Submit Article For Review</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Create;