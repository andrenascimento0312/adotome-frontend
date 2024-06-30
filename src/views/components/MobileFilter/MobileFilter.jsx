import React, { useContext } from "react";

import styleContext from "../../context/styleContext";

import "./MobileFilter.sass";
import filterImage from '../../../images/filter.png'

const MobileFilter = () => {
    const {style, setStyle} = useContext(styleContext)

    return (
        <>
            <div className="mobile-filter-container">
                <div className="item">Filtros:</div>
                <div className="item" onClick={() => setStyle('visible')}>
                    <img src={filterImage} width={90} alt="Filter" />
                </div>
            </div>

        </>
    )
}

export default MobileFilter;