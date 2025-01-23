import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Metahuman Chatbot",
    description:
      "This Section leads to the Work In Progress links of metahuman Chatbot",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: "https://github.com/parthubhe/",  // Add the link for the project
  },
  {
    title: "WebServer-Hosting-in-C",
    description:
      "Welcome to the Recipe Management System (RMS) and C-Based HTTP Server project! This repository showcases a simple yet powerful application that combines recipe management features with a lightweight web server built in C, using efficient data structures like Binary Search Trees (BST) and Linked Lists.",
    getImageSrc: () => require("../images/photo1.jpg"),
    link: "https://github.com/parthubhe/WebServer-Hosting-in-C",  // Add the link for the project
  },
  {
    title: "AI Story Generator",
    description:
      "Dpeda story generator by finetuning gpt-neo pretrained transformer on a acustom dataset.",
    getImageSrc: () => require("../images/photo2.jpg"),
    link: "https://github.com/parthubhe/AI-Story-Generator",  // Add the link for the project
  },
  {
    title: "RecipeManagementSystem_Python",
    description:
      "This is a Recipe List Web Application built using Flask, a lightweight web framework in Python. The application allows users to create, view, edit, and delete recipes dynamically. Users can also browse through a list of recipes, view details of each recipe, and manage their recipe collection via a simple and intuitive web interface.",
    getImageSrc: () => require("../images/photo3.jpg"),
    link: "https://github.com/parthubhe/RecipeManagementSystem_Python",  // Add the link for the project
  },
  {
    title: "Inventory Management System",
    description:
      "A basic IMS using python,mysql,gradio fro ui",
    getImageSrc: () => require("../images/photo4.jpg"),
    link: "https://github.com/parthubhe/Inventory-Management-System",  // Add the link for the project
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
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}  // Pass the link to the Card component
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
