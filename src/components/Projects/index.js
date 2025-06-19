import React from "react";
import { useState } from "react";
import { projects } from "../../my_data/mydata";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from "./ProjectComp";
import ProjectCard from "../Cards/ProjectCards";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("All");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          {" "}
          I have worked on wide range of web-application concepts. Here are some
          of my projects where I implemented those concepts.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "All" ? (
            <ToggleButton active value="All" onClick={() => setToggle("All")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="All" onClick={() => setToggle("All")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "All" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;