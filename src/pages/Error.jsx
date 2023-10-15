import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../index.css';

const Error = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isWideScreen = window.innerWidth >= 1280;
    return (
        <main className='bg-footer max-w-[1440px] m-auto'>
            <div
                className={`flex items-center justify-center bg-black bg-opacity-50 ${
                    isWideScreen ? 'h-screen-minus-menu' : ''
                }`}>
                <div className='flex flex-col items-center gap-3 px-5 text-center bg-opacity-50 py-14 rounded-3xl align-items-center lg:px-28 text-slate-100'>
                    <p className='font-semibold text-9xl text-sky-300'>404</p>
                    <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
                        сторінку не знайдено
                    </h1>
                    <p className='mt-6 text-lg leading-7'>
                        На жаль, ми не змогли знайти сторінку, яку ви шукаєте.
                    </p>
                    <div className='mt-10'>
                        <Link
                            to='/'
                            className='px-6 py-2 rounded-lg bg-sky-600'>
                            Повернутися на головну
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Error;
