import './Projects.css';
import React from 'react';
import { Card, Badge} from 'react-bootstrap';
import Socials from './Socials';

interface Project {
    title: string;
    description: string;
    images: string[];
    tags: string[];
    link?: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        { title: 'UpFlux', description: 'Offline frame updating system created for ABB research center in Dundalk', images: ['/portfolio-kevas-wihanto/images/UpFlux.png', '/images/UpFlux.png'], tags: ['WIP', 'ABB', 'IoT', 'C#', '.NET'], link: "https://github.com/UpFlux-By-The-Boys" },
        { title: 'SCAR', description: 'Augmented reality airsoft gunscope with a companion app that presents analytics.', images: ['/portfolio-kevas-wihanto/images/SCAR.png'], tags: ['AWS', 'Jetpack Compose', 'IoT'], link: "https://github.com/gursimar03/SCAR" },
        { title: 'Bugs Life', description: 'A game where bugs are spawned in a chessboard and the last bug standing wins. fitted with auto mode and logs file for end result of a match.', images: ['/portfolio-kevas-wihanto/images/BugsLife.png'], tags: ['C++', 'Chessboard', 'Strategy'], link: "https://github.com/kevashans/Bugs-Life" },
        { title: 'Soccer Savvy', description: 'Collaborated with French and Portuguese students in creating a newspaper web application for football fans, fitted with an admin system, and live matches.', images: ['/portfolio-kevas-wihanto/images/SoccerSavvy.png'], tags: ['React', 'Laravel', 'Fullstack', 'Erasmus', 'ECoal23'], link: "https://github.com/Luqua5/eCoal" },
        { title: 'Job Rush', description: 'Collaborated with students of different diciplines and nationalities in designing an application used by individuals who are looking for short term employment and those who need short-term workers.', images: ['/portfolio-kevas-wihanto/images/JR.png'], tags: ['Figma', 'Erasmus'], link: "https://www.figma.com/proto/YZpwhCJBRoCK5UfV72JsS3/Job-Rush?node-id=0-1&t=vUWTPhNZu7gKRlWA-1" },
    ];

    return (
        <div className='projects-container'>
            <div className='title'>Recent Projects</div>
            <div className="row g-4">
                {projects.map((project, index) => (
                    <div className="col-md-4 mb-4 project-cards" key={index}>
                        <Card className="card-project h-100" style={{ backgroundColor: 'black', color: 'white', cursor: 'pointer' }} onClick={() => project.link && window.open(project.link, '_blank')} >
                            <Card.Img className='experience-card-image' variant="top" src={project.images[0]} alt={project.title} />
                            <Card.Body>
                                <Card.Title className="text-white">{project.title}</Card.Title>
                                <Card.Text className="text-white">{project.description}</Card.Text>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <Badge key={idx} bg="primary" className="m-1">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Body>
                            <Socials />
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
