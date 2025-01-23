import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <VStack
      w="100%"
      bg="white"
      color="black"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      align="stretch"
      spacing={4}
      _hover={{
        boxShadow: "lg",
        textDecoration: "none",
      }}
    >
      <Image src={imageSrc} alt={title} />
      <VStack align="start" px={4} py={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </VStack>
      <HStack px={4} pb={4} justify="space-between" w="100%">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", // Ensure the link takes up space correctly
            alignItems: "center", // Align with icon
            cursor: "pointer", // Show pointer on hover
            textDecoration: "none", // Remove underline
          }}
        >
          <Text fontSize="sm">See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </HStack>
    </VStack>
  );
};

export default Card;
