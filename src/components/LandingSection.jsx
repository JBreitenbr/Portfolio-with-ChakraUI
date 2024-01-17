import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import wordcloud from '../images/wordcloud.png';
import Type from "./Type";
const greeting = "Hello, I am Julia!";
const bio1 = "A web developer";
const bio2 = "and data analyst";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
<VStack spacing={12}>
        <VStack spacing={4} alignItems="center">
        <Avatar
            src="https://www.dropbox.com/scl/fi/lt05v9t57lq24kohzdfz6/Giulietta.png?rlkey=au7q6phsyu4el9snk2g5jes7j&raw=1"
            size="2xl"
            name="Julia Breitenbruch"
        />    
        <Heading as="h3" size="xl" noOfLines={1}>
            {greeting}
        </Heading><img src={wordcloud} style={{height:"120px"}}/>
        </VStack>
        <VStack spacing={4}>
        <Heading as="h4" size="xl" noOfLines={1}>
            {bio1}
        </Heading>
        <Heading as="h4" size="xl" noOfLines={1}>
            {bio2}
        </Heading>
        </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
