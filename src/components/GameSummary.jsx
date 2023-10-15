import { platforms } from '../data';

const GameSummary = ({ data }) => {
    // Sort Localizations

    const language = 'Ukrainian';
    const filteredLocalizations = data.localizations.filter(
        (item) => item.language === language
    );

    let localizationUa = '';
    if (filteredLocalizations.length > 0) {
        const types = filteredLocalizations.map((item) => item.type);
        localizationUa = types.join(', ');
    } else {
        localizationUa = `No data available for ${language}`;
    }

    // Websites

    const websiteOfficial = data.websites.find(
        (site) => site.category === 'official'
    );

    const websiteWikipedia = data.websites.find(
        (site) => site.category === 'wikipedia'
    );

    const websiteStore = data.websites.find((site) => site.category === 'gog');

    return (
        <div className='flex flex-col items-center justify-center gap-10 w-96'>
            <div className='flex flex-col gap-4 font-light'>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-4'>
                        <p>Розробник:</p>
                        <p>Дата виходу:</p>
                        <p>Локалізація:</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>{data.developers}</p>
                        <p>{data.releaseDate}</p>
                        <p className='lowercase'>{localizationUa}</p>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <p>Платформи:</p>
                    {/* <div className='flex gap-3'>
                        <img src='/assets/xbox.svg' alt='xbox' />
                        <img src='/assets/nintendo.svg' alt='nintendo' />
                        <img src='/assets/pc.svg' alt='pc' />
                        <img src='/assets/playstation.svg' alt='playstation' />
                    </div> */}
                    <div className='flex flex-wrap gap-3'>
                        {platforms.map(
                            (platform) =>
                                data.platforms.includes(platform) && (
                                    <img
                                        key={platform}
                                        src={`/assets/${platform.toLowerCase().replace(/\s+/g, '-').replace(/\|/g, '')}.svg`}
                                        alt={platform}
                                        className='w-8 h-8'
                                    />
                                )
                        )}
                    </div>
                </div>
                <div className='flex gap-12'>
                    <p>Рейтинг:</p>
                    <p className='text-sky-300'>
                        {Math.round(data.rating)}/100
                    </p>
                </div>
                {websiteOfficial && (
                    <div className='flex gap-14'>
                        <p>Official:</p>
                        <a
                            href={websiteOfficial.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='truncate max-w-[250px] text-sky-300'>
                            {websiteOfficial.url}
                        </a>
                    </div>
                )}
                {websiteWikipedia && (
                    <div className='flex gap-9'>
                        <p>Wikipedia:</p>
                        <a
                            href={websiteWikipedia.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-sky-300'>
                            About the Game
                        </a>
                    </div>
                )}
                {websiteStore && (
                    <div className='flex gap-20'>
                        <p>Store:</p>
                        <a
                            href={websiteStore.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-sky-300'>
                            Buy the Game
                        </a>
                    </div>
                )}
                <div className='flex flex-col gap-4'>
                    <p>Жанри:</p>
                    <div className='flex flex-wrap gap-3 text-xs font-medium leading-none text-center uppercase text-slate-100'>
                        {data.genres.map((genre) => (
                            <div
                                key={genre}
                                className='px-3 py-1 border rounded-md bg-zinc-700 border-zinc-300'>
                                <p>{genre}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameSummary;
