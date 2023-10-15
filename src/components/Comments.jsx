const Comments = () => {
    return (
        <div className='flex flex-col gap-10'>
            <p className='text-xl'>Коментарії та відгуки</p>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-20'>
                        <div className='flex items-center gap-2'>
                            <img
                                className='w-10 h-10 rounded-full'
                                src='/assets/photo.jpg'
                            />
                            <p className='font-bold'>Michael</p>
                        </div>
                        <div className='flex gap-1'>
                            <img src='/assets/star-full.svg' alt='star' />
                            <img src='/assets/star-full.svg' alt='star' />
                            <img src='/assets/star-full.svg' alt='star' />
                            <img src='/assets/star-empty.svg' alt='star' />
                            <img src='/assets/star-empty.svg' alt='star' />
                        </div>
                    </div>
                    <form className='flex flex-col w-4/5 gap-5 ml-auto'>
                        <textarea
                            className='w-full h-24 px-4 py-3 text-xs leading-tight bg-opacity-50 border border-opacity-50 rounded-lg placeholder-slate-200 bg-slate-300 border-slate-300'
                            placeholder='Поділися своїм враженням про гру...'
                            value='Поділися своїм враженням про гру...'
                        />
                        <button
                            type='submit'
                            className='py-2 border rounded-lg w-60 px-9 border-sky-400'>
                            Додати коментар
                        </button>
                    </form>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-5'>
                        <div className='flex gap-2'>
                            <img
                                className='w-10 h-10 rounded-full'
                                src='/assets/photoa.jpg'
                            />
                            <div className='flex flex-col gap-2'>
                                <p className='font-bold'>Adam76</p>
                                <div className='flex gap-1'>
                                    <img
                                        className='w-3'
                                        src='/assets/star-full.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-full.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-full.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-empty.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-empty.svg'
                                        alt='star'
                                    />
                                </div>
                            </div>
                        </div>
                        <p className='w-4/5 ml-auto text-xs'>
                            Я люблю Відьмак 3, але тільки якщо прибрати з гри
                            вплив Цирі. Ось, ну не полюбив я її, ось і все.
                            Вважай вся книжкова сага була про неї, а тепер і
                            майже весь сюжет третьої частини. Гра гарна, але
                            Цирі дуже сильно вбиває її, вже вибачте.
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex gap-2'>
                            <img
                                className='w-10 h-10 rounded-full'
                                src='/assets/photon.jpg'
                            />
                            <div className='flex flex-col gap-2'>
                                <div className='font-bold'>Norbert</div>
                                <div className='flex gap-1'>
                                    <img
                                        className='w-3'
                                        src='/assets/star-full.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-full.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-full.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-empty.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-empty.svg'
                                        alt='star'
                                    />
                                </div>
                            </div>
                        </div>
                        <p className='w-4/5 ml-auto text-xs'>
                            Практично ідеальна рпг, яка задала планку якості на
                            15 років вперед. Поки що ми можемо бачити те, що
                            досі нікому не вдалося навіть наблизитися до
                            настільки сильної гри. Були жалюгідні потуги
                            асасинів, але нікому це поки не під силу.
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex gap-2'>
                            <img
                                className='w-10 h-10 rounded-full'
                                src='/assets/photom.jpg'
                            />
                            <div className='flex flex-col gap-2'>
                                <div className='font-bold'>Michael3</div>
                                <div className='flex gap-1'>
                                    <img
                                        className='w-3'
                                        src='/assets/star-full.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-full.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-empty.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-empty.svg'
                                        alt='star'
                                    />
                                    <img
                                        className='w-3'
                                        src='/assets/star-empty.svg'
                                        alt='star'
                                    />
                                </div>
                            </div>
                        </div>
                        <p className='w-4/5 ml-auto text-xs'>
                            У світі відьмака настільки все добре гармонує одне з
                            одним, що занурюєшся в нього всією душею. Особливо
                            хочеться відзначити чудовий звуковий супровід у грі.
                            команда, яка працювала над ним, - великі молодці. у
                            кожній локації є своя звукова доріжка, яка прямо
                            таки передає настрій кожної місцевості.
                        </p>
                    </div>
                    <button className='py-2 ml-48 border rounded-lg w-60 px-9 border-sky-400'>
                        Розгорнути всі (23)
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Comments;
