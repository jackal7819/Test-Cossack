import '../index.css';

import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const isWideScreen = window.innerWidth >= 1280;
    
    return (
        <div className='bg-footer max-w-[1440px] m-auto'>
            <div className={`flex items-center justify-center bg-black bg-opacity-50 ${isWideScreen ? 'h-screen-minus-menu' : ''}`}>
                <div className='flex flex-col items-center gap-3 px-5 text-center bg-opacity-50 py-14 rounded-3xl align-items-center lg:px-28 text-slate-100'>
                    <h1 className='text-2xl font-semibold'>ХТО МИ?</h1>
                    <p>Команда розробників сайту ігор української локалізації!</p>
                    <p>Ми група професіоналів-початківців, які працюють над створенням та удосконаленням веб-платформи для україномовних гравців з усього світу.</p>
                    <p>Наша місія – популяризація україномовного геймінгу.</p>
                    <p>Наша мета – забезпечити доступ до якісних ігор та геймінгового контенту українською мовою.</p>
                    <p>Ми розуміємо важливість інтуїтивного і зручного інтерфейсу, ефективної ігрової функціональності для української аудиторії.</p>
                    <p>Саме тому наша команда зосередила особливу увагу на налаштуванні функцій, що забезпечують зручну навігацію, пошук та фільтрацію ігор.</p>
                    <p>Крім того, нами забезпечено можливість реєстрації користувачів та налаштування функціоналу особистих профілів, який дозволяє гравцям зберігати свої побажання, залишати коментарі та власні огляди.</p>
                    <p>Наша команда:</p>
                    <p>Designer - Ганна Дербеньова</p>
                    <p>Back End - Олександр Нагленко</p>
                    <p>Front End - Віктор Філіппов</p>
                    <p>QA - Наталя Карасюк</p>
                    <p>Project manager - Тетяна Файчук</p>
                </div>
            </div>
        </div>
    );
};

export default About;