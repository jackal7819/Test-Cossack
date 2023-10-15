import '../index.css';

import {useEffect} from 'react';

import Card from '../components/Card';
import { Link } from 'react-router-dom';

const games = [
    {
        id: 1,
        title: 'The Witcher 3 - Wild Hunt',
        company: 'CD Project Red',
        year: 2015,
        rating: 92,
        image: '/assets/witcher.jpg',
    },
    {
        id: 2,
        title: 'Hogwarts Legacy',
        company: 'Avalanche Software',
        year: 2022,
        rating: 89,
        image: '/assets/hogwarts.jpg',
    },
    {
        id: 3,
        title: 'The Elder Scrolls V: Skyrim',
        company: 'Bethesda Game Studios',
        year: 2014,
        rating: 95,
        image: '/assets/skyrim.jpg',
    },
    {
        id: 4,
        title: 'Control - Ultimate Edition',
        company: 'Remedy Entertainment',
        year: 2018,
        rating: 81,
        image: '/assets/control.jpg',
    },
];

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className='bg-footer max-w-[1440px] m-auto'>
            <div className='flex flex-col justify-between bg-black bg-opacity-50 min-h-screen-minus-menu'>
                <div className='flex flex-col gap-10 p-20 text-slate-100 '>
                    <div className='flex items-center justify-between gap-10'>
                        <div className='flex items-center justify-between gap-5'>
                            <img
                                className='w-20 h-20 rounded-full'
                                src='/assets/photo.jpg'
                            />
                            <p>Arthur723</p>
                            <img src='/assets/pencil.svg' alt='pencil' />
                        </div>
                        <button className='py-2 border rounded-lg px-9 border-rose-900'>
                            Видалити профіль
                        </button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='underline underline-offset-4'>Улюблене</p>
                        <p className='text-xl'>/</p>
                        <p>Нещодавно переглянуті</p>
                    </div>
                    <div className='flex gap-5'>
                        {games.map((game) => (
                            <Card key={game.id} {...game} />
                        ))}
                    </div>
                </div>
                <div className='flex items-center justify-between pl-20 pr-20 pt-72 text-slate-100 gap-80 '>
                    <div className='flex flex-col justify-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <img
                                src='/assets/logo.svg'
                                alt='logo'
                                className='border rounded-full border-slate-600'
                            />
                            <Link to={'/'}>Cossack</Link>
                        </div>
                        <div className='flex gap-4'>
                            <Link
                                to={'https://www.facebook.com/'}
                                target='_blank'
                                rel='noopener noreferrer'>
                                Facebook
                            </Link>
                            <Link
                                to={'https://www.twitter.com/'}
                                target='_blank'
                                rel='noopener noreferrer'>
                                Twitter
                            </Link>
                            <Link
                                to={'https://web.telegram.org/a/'}
                                target='_blank'
                                rel='noopener noreferrer'>
                                Telegram
                            </Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-20 p-20 border-t border-l border-r rounded-tl-lg rounded-tr-lg border-slate-100'>
                    <div className='inline-flex flex-col items-center justify-center flex-grow gap-4'>
                        <Link to={'/catalog'}>Каталог</Link>
                        <Link to={'/#novelties'}>Популярні новинки</Link>
                    </div>
                    <div className='inline-flex flex-col items-center justify-center flex-grow gap-4'>
                        <Link to={'/#bestsellers'}>Бестселери</Link>
                        <Link to={'/profile'}>Профіль</Link>
                    </div>
                    <div className='inline-flex flex-col items-center justify-center flex-grow gap-4'>
                        <Link to={'/about'}>Про Cossack</Link>
                        <Link to={'/faq'}>FAQ</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
