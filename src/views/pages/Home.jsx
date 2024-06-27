import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero/Hero";
import ListingDogFilter from "../components/ListingDogFilter/ListingDogFilter";

const Home = () => {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({ currentPage: 1, totalPosts: 0, totalPages: 1 });
    const [filters, setFilters] = useState({ ageRange: [], genders: [], sizes: [], taxonomies: [] });
    const listingRef = useRef(null)
    
    const buildUrl = () => {
        const { currentPage } = pagination;
        const { ageRange, genders, sizes, taxonomies } = filters;

        let url = `https://api-adoteme.andrednascimento.com.br/wp-json/dogs/v1/all?page=${currentPage}`;

        if (ageRange.length > 0) {
            url += `&age=${ageRange.join(",")}`;
        }
        if (sizes.length > 0) {
            url += `&size=${sizes.join(",")}`;
        }
        if (genders.length > 0) {
            url += `&gender=${genders.join(",")}`;
        }

        if (taxonomies.length > 0) {
            url += `&taxonomy=${taxonomies.join(",")}`;
        }

        return url;
    };

    const fetchDogs = async () => {
        try {

            setLoading(true);
            const url = buildUrl();
            const response = await axios.get(url);

            const dogsData = Object.keys(response.data)
                .filter(key => !isNaN(key)) // Filtrando apenas chaves numéricas
                .map(key => response.data[key]); // Mapeando para os valores correspondentes

            console.log(dogsData)
            setDogs(dogsData);
            setPagination(prev => ({
                ...prev,
                totalPosts: response.data.totalPosts,
                totalPages: response.data.totalPages,
                currentPage: response.data.currentPage
            }));


        } catch (error) {
            console.error('Erro ao buscar dados dos cachorros:', error);
        } finally {
            setLoading(false);

        }
    };

    useEffect(() => {

        fetchDogs();

    }, [pagination.currentPage, filters])

    return (
        <>
            <Hero />

            <ListingDogFilter
                ref={listingRef}
                dogs={dogs}
                pagination={pagination}
                setPagination={setPagination}
                loading={loading}
                filters={filters}
                setFilters={setFilters}
            />


        </>
    )
}

export default Home;