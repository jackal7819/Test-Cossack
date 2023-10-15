import '../index.css';

import { useState } from 'react';

import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Banner = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');
	const { isLoading, isError, error, data } = useQuery(
		['localizations'],
		() => axios.get('/api/games/localizations-count'),
		{ select: ({ data }) => data }
	);

	const handleSearch = () => {
		navigate(`/catalog?search=${searchQuery}`);
	};

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	if (isLoading) {
		return (
			<div className='flex items-center justify-center bg-footer h-screen-minus-menu max-w-[1440px] m-auto'>
				<img src='/assets/wedges.svg' />
			</div>
		);
	}

	if (isError) {
		return <div className='text-white'>Error: {error.message}</div>;
	}
    
	return (
		<div
			className='flex items-center justify-center max-w-[1440px] h-screen m-auto bg-banner px-5'
			id='banner'>
			<div className='inline-flex flex-col items-center gap-10 tracking-widest text-slate-100'>
				<div className='flex flex-col items-center self-stretch justify-center text-center'>
					<p className='mb-5 text-4xl font-bold uppercase'>
						Геймплей,
						<span className='text-yellow-400'> наповнений</span>
						<span className='text-sky-300'> душею!</span>
					</p>
					<p className='mb-2 text-xl'>
						Каталог української локалізації
					</p>
					<p className='text-xl'>
						Обирай і насолоджуйся українізованими іграми
					</p>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex items-center'>
						<input
							type='text'
							placeholder='Введіть назву гри'
							className='px-6 py-2 mr-2 border rounded-lg xl:w-96 text-slate-400'
							value={searchQuery}
							onChange={handleInputChange}
						/>
						<button
							className='px-6 py-2 rounded-lg bg-sky-600'
							onClick={handleSearch}>
							Пошук
						</button>
					</div>
				</div>
				<div className='flex gap-10 leading-7 md:gap-20 md:text-xl text-red-50'>
					<div className='flex flex-col items-center justify-center gap-4'>
						<p className='text-4xl font-bold leading-10'>
							{data.audio}
						</p>
						<p>Озвучення</p>
					</div>
					<div className='flex flex-col items-center justify-center gap-4'>
						<p className='text-4xl font-bold leading-10'>
							{data.interface}
						</p>
						<p>Інтерфейс</p>
					</div>
					<div className='flex flex-col items-center justify-center gap-4'>
						<p className='text-4xl font-bold leading-10'>
							{data.subtitles}
						</p>
						<p>Текст</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
