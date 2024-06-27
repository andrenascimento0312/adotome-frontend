import React from "react";
import { Breadcrumb } from 'rsuite';
import { Link } from "react-router-dom";

const DogBreadcrumb = ({ separator }) => {
    return (
        <>
            <Breadcrumb separator={separator}>
                <Breadcrumb.Item as={Link} href="/">
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item as={Link} href="/components/overview">
                    Components
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}

export default DogBreadcrumb;