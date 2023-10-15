import { platforms } from '../data';
import { useFilterContext } from './useFilterContext';

const PlatformFilter = () => {
    const { selectedFilters, setSelectedFilters } = useFilterContext();

    const handlePlatformChange = (platform) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            selectedPlatforms: prevFilters.selectedPlatforms.includes(platform)
                ? prevFilters.selectedPlatforms.filter((p) => p !== platform)
                : [...prevFilters.selectedPlatforms, platform],
        }));
    };

    const isPlatformSelected = (platform) =>
        selectedFilters.selectedPlatforms.includes(platform);

    return (
        <div className='mb-4'>
            <h3 className='mb-2 text-lg font-semibold'>Платформа</h3>
            <ul className='space-y-1'>
                {platforms.map((platform) => (
                    <li key={platform}>
                        <label className='flex items-center'>
                            <input
                                type='checkbox'
                                className='mr-2'
                                checked={isPlatformSelected(platform)}
                                onChange={() => handlePlatformChange(platform)}
                            />
                            {platform}
                        </label>
                    </li>
                ))}
            </ul>
            <div className='my-4 border-t border-gray-500'></div>
        </div>
    );
};

export default PlatformFilter;
