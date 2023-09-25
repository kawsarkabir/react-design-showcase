import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoriesList from '../../components/CatagoriesList/CategoriesList';
import FeaturesList from '../../components/FeaturesList/FeaturesList';

const Statistics = () => {
    return (
        <div>
            <Banner/>
            <CategoriesList/>
            <FeaturesList/>
        </div>
    );
};

export default Statistics;