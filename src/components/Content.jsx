import Bestsellers from './Bestsellers';
import Novelties from './Novelties';

const Content = () => {
    return (
        <div className='flex items-center justify-between bg-black max-w-[1440px] bg-opacity-100 gap-32 m-auto flex-col pt-16'>
            <Bestsellers />
            <Novelties />
        </div>
    );
};

export default Content;
