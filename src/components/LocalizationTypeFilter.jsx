import { localizationTypes } from '../data';
import { useFilterContext } from './useFilterContext';

const LocalizationTypeFilter = () => {
	const { selectedFilters, setSelectedFilters } = useFilterContext();

	const handleLocalizationTypeChange = (localizationType) => {
		setSelectedFilters((prevFilters) => ({
			...prevFilters,
			selectedLocalizationTypes:
				prevFilters.selectedLocalizationTypes.includes(localizationType)
					? prevFilters.selectedLocalizationTypes.filter(
							(type) => type !== localizationType
					)
					: [
							...prevFilters.selectedLocalizationTypes,
							localizationType,
					],
		}));
	};

	const isLocalizationTypeSelected = (localizationType) =>
		selectedFilters.selectedLocalizationTypes.includes(localizationType);

	return (
		<div>
			<h3 className='mb-2 text-lg font-semibold'>Тип локалізації</h3>
			<ul className='space-y-1'>
				{localizationTypes.map((type) => (
					<li key={type.id}>
						<label className='flex items-center'>
							<input
								type='checkbox'
								className='mr-2'
								checked={isLocalizationTypeSelected(type.en)}
								onChange={() =>
									handleLocalizationTypeChange(type.en)
								}
							/>
							{type.uk}
						</label>
					</li>
				))}
			</ul>
			<div className='my-4 border-t border-gray-500'></div>
		</div>
	);
};

export default LocalizationTypeFilter;
