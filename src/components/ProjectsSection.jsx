import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
const projects = [
  {
    title: "Little Lemon",
    description:
      "xxx",
    getImageSrc: () => photo1,
  },
  {
    title: "spotiStats",
    description:
      "xxx",
    getImageSrc: () => photo2,
  },
  {
    title: "World Happiness",
    description:
      "xxx",
    getImageSrc: () => photo3,
  },
  {
    title: "Africa Measures",
    description:
      "xxx",
    getImageSrc: () => photo4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="wheat"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" style={{"color":"#363636"}}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
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
