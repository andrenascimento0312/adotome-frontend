import { Breadcrumb } from 'rsuite';

const DogBreadcrumb = ({dogName}) => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>{dogName}</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}

export default DogBreadcrumb;