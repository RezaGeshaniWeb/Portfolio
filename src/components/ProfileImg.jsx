import myImg from '../assets/me5.webp'

export default function ProfileImg() {
    return (
        <figure className='w-[70%] sm:w-[350px] h-[380px] lg:w-[280px] lg:h-[330px] border-4 border-b-0 border-light rounded-tr-[45px] overflow-hidden relative'>
            <img src={myImg} alt="my picture" className='w-full h-full object-cover object-top' />
            <div className='absolute bottom-0 left-0 w-full h-24 bg-linear'></div>
        </figure>
    )
}