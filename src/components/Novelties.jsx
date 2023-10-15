import Card from './Card';
import axios from '../axios';
import { useQuery } from '@tanstack/react-query';

const Novelties = () => {
	const { isLoading, isError, error, data } = useQuery(
		['novelties'],
		() => axios.get('/api/games/last-populars'),
		{ select: ({ data }) => data.gameCards }
	);

	if (isLoading) {
		return (
			<div></div>
		);
	}

	if (isError) {
		return <div className='text-white'>Error: {error.message}</div>;
	}

	if (window.innerWidth < 1400 && window.innerWidth > 1060) {
		data.length = 3;
	}

	return (
		<div
			className='flex flex-col gap-10 pl-5 pr-5 text-slate-100'
			id='novelties'>
			<div className='flex items-center gap-2 m-auto'>
				<h2 className='text-2xl uppercase text-sky-300'>
					Популярні новинки
				</h2>
				<img src='/assets/bigger.svg' alt='bigger' className='hidden' />
			</div>
			<div className='flex flex-wrap justify-center gap-5'>
				{data.map((game) => (
					<Card key={game.id} {...game} />
				))}
			</div>
		</div>
	);
};

export default Novelties;
