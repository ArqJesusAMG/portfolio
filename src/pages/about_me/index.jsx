import React from 'react';
import shortid from 'shortid';
import './styles.css';
import perfilPhoto from '../../assets/images/Foto.jpg';
import { BsFileEarmarkPdfFill, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const AboutMe = () => {
  const skillList = [
    {
      skill: '3d modeling',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Interior design',
      ariaValueNow: '100',
      progressBar: '100%',
    },
    {
      skill: 'Architectural design',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Graphic design',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Interior architecture',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Video/image editing',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Autocad',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'SketchUp',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Lumion',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Photoshop',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Illustrator',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Revit',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Quixel Mixer',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'D5-render',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Filmora',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Davinci resolve',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'obs studio',
      ariaValueNow: '90',
      progressBar: '90%',
    },
    {
      skill: 'Microsoft office',
      ariaValueNow: '90',
      progressBar: '90%',
    },
  ];

  const linkList = [
    { link: 'https://github.com/ArqJesusAMG', icon: <FiGithub />, description: 'Github' },
    { link: 'https://www.linkedin.com/in/jes%C3%BAs-a-martinez-g-a4585a1ab/', icon: <FaLinkedinIn />, description: 'Linkedin' },
    {
      link: 'https://api.whatsapp.com/send?phone=+584124274922&text=Hello, I come from your website!',
      icon: <BsWhatsapp />,
      description: 'Whatsapp',
    },
    {
      link: '',
      icon: <BsFileEarmarkPdfFill />,
      description: 'View CV',
    },
  ];

  const habilities = skillList.map(item => (
    <div key={shortid.generate()} className="progress">
      <span className="skill">{item.skill}</span>
      <div className="progress-bar-wrap">
        {
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={item.ariaValueNow}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: item.progressBar }}
          ></div>
        }
      </div>
    </div>
  ));

  const renderTooltip = (e, description) => (
    <Tooltip id="button-tooltip" {...e}>
      {description}
    </Tooltip>
  );

  const links = linkList.map(item => (
    <OverlayTrigger key={shortid.generate()} placement="bottom" delay={{ show: 250, hide: 300 }} overlay={e => renderTooltip(e, item.description)}>
      <a href={item.link} target="_blank" className="icon" rel="noreferrer" download>
        {item.icon}
      </a>
    </OverlayTrigger>
  ));

  return (
    <section className="skills pb-0" id="about">
      <div className="container">
        <h1 className="title text-center mt-4">ABOUT ME</h1>
        <p className="text-center">INFORMATION ABOUT ME</p>
        <p className="text-center">"The path to success is always under construction"</p>

        <p className="text-start">
          I am an architect with a solid background and experience in design. I am proficient in using architectural design and rendering software, such as
          AutoCAD, Revit, SketchUp, Lumion, and D5 Render. These tools allow me to visualize and communicate my ideas effectively, both conceptually and
          technically. Additionally, I possess strong project management skills, overseeing the entire design cycle from conceptualization to completion of
          construction.
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div
            className="
            col-lg-6
            container__image px-md-5"
          >
            <img src={perfilPhoto} className="img-fluid" alt="perfil" loading="lazy" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <div className="info">
              <div className="list border-list text-start">
                <label>Freelance:</label>
                <p>Avalible</p>
              </div>
              <div className="list text-start">
                <label>Country:</label>
                <p>Venezuela</p>
              </div>
            </div>
            <div className="social-icons m-3">{links}</div>
            <h1 className="title text-center title-skills mb-4">Skills</h1>
            <div className="skills-content">{habilities}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
