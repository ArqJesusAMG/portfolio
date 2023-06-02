import React from 'react';
import shortid from 'shortid';
import { Container } from 'react-bootstrap';
import './styles.css';

const Work = () => {
  const workList = [
    {
      dates: '2022 - PRESENT',
      company: 'Freelance',
      position: 'Architectural Drafter and Designer',
      description:
        'I work as an architectural draftsman, 3D modeling and design visualization. Using leading software such as AutoCAD, SketchUp, Revit, 5D Render and Lumion, which allows me to create detailed technical drawings and visually appealing presentations directly for commercial, institutional and residential projects.',
    },
    {
      dates: '2020 - 2022',
      company: 'PROCONSERVICES, C.A',
      position: 'Architectural Drafter and Designer',
      description:
        'I worked as an architectural draftsman, 3D modeling and design visualization. Using leading software such as AutoCAD, SketchUp and Lumion, which allowed me to create detailed technical drawings and visually appealing presentations directly for commercial projects.',
    },
    {
      dates: '04/2019 - 08/2019',
      company: 'MINHVI OBRA',
      position: 'Architectural drafter and Designer',
      description:
        'I worked on a project related to the design of urban and landscape equipment for a multi-family residential complex. My approach was focused on understanding the existing environment, analyzing the site and developing architectural proposals that improve functionality, aesthetics and the interaction of people with the space.',
    },
  ];
  const works = workList.map(item => (
    <div className="work__item" key={shortid.generate()}>
      <p className="work__date">
        {item.dates} <br /> <span className="work__company">{item.company}</span>
      </p>
      <p className="work__position">{item.position}</p>
      <p className="work__description">{item.description}</p>
    </div>
  ));

  return (
    <section className="work" id="experience">
      <div className="container"></div>
      <h1 className="title text-center mt-4">WORK EXPERIENCE</h1>
      <p className="text-center">3+ YEARS OF EXPERIENCE</p>

      <Container className="work__experience">{works}</Container>
    </section>
  );
};

export default Work;
