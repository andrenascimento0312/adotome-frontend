import React from "react";

import './DogCard.sass';

import dogImage from '../../../images/dog.png'
import { Link } from "react-router-dom";

const DogCard = ({ className, dogName, dogAge, dogSize, dogGender, dogMainPhoto, dogSlug }) => {

    return (
        <>
            <div className={`dogCard ${className}`}>
                <div className="dogImage">
                    <Link to={`/doguinho/${dogSlug}`}>
                        <img src={dogMainPhoto} alt="" height={265} width={265} srcset="" />
                    </Link>
                </div>
                <div className="dogContent">
                    <Link to={`/doguinho/${dogSlug}`} >
                        <h3>{dogName}</h3>
                    </Link>
                    <div className="dogInfo">
                        <div className="dogAge">{dogAge} anos</div>
                        <div className="dogSize">{dogSize}</div>
                        <div className="dogSize">{dogGender}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DogCard;