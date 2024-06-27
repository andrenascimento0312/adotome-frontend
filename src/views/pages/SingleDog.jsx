import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Placeholder } from 'rsuite';

import '../App.sass';

const SingleDog = () => {
    const [dog, setDog] = useState([])
    const [dogLoading, setDogLoading] = useState(false)
    const { slug } = useParams()

    useEffect(() => {
        const fetchDogSingle = async () => {
            try {
                setDogLoading(true)
                const response = await fetch(`https://api-adoteme.andrednascimento.com.br/wp-json/dogs/v1/doguinho/${slug}`);

                if (!response.ok) {
                    throw new Error('Erro ao carregar o post');
                }

                const data = await response.json();
                // console.log(data)
                setDog(data);
            } catch (error) {
                console.error('Erro na requisição:', error);
            } finally {
                setTimeout(() => {
                    setDogLoading(false);
                }, 500);
            }
        };

        fetchDogSingle();

    }, [slug]);

    return (

        <div className="container singleGroup">

            {dogLoading ? (
                   <Placeholder.Graph className="placeholder" active />
            ) : (
            <>
                <div className="singleColLeft">
                    <img src={dog?.dogMainPhoto} alt="" srcset="" />
                </div>

                <div className="singleColRight">

                    <h1>{dog?.dogName}</h1>
                    <a href="" className="btn-primary">Contatar</a>

                    <div className="infoGroup">
                        <div className="left">Gênero</div>
                        <div className="right">: {dog?.dogGender}</div>
                    </div>

                    <div className="infoGroup">
                        <div className="left">Idade</div>
                        <div className="right">: {dog?.dogAge}</div>
                    </div>

                    <div className="infoGroup">
                        <div className="left">Porte</div>
                        <div className="right">: {dog?.dogSize}</div>
                    </div>

                    <div className="infoGroup">
                        <div className="left">Características</div>
                        <div className="right">: {dog?.characteristics?.join(', ')}</div>
                    </div>


                    <div className="infoGroup">
                        <div className="left">Descrição</div>
                        <div className="right">: {dog?.description}</div>
                    </div>
                </div>
            </>
                )}

        </div>

    )
}

export default SingleDog;