import { genres } from '../data';
import { useFilterContext } from './useFilterContext';

const GenreFilter = () => {
	const { selectedFilters, setSelectedFilters } = useFilterContext();

	const handleGenreChange = (genre) => {
		setSelectedFilters((prevFilters) => ({
			...prevFilters,
			selectedGenres: prevFilters.selectedGenres.includes(genre)
				? prevFilters.selectedGenres.filter(
						(selectedGenre) => selectedGenre !== genre
				)
				: [...prevFilters.selectedGenres, genre],
		}));
	};

	const isGenreSelected = (genre) =>
		selectedFilters.selectedGenres.includes(genre);

	return (
		<div className='mb-4'>
			<h3 className='mb-2 text-lg font-semibold'>Жанр</h3>
			<ul className='space-y-1'>
				{genres.map((genre) => (
					<li key={genre.id}>
						<label className='flex items-center'>
							<input
								type='checkbox'
								className='mr-2'
								checked={isGenreSelected(genre.en)}
								onChange={() => handleGenreChange(genre.en)}
							/>
							{genre.uk}
						</label>
					</li>
				))}
			</ul>
			<div className='my-4 border-t border-gray-500'></div>
		</div>
	);
};

export default GenreFilter;
