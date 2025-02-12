/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      className="card"
      bg="white"
      borderRadius="lg"
      p={4}
      spacing={4}
      alignItems="flex-start"
      boxShadow="md"
    >
      <Image
        src={imageSrc}
        borderRadius="lg"
        w="100%"
        h="200px"
        objectFit="cover"
      />
      <VStack spacing={2} alignItems="flex-start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack alignSelf="flex-end">
        <Text>Learn more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
