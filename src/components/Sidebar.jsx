import DeveloperCountryFilter from './DeveloperCountryFilter';
import GenreFilter from './GenreFilter';
import LocalizationTypeFilter from './LocalizationTypeFilter';
import PlatformFilter from './PlatformFilter';
import YearRangeSelector from './YearRangeSelector';

const Sidebar = () => {


    return (
        <div
            className={`w-80 xl:w-[850px] fixed xl:relative bg-slate-900 p-10 xl:p-0 h-full right-0 xl:bg-transparent top-0 overflow-y-auto xl:overflow-hidden transform transition-transform duration-300 text-slate-300`}>
            <h2 className='mb-4 text-xl font-semibold'>Фільтри</h2>
            <PlatformFilter />
            <YearRangeSelector />
            <DeveloperCountryFilter />
            <GenreFilter />
            <LocalizationTypeFilter />
        </div>
    );
};

export default Sidebar;
