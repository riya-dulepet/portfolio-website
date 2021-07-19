import React, {useEffect} from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import {ProjectItem, ProjectTitle, SkillContainer} from './styles';
import {Image} from "../../components/UserHeader/styles";
import {ImageContainer,ProjectDetailsContainer, VideoContainer} from "./styles";
import ReactPlayer from 'react-player';


const Projects = ({ user }) => {

    useEffect(() => {
        //console.log(user.projects.images[0].resolutions.desktop.url);
        //console.log(user);
        user.projects.map((project, index) => (
            project.videos.map((video, j) => (
                console.log(video.url)
                //.map((format, i) =>(
                   //console.log(format)
                //))
            ))
        ));
    }, []);

  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.displayName}</ProjectTitle>
                <SkillContainer>
                    {[...project.languages, ...project.libraries,].map((item, j) => (
                        <Pill key={j}>{item}</Pill>
                    ))}
                </SkillContainer>
                <ProjectDetailsContainer>


                    <div><p>{project.summary}</p></div>



                    {project.videos.map((video, j) => (
                        video.url.length ?
                            <div><VideoContainer> <ReactPlayer url= {video.url} /></VideoContainer></div> : null

                    ))}



                </ProjectDetailsContainer>











            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
