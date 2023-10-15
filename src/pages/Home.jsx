import Banner from '../components/Banner';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import ScrollToAnchor from '../components/ScrollToAnchor';

const Home = () => {    
    return (
        <Fragment>
            <ScrollToAnchor />
            <Banner />
            <Content />
            <Footer />
        </Fragment>
    );
};

export default Home;
