import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Box,
  Select,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState, ChangeEvent, FormEvent } from "react";

interface EventData {
  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventType: string;
  description: string;
}

const Report = () => {
  const [eventData, setEventData] = useState<EventData>({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventType: "",
    description: "",
  });

  const toast = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: "Event Reported",
      description: "Thank you for reporting the event!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setEventData({
      eventName: "",
      eventDate: "",
      eventLocation: "",
      eventType: "",
      description: "",
    });
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
        {" "}
        Report a Tip{" "}
      </Heading>
      <Text fontSize="xl" mb={4}>
        Report a tech conference, product launch, key-note address, or more, as
        it happens and for coverage.
      </Text>
      <Box
        width={["100%", "100%", "md", "xl"]}
        m={5}
        p={5}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="2xl"
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="eventName">Event Name</FormLabel>
            <Input
              id="eventName"
              name="eventName"
              value={eventData.eventName}
              onChange={handleChange}
              placeholder="Write the name of the event that took place..."
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="eventDate">Event Date</FormLabel>
            <Input
              type="date"
              id="eventDate"
              name="eventDate"
              value={eventData.eventDate}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="eventLocation">Event Location</FormLabel>
            <Input
              id="eventLocation"
              name="eventLocation"
              value={eventData.eventLocation}
              onChange={handleChange}
              placeholder="Write about where this event is going to take place..."
            />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="eventType">Event Type</FormLabel>
            <Select
              id="eventType"
              name="eventType"
              value={eventData.eventType}
              onChange={handleChange}
              placeholder="Select event type"
            >
              <option value="tech-conference">Tech Conference</option>
              <option value="product-launch">Product Launch</option>
              <option value="keynote-address">Keynote Address</option>
              <option value="industry-exposition">Industry Exposition</option>
              <option value="panel-discussion">Panel Discussion</option>
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="description">Event Description</FormLabel>
            <Textarea
              id="description"
              name="description"
              value={eventData.description}
              onChange={handleChange}
              rows={10}
              placeholder="Describe the event that will take place. For example, for a Tech Keynote, describe to the best of your knowledge, what products/topics will be covered and who will be there..."
            />
          </FormControl>
          <Box display="flex" justifyContent="flex-end" mb={4}>
            <Button type="submit">Submit Tip</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Report;
