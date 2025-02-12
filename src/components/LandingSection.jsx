import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import dp from "../images/dp.jpg";

const greeting = "Hello, I'm Khuram Islam!";
const bio1 = "Full Stack Developer";
const bio2 = "Specialized in React & Node.js";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={6}>
      <Avatar size="2xl" src={dp} />
      <Heading as="h1" size="xl">
        {greeting}
      </Heading>
      <VStack spacing={4}>
        <Heading as="h2" size="lg">
          {bio1}
        </Heading>
        <Heading as="h2" size="lg">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
