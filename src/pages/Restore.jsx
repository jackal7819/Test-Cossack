import '../index.css';

const Restore = () => {
    return (
        <div className='bg-footer max-w-[1440px] m-auto'>
            <div className='flex items-center justify-center bg-black bg-opacity-50 h-screen-minus-menu '>
                <div className='flex flex-col items-center gap-10 bg-opacity-50 py-14 rounded-3xl align-items-center bg-slate-300 px-28 text-slate-100'>
                    <div className='flex items-center justify-center gap-2 text-xl'>
                        <p>Відновлення паролю</p>
                    </div>
                    <form className='space-y-8 w-72'>
                        <div>
                            <label className='block mb-1' htmlFor='password'>
                                Код з листа
                            </label>
                            <input
                                type='password'
                                id='password'
                                className='w-full px-4 py-3 border rounded-lg text-slate-400'
                                placeholder='Введіть код'
                            />
                        </div>
                        <button
                            className='w-full px-4 py-3 rounded-lg bg-sky-400'
                            type='submit'>
                            Відправити код
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Restore;