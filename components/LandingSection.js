import React from "react";
import { Avatar, Heading, VStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profileImage from "../images/profile.jpg";  


const greeting = "Hello, I am Parth Ubhe";
const bio1 = "An Aspiring AI&ML Engineer ";
const bio2 = "At Symbiosis Institute of Technology,Pune";

const bio3 = "Second Year";
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground 
    backgroundColor="#2A4365"
  >
    <Avatar src={profileImage}/>
    <VStack spacing={2} mt={6}>
      <Heading as="h3" size="md" noOfLines={1}>
        {greeting}
      </Heading>
      <Heading as="h3" size="3xl" noOfLines={1}>
        {bio1}
      </Heading>
      <Heading as="h3" size="2xl" noOfLines={1}>
        {bio2}
      </Heading>
      <Heading as="h3" size="1xl" noOfLines={1}>
        {bio3}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;