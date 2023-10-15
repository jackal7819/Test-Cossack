import '../index.css';

import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='bg-footer max-w-[1440px] m-auto'>
            <div className='flex items-center justify-center bg-black bg-opacity-50 h-screen-minus-menu'>
                <div className='flex flex-col items-center gap-10 bg-opacity-50 py-14 rounded-3xl align-items-center bg-slate-300 px-28 text-slate-100'>
                    <div className='flex items-center justify-center gap-2 text-xl'>
                        <Link to={'/login'}>Вхід</Link>
                        <p>/</p>
                        <p className='underline underline-offset-8'>
                            Реєстрація
                        </p>
                    </div>
                    <form className='space-y-8 w-72'>
                        <div>
                            <label className='block mb-1' htmlFor='username'>
                                Нікнейм
                            </label>
                            <input
                                type='text'
                                id='username'
                                className='w-full px-4 py-3 border rounded-lg text-slate-400'
                                placeholder='Введіть нікнейм'
                            />
                        </div>
                        <div>
                            <label className='block mb-1' htmlFor='email'>
                                E-mail
                            </label>
                            <input
                                type='email'
                                id='email'
                                className='w-full px-4 py-3 border rounded-lg text-slate-400'
                                placeholder='Введіть пошту'
                            />
                        </div>
                        <div>
                            <label className='block mb-1' htmlFor='password'>
                                Пароль
                            </label>
                            <input
                                type='password'
                                id='password'
                                className='w-full px-4 py-3 border rounded-lg text-slate-400'
                                placeholder='Введіть пароль'
                            />
                        </div>
                        <div>
                            <label className='block mb-1' htmlFor='password'>
                                Повторіть пароль
                            </label>
                            <input
                                type='password'
                                id='password'
                                className='w-full px-4 py-3 border rounded-lg text-slate-400'
                                placeholder='Повторіть пароль'
                            />
                        </div>
                        <button
                            className='w-full px-4 py-3 rounded-lg bg-sky-400'
                            type='submit'>
                            Реєстрація
                        </button>
                        <button
                            className='flex items-center justify-center w-full gap-2 px-4 py-3 border rounded-lg border-sky-400'
                            type='button'>
                            <img src='/assets/google.svg' alt='google' />
                            <Link to={'/'}>Вхід через Google</Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
