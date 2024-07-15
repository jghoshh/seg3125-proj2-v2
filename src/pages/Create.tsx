import { useRef, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
  Heading,
  HStack,
  Tooltip,
  useToast,
  FormErrorMessage,
  useTheme,
} from "@chakra-ui/react";
import { InfoCircle } from "react-bootstrap-icons";
import FAQ from "../components/FAQ";
import MulSelect, { StylesConfig } from "react-select";

interface TagOption {
  value: string;
  label: string;
}

const tagOptions: TagOption[] = [
  { value: "A.I.", label: "A.I." },
  { value: "software", label: "SOFTWARE" },
  { value: "hardware", label: "HARDWARE" },
  { value: "science", label: "SCIENCE" },
];

const FAQItems = [
  {
    question: "How long can my article title be?",
    answer:
      "Article titles should be between 5 and 100 characters for optimal visibility and search engine performance.",
  },
  {
    question: "What file types are accepted for article images?",
    answer:
      "We accept JPG, PNG, and WebP image files. The maximum file size is 5MB.",
  },
  {
    question: "How many tags can I add to my article?",
    answer:
      "You can add up to 4 unique tags per article. Choose relevant keywords to help readers find your content.",
  },
  {
    question: "Is there a word limit for the article content?",
    answer:
      "The minimum length is 300 words, and the maximum is 5,000 words. Aim for clear, concise writing that engages your readers.",
  },
];

const Create = () => {
  const theme = useTheme();
  const inputFileRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

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

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 5 || value.length > 100) {
      setTitleError("Title should be between 5 and 100 characters.");
    } else {
      setTitleError("");
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const wordCount = value.split(" ").length;
    console.log("Content word count:", wordCount);
    if (wordCount < 300 || wordCount > 5000) {
      setContentError("Content should be between 300 and 5000 words.");
    } else {
      setContentError("");
    }
  };

  const handleClick = () => {
    if (inputFileRef.current) inputFileRef.current.click();
  };

  const customStyles: StylesConfig<TagOption, true> = {
    control: (provided) => ({
      ...provided,
      borderColor: theme.colors.gray[200],
      boxShadow: "none",
      "&:hover": {
        borderColor: theme.colors.gray[300],
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.black,
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      fontSize: "0.9em",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: theme.colors.white,
      letterSpacing: "0.05em",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: theme.colors.white,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.colors.gray[300],
        color: theme.colors.black,
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: theme.colors.black,
    }),
    option: (provided) => ({
      ...provided,
      fontWeight: "medium",
      fontSize: "0.9em",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: theme.colors.blackAlpha[400], 
    }),
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="85vh"
      flexDir="column"
    >
      <Heading variant="h1" mb={4}>
        Create An Article{" "}
      </Heading>
      <Text fontSize="xl" mb={4} textAlign="center">
        Write an article and submit it for review by our editing team. <br />{" "}
        You will hear back from us within 7 business days.
      </Text>
      <Box
        width={["100%", "100%", "3xl"]}
        m={5}
        p={7}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="2xl"
        mb={12}
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={4} isInvalid={!!titleError}>
            <FormLabel htmlFor="title">Your Article Title</FormLabel>
            <Input
              id="title"
              name="title"
              placeholder="Write your article title here..."
              onChange={handleTitleChange}
            />
            {titleError && <FormErrorMessage>{titleError}</FormErrorMessage>}
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="imageUpload">Your Article Image</FormLabel>
            <Input
              ref={inputFileRef}
              id="imageUpload"
              name="imageUpload"
              type="file"
              accept=".jpg, .jpeg, .png, .webp"
              hidden
            />
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              border="1px"
              borderRadius="5px"
              p={2}
              borderColor="blackAlpha.200"
            >
              <Button onClick={handleClick} mr={2} size="sm">
                Browse...
              </Button>
              <Text color="blackAlpha.400">Choose your image</Text>
            </Box>
          </FormControl>
          <FormControl isRequired mb={4}>
            <HStack alignItems="center" spacing={0} mb={2}>
              <FormLabel htmlFor="tags" m={0} mr={2}>
                Your Article Tags
              </FormLabel>
              <Tooltip
                label="Tags represent the categories that your article relates to and they help others discover your content"
                fontSize="md"
                placement="right"
                bg="black"
                hasArrow
              >
                <InfoCircle
                  size={14}
                  color="black"
                  style={{ cursor: "pointer" }}
                />
              </Tooltip>
            </HStack>
            <MulSelect
              id="tags"
              name="tags"
              isMulti
              options={tagOptions}
              placeholder="Select Tags"
              styles={customStyles}
            />
          </FormControl>
          <FormControl isRequired mb={4} isInvalid={!!contentError}>
            <FormLabel htmlFor="content">Your Article Content</FormLabel>
            <Textarea
              id="content"
              name="content"
              placeholder="Write your article content here..."
              rows={20}
              onChange={handleContentChange}
            />
            {contentError && (
              <FormErrorMessage>{contentError}</FormErrorMessage>
            )}
          </FormControl>
          <Box display="flex" justifyContent="flex-end" mb={4}>
            <Button type="submit">Submit Article For Review</Button>
          </Box>
        </form>
      </Box>
      <Box mt={12} mb={12}>
        <FAQ items={FAQItems} />
      </Box>
    </Box>
  );
};

export default Create;
