import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = ({ items }: { items: FAQItem[] }) => {
  return (
    <Box p={5} w={"4xl"}>
      <Heading as="h2" mb={5} textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple>
        {items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Text flex="1" textAlign="left" fontWeight="medium">
                {item.question}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQ;
