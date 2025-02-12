/* eslint-disable no-unused-vars */
import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import project1 from "../images/homeScreen.jpg";
import project2 from "../images/weatherApp.png";
import project4 from "../images/portfolio.png";
import project3 from "../images/foodWebsite.jpg";
import Card from "./Card";

const projects = [
  {
    title: "Online Agricultural Assistance System",
    description:
      "A comprehensive platform connecting farmers with agricultural experts and resources",
    getImageSrc: () => project1,
  },
  {
    title: "Food Website",
    description:
      "An interactive restaurant website with online ordering system",
    getImageSrc: () => project3,
  },
  {
    title: "Weather App",
    description:
      "Real-time weather forecasting application with geolocation support",
    getImageSrc: () => project2,
  },
  {
    title: "Portfolio Website",
    description:
      "Professional portfolio showcasing development projects and skills",
    getImageSrc: () => project4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gridGap={8}
        width="100%"
      >
        {projects.map((project) => (
          <Card
            className="card"
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
