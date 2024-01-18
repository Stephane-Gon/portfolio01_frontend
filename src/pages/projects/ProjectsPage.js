import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

import Markers from "../../layouts/Markers";
import Title from "../../features/slides/Title";
import Slogan from "../../features/slides/Slogan";
import ProjectSection from "./ProjectSection";

import useFetch from "../../hooks/useFetch";
import useWidth from "../../hooks/useWidth"
import { useTheme } from "../../contexts/ThemeProvider";

const ProjectsPage = ({errorRef}) => {
  let windowWidth = useWidth()

  let theme = useTheme()
  
  useEffect(() => {
    document.title = 'Stephane projects'
    theme.toggleMainColor('/projects')
  }, [])

  let [data, isLoading] = useFetch('stefapi/projects/', errorRef, "Projects")
  

  let elements = []
  let markerTitles = ['Nav']

  // PAGINATION LOGIC
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 3

  useEffect(() => {
    if(!isLoading) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(data['projects'].slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data['projects'].length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data['projects'].length;
    setItemOffset(newOffset);
  };

  // HERE I RENDER THE SECTION ELEMENTS AND THE MARKERS
  if(currentItems) {
    for(let i = 0; i < currentItems.length ; i++) {
      markerTitles.push(`Pro${i}`)
    }

    elements = currentItems.map((pro, i) => {
      return <ProjectSection key={i} id={`sectionPro${i}`} content={pro}/>
    })

  }
  
  return (
    <div className="page">
      {windowWidth > 1200 && <Markers titles={markerTitles}/>}

      <div className="off-section-title-box title-slogan-wrapper" >
        <Title title="Projects" side="top" />
        <Slogan text="These are some of my works over time." />
      </div>
      {elements}
      <ReactPaginate
        containerClassName={`pagination-container ${theme.darkTheme && "pagination-dark"}`}
        pageClassName="pagination-page"
        breakLabel="..."
        nextLabel={<i className="fa-solid fa-caret-right"></i>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<i className="fa-solid fa-caret-left"></i>}
        renderOnZeroPageCount={null}
      />
      
    </div>
  )
}

export default ProjectsPage