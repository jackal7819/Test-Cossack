import Card from './Card';

const Similar = ({data }) => {
    if (window.innerWidth > 1175) {
        data.similarGames.length = 3;
    }

    return (
        <div className='flex flex-col gap-10 text-slate-100' id='bestsellers'>
            <div className='flex items-center gap-2 m-auto'>
                <h2 className='text-2xl uppercase text-sky-300'>Схожі ігри</h2>
                <img src='/assets/bigger.svg' alt='bigger' className='hidden'/>
            </div>
            <div className='flex flex-wrap items-center justify-center gap-5'>
                {data.similarGames.map((game) => (
                    <Card key={game.id} {...game} />
                ))}
            </div>
        </div>
    );
};

export default Similar;
