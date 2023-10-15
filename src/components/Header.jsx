import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header
            className='flex items-center justify-between px-5 xl:px-20 py-2 bg-black max-w-[1440px] h-14 bg-opacity-100 gap-5 xl:gap-80 m-auto text-slate-100'
            id='header'>
            <Link className='flex items-center gap-2' to={'/'}>
                <img
                    src='/assets/logo.svg'
                    alt='logo'
                    className='border rounded-full border-slate-600'
                />
                <p className='hidden text-base leading-snug uppercase text-sky-300 sm:inline'>
                    Cossack
                </p>
            </Link>
            <div className='flex items-center justify-start gap-5 sm:gap-14'>
                <Link
                    className='text-base font-light leading-snug'
                    to={'/catalog'}>
                    Каталог
                </Link>
                <Link className='text-base leading-snug' to={'/about'}>
                    Про <span className='uppercase text-sky-300'>Cossack</span> 
                </Link>
                <Link className='text-base font-light leading-snug' to={'/faq'}>
                    FAQ
                </Link>
            </div>
            <div className='flex items-center justify-start gap-6'>
                <Link
                    className='items-center justify-center hidden gap-px '
                    to={'/profile'}>
                    <img src='/assets/heart.svg' alt='heart' />
                </Link>
                <button className='hidden px-6 py-2 rounded-lg bg-sky-600'>
                    <Link to={'/login'}>Вхід</Link>
                </button>
            </div>
        </header>
    );
};

export default Header;
