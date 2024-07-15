import {
  Box,
  Text,
  VStack,
  Container,
  Button,
  Textarea,
  FormControl,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Article, Comment } from "../types";

const Comments = ({ articleId }: { articleId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data: Article[]) => {
        const foundComments = data.find((article) => article.id === articleId);
        if (!foundComments) {
          setComments([]);
        } else {
          setComments(foundComments.comments);
        }
      });
  }, [articleId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: (comments.length + 1).toString(),
      content: newComment,
      author: "testuser",
    };

    setComments((prev) => [...prev, newCommentObj]);
    setNewComment("");
  };

  return (
    <Container maxW="3xl" mt={12} mb={12}>
      <VStack spacing={4} align="stretch">
        {comments.map((comment) => (
          <Box
            key={comment.id}
            p={4}
            borderColor="black"
            borderWidth="0.5px"
            borderRadius="5px"
          >
            <Box>
              <Text fontWeight="bold">{comment.author}</Text>
              <Text>{comment.content}</Text>
            </Box>
          </Box>
        ))}
      </VStack>
      <FormControl mt={6}>
        <Textarea
          value={newComment}
          placeholder="Join the conversation..."
          boxShadow="lg"
          borderColor="black"
          borderWidth="0.5px"
          borderRadius="5px"
          onChange={handleInputChange}
        />
        <Box display="flex" justifyContent="flex-end">
          <Button mt={4} onClick={handleAddComment} borderRadius="5px">
            Publish Comment
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};

export default Comments;
