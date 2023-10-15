import { Link } from 'react-router-dom';

const Card = ({ name, developers, releaseDate, rating, cover, id }) => {
    return (
        <div className='flex flex-col justify-between h-auto border rounded-lg shadow w-80 bg-slate-300 bg-opacity-20 border-slate-100'>
            <Link to={`/game/${id}`} className='flex px-3 pt-3'>
                {cover ? (
                    <img
                        className='object-cover w-full rounded-md h-96'
                        src={cover}
                    />
                ) : (
                    <img
                        className='object-cover w-full rounded-md h-96'
                        src='/assets/game-pc.webp'
                    />
                )}
            </Link>
            <div className='flex flex-col self-stretch px-3 py-6 h-36'>
                <div className='flex flex-col self-stretch h-24 gap-4 text-slate-100'>
                    <h4 className='font-bold truncate'>{name}</h4>
                    <div className='flex justify-between gap-4 text-xs font-medium text-center uppercase'>
                        <p>
                            {developers
                                ? developers
                                : 'No developers are listed'}
                        </p>
                        <p>{releaseDate?.slice(0, 4)}</p>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <span className='flex gap-1'>
                            <img src={'/assets/star.svg'} alt='star' />
                            <p className='flex font-light text-sky-300'>
                                {Math.round(rating)}/100
                            </p>
                        </span>
                        <img
                            src={'/assets/heart.svg'}
                            alt='heart'
                            className='hidden'
                        />
                        <p className='text-sky-300'>UA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
