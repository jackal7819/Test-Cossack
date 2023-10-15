import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { useQuery } from '@tanstack/react-query';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player/youtube';
import GameSummary from '../components/GameSummary';
import Similar from '../components/Similar';
import '../index.css';
import Error from './Error';

const FullCard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { gameId } = useParams();

    const { isLoading, isError, data } = useQuery(
        ['game', gameId],
        () => axios.get(`/api/games/${gameId}`),
        { select: ({ data }) => data.gamePage, retry: 0 }
    );

    if (isLoading) {
        return (
            // Loading

            // <div className='flex items-center justify-center h-screen-minus-menu'>
            //     <button
            //         disabled
            //         type='button'
            //         class='text-slate-100 bg-sky-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center text-xl'>
            //         <svg
            //             aria-hidden='true'
            //             role='status'
            //             class='inline w-6 h-6 mr-3 text-slate-100 animate-spin'
            //             viewBox='0 0 100 101'
            //             fill='none'
            //             xmlns='http://www.w3.org/2000/svg'>
            //             <path
            //                 d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            //                 fill='#E5E7EB'
            //             />
            //             <path
            //                 d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            //                 fill='currentColor'
            //             />
            //         </svg>
            //         Завантаження...
            //     </button>
            // </div>

            // Animation div

            // <div className='flex items-center justify-center h-screen-minus-menu'>
            //     <div class='border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
            //         <div class='animate-pulse flex flex-col space-x-4'>
            //             <div class='rounded-full bg-slate-700 h-10 w-10'></div>
            //             <div class='flex-1 space-y-6 py-1'>
            //                 <div class='h-2 bg-slate-700 rounded'></div>
            //                 <div class='space-y-3'>
            //                     <div class='grid grid-cols-3 gap-4'>
            //                         <div class='h-2 bg-slate-700 rounded col-span-2'></div>
            //                         <div class='h-2 bg-slate-700 rounded col-span-1'></div>
            //                     </div>
            //                     <div class='h-2 bg-slate-700 rounded'></div>
            //                 </div>
            //             </div>
            //             <div class='rounded-full bg-slate-700 h-10 w-10'></div>
            //             <div class='flex-1 space-y-6 py-1'>
            //                 <div class='h-2 bg-slate-700 rounded'></div>
            //                 <div class='space-y-3'>
            //                     <div class='grid grid-cols-3 gap-4'>
            //                         <div class='h-2 bg-slate-700 rounded col-span-2'></div>
            //                         <div class='h-2 bg-slate-700 rounded col-span-1'></div>
            //                     </div>
            //                     <div class='h-2 bg-slate-700 rounded'></div>
            //                 </div>
            //             </div>
            //             <div class='rounded-full bg-slate-700 h-10 w-10'></div>
            //             <div class='flex-1 space-y-6 py-1'>
            //                 <div class='h-2 bg-slate-700 rounded'></div>
            //                 <div class='space-y-3'>
            //                     <div class='grid grid-cols-3 gap-4'>
            //                         <div class='h-2 bg-slate-700 rounded col-span-2'></div>
            //                         <div class='h-2 bg-slate-700 rounded col-span-1'></div>
            //                     </div>
            //                     <div class='h-2 bg-slate-700 rounded'></div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

            // Bean Eater
            <div className='flex items-center justify-center bg-footer h-screen-minus-menu max-w-[1440px] m-auto'>
                <img src='/assets/wedges.svg' />
            </div>
        );
    }

    if (isError) {
        return <Error />;
    }

    // Images

    const limitedImages = data.screenshoots.slice(0, 6);

    return (
        <Fragment>
            <div className='flex flex-col items-center gap-10 bg-black max-w-[1440px] bg-opacity-50 m-auto text-slate-100 pl-10 pr-10 md:pl-20 md:pr-20 md:pt-20 pt-10'>
                <div className='flex flex-col gap-10'>
                    <h2 className='text-xl font-bold text-center uppercase lg:text-3xl'>
                        {data.name}
                    </h2>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col items-center gap-10 lg:flex-row'>
                            <div className='w-full aspect-video'>
                                <ReactPlayer
                                    url={
                                        data.videos[0]
                                            ? data.videos[0]
                                            : 'https://www.youtube.com/watch?v=lowuhXBHxAw'
                                    }
                                    width='100%'
                                    height='100%'
                                    controls
                                />
                            </div>
                            <GameSummary data={data} />
                        </div>
                        <div className='flex flex-col gap-10'>
                            <p>{data.summary}</p>
                        </div>
                        <div className='flex flex-wrap justify-center gap-5 xl:justify-around'>
                            {limitedImages.map((image) => (
                                <div key={image} className='w-96'>
                                    <img
                                        src={image}
                                        alt={image}
                                        className='w-full h-auto rounded-lg'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Similar data={data} />
            </div>
            <Footer />
        </Fragment>
    );
};

export default FullCard;
