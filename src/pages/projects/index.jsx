import React, { useEffect, useState } from 'react';
import './styles.css';
import shortid from 'shortid';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';
// import video1 from '../../assets/images/PROYECTO RIO-SOAPURE (JESUS A. MARTINEZ).mkv';
// import caura from '../../assets/images/PROYECT CASA CAURA-1.png';

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [filterList, setFilterList] = useState([
    { dataTarget: 'all', title: 'All', active: true },
    { dataTarget: 'image', title: 'Images', active: false },
    { dataTarget: 'video', title: 'Videos', active: false },
  ]);

  const getProject = async (filter = null) => {
    const projectsQuery = query(collection(db, 'Projects'), filter);
    const querySnapshot = await getDocs(projectsQuery);
    const data = querySnapshot.docs.map(doc => doc.data()).reverse();
    setProjectList(data);
  };

  const projects = projectList.length
    ? projectList.map(item => (
        <div key={shortid.generate()} className="col-lg-4 col-12 cardProjects" category={item.category}>
          <img loading="lazy" className="img-projects" src={item.image} alt={`${item.title}-img`} />
          <div className="overlay">
            <a href={item.link} target="_blank" rel="noreferrer">
              CLICK ME
            </a>
          </div>
        </div>
      ))
    : 'No projects available';

  useEffect(() => {
    getProject();
  }, []);

  const handlerFilter = async ({ target }) => {
    const dataTarget = target.getAttribute('data-target');
    setFilterList(preValue => preValue.map(item => (item.dataTarget === dataTarget ? { ...item, active: true } : { ...item, active: false })));
    if (dataTarget !== 'all') {
      getProject(where('category', '==', dataTarget));
      return;
    }
    getProject();
  };

  const filters = filterList.map((item, i) => {
    return (
      <li onClick={handlerFilter} key={shortid.generate()} data-target={item.dataTarget} className={item.active ? 'category-item active' : 'category-item'}>
        {item.title}
      </li>
    );
  });

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h1 className="title text-center mt-4">Projects</h1>
        <p className="text-center">SOME OF MY PUBLIC/PRIVATE PROJECTS</p>
        <div className="container">
          <div className="row ">
            <div className="filter-buttons">
              <ul className="filter-btns d-flex">{filters}</ul>
            </div>
          </div>
        </div>
        <div className="row cardProject">{projects}</div>
        <video src=""></video>
        {/* <video width="320" height="240" controls>
          <source src={video1} type="video/mkv" />
        </video> */}
      </div>
    </section>
  );
};

export default Projects;
