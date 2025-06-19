import {
    HeroContainer,
    HeroInnerContainer,
    HeroLeftContainer,
    HeroRightContainer,
    Img,
    ResumeButton,
    Span,
    SubTitle,
    TextLoop,
    Title
  } from "./HeroComponents";
  import { Bio } from "../../my_data/mydata";
  import Typewriter from 'typewriter-effect';
  import profile from "../../static/Icon.jpg";
  const HeroSection = () => {
    return (
      <div id="about">
        <HeroContainer>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <SubTitle>{Bio.description}</SubTitle>
              <ResumeButton href={Bio.resume} target="display">
                Check Resume
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer id="Right">
              <Img src = {profile}></Img>
            </HeroRightContainer>
          </HeroInnerContainer>
        </HeroContainer>
      </div>
    );
  };
  
  export default HeroSection;