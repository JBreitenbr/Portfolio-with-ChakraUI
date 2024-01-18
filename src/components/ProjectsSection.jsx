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
    getImageSrc: () => photo1,demoUrl:"https://jbreitenbr.github.io/little-lemon-sketch/"
  },
  {
    title: "spotiStats",
    description:
      "xxx",
    getImageSrc: () => photo2,demoUrl:"https://jbreitenbr.github.io/spotiStats/"
  },
  {
    title: "World Happiness",
    description:
      "xxx",
    getImageSrc: () => photo3,demoUrl:  "https://jbreitenbr.github.io/Happiness-DataViz-2022/"
  },
  {
    title: "Africa Measures",
    description:
      "xxx",
    getImageSrc: () => photo4,demoUrl:"https://jbreitenbr.github.io/Africa-Measures/"
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
      <Heading as="h1" id="projects-section" style={{"fontFamily":"Oxygen","color":"#363636"}}>
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
