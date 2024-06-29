import React, { useContext, useEffect, useState } from "react";
import { RangeSlider, Checkbox, CheckboxGroup } from 'rsuite';
import axios from "axios";

import styleContext from "../../context/styleContext";

import "./Filter.sass";
import closeImage from '../../../images/close.png';

const Filter = ({ className, filters, setFilters }) => {
    const [range, setRange] = useState([1, 5]);
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedTaxonomy, setSelectedTaxonomy] = useState([]);
    const [taxonomies, setTaxonomies] = useState([]);
    const {style, setStyle} = useContext(styleContext)

    const fetchTaxonomies = async () => {
        try {

            let url = `https://api-adoteme.andrednascimento.com.br/wp-json/dogs-characteristics/v1/all`;
            const response = await axios.get(url);

            setTaxonomies(response.data);

        } catch (error) {
            console.error('Erro ao buscar dados dos taxonomias:', error);
        }
    };

    useEffect(() => {
        fetchTaxonomies();
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFilters(prev => ({ ...prev, ageRange: range }));
        }, 500);
        return () => clearTimeout(timeout);
    }, [range]);

    useEffect(() => {
        setFilters(prev => ({ ...prev, genders: selectedGenders }));
    }, [selectedGenders]);

    useEffect(() => {
        setFilters(prev => ({ ...prev, taxonomies: selectedTaxonomy }));
    }, [selectedTaxonomy]);

    useEffect(() => {
        setFilters(prev => ({ ...prev, sizes: selectedSize }));
    }, [selectedSize]);

    return (
        <>
            <div className={`filter-container ${className}`}>
                <div className="title-section">
                    <h2>Filtros</h2>
                    <div className="close" onClick={() => setStyle(!style)}>
                        <img src={closeImage} width={30} alt="close" />
                    </div>
                </div>

                <div className="filters">
                    <div className="filter-section">
                        <h4>Gênero</h4>

                        <CheckboxGroup name="checkbox-group" value={selectedGenders} onChange={(values) => setSelectedGenders(values)}>
                            <Checkbox value="male">Macho</Checkbox>
                            <Checkbox value="female">Fêmea</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="filter-section">
                        <h4>Porte</h4>

                        <CheckboxGroup name="checkbox-group" value={selectedSize} onChange={(values) => setSelectedSize(values)}>
                            <Checkbox value="small">Pequeno</Checkbox>
                            <Checkbox value="medium">Médio</Checkbox>
                            <Checkbox value="large">Grande</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="filter-section">
                        <h4>Característica</h4>
                        <CheckboxGroup name="checkbox-group" value={selectedTaxonomy} onChange={(values) => setSelectedTaxonomy(values)}>
                            {taxonomies.map((taxonomy, index) => (
                                <Checkbox key={index} value={taxonomy.slug}>{taxonomy.name}</Checkbox>
                            ))}
                        </CheckboxGroup>
                    </div>

                    <div className="filter-section">
                        <h4>Idade</h4>
                        <div className="range-slider">
                            <RangeSlider
                                max={10}
                                className="custom-range-slider"
                                defaultValue={[range[0], range[1]]}
                                onChange={value => setRange(value)}
                            />
                            <div className="range-value">{range[0]} - {range[1]}</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Filter;