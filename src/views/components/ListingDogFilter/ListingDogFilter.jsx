import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Placeholder } from 'rsuite';

import './ListingDogFilter.sass';

import Filter from "../Filter/Filter";
import DogCard from "../DogCard/DogCard";
import { Pagination } from 'rsuite';
import MobileFilter from "../MobileFilter/MobileFilter";

import styleContext from "../../context/styleContext";

const ListingDogFilter = ({ dogs, pagination, setPagination, loading, listingRef, filters, setFilters }) => {

    const { currentPage, totalPosts, totalPages } = pagination;
    const [style, setStyle] = useState('hidden')
    const location = useLocation();
    const firstRender = useRef(true);



    useEffect(() => {
        if (location.hash !== '#doguinhos') return;

        const section = document.querySelector('.leftGroup');
        if (!section) return;

        setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }, [location]);

    const handleClickPagination = () => {
        const dogsContainer = document.querySelector('.leftGroup');
        if (!dogsContainer) return;

        setTimeout(() => {
            dogsContainer.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }


    return (
        <>
            <styleContext.Provider value={{ style, setStyle }}>
                <div className="container" ref={listingRef}>

                    <div className={`listingDogFilter doguinhos`}>

                        <MobileFilter />

                        <Filter
                            className={style}
                            filters={filters}
                            setFilters={setFilters}
                        />

                        <div className="leftGroup">
                            {/* tem que mostrar total posts */}
                            <h5>Resultado: {totalPosts}</h5>
                            <div className="dogsGroup">
                                {loading ? (
                                    <>
                                        <Placeholder.Paragraph graph="circle" active />
                                        <Placeholder.Paragraph graph="circle" active />
                                        <Placeholder.Paragraph graph="circle" active />
                                        <Placeholder.Paragraph graph="circle" active />
                                        <Placeholder.Paragraph graph="circle" active />
                                        <Placeholder.Paragraph graph="circle" active />
                                        <Placeholder.Paragraph graph="circle" active />
                                        <Placeholder.Paragraph graph="circle" active />
                                        <Placeholder.Paragraph graph="circle" active />
                                    </>

                                ) : (
                                    <>

                                        {dogs.map((dog, index) => (
                                            <DogCard
                                                // className={loading ? 'dogLoading' : ''}
                                                key={index}
                                                dogMainPhoto={dog.dogMainPhoto}
                                                dogName={dog.dogName}
                                                dogAge={dog.dogAge}
                                                dogSize={dog.dogSize}
                                                dogGender={dog.dogGender}
                                                dogSlug={dog.dogSlug}
                                            />
                                        ))}

                                    </>

                                )}

                            </div>

                            <Pagination
                                className="paginationItems"
                                prev
                                next
                                maxButtons={5}
                                size="lg"
                                total={totalPosts} // Total de posts
                                limit={6} // Número de itens por página
                                activePage={currentPage}
                                onChangePage={(newPage) => setPagination(prev => ({ ...prev, currentPage: newPage }))}
                                onClick={handleClickPagination}
                            />

                        </div>
                    </div>


                </div >
            </styleContext.Provider>
        </>
    )
}

export default ListingDogFilter;