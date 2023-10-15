import { developerCountryType } from '../data';
import { useFilterContext } from './useFilterContext';

const DeveloperCountryFilter = () => {
    const { selectedFilters, setSelectedFilters } = useFilterContext();

    const handleDeveloperCountryChange = (countryType) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            selectedDeveloperCountryType:
                prevFilters.selectedDeveloperCountryType === countryType
                    ? 0
                    : countryType,
        }));
    };

    const isDeveloperCountrySelected = (countryType) =>
        selectedFilters.selectedDeveloperCountryType === countryType;

    return (
        <div className='mb-4'>
            <h3 className='mb-2 text-lg font-semibold'>Походження</h3>
            <ul className='space-y-1'>
                {developerCountryType.map((type) => (
                    <li key={type.id}>
                        <label className='flex items-center'>
                            <input
                                type='checkbox'
                                className='mr-2'
                                checked={isDeveloperCountrySelected(type.id)}
                                onChange={() =>
                                    handleDeveloperCountryChange(type.id)
                                }
                            />
                            {type.label}
                        </label>
                    </li>
                ))}
            </ul>
            <div className='my-4 border-t border-gray-500'></div>
        </div>
    );
};

export default DeveloperCountryFilter;
