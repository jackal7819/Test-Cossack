import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        selectedPlatforms: [],
        selectedDeveloperCountryType: 1,
        selectedGenres: [],
        selectedLocalizationTypes: [],
        selectedYearRange: [1990, 2023],
    });

    return (
        <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
            {children}
        </FilterContext.Provider>
    );
};
