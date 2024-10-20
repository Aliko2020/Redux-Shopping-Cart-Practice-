import Card from '../components/Card';


const Home = () => {

    return (
        <div className='flex flex-col '>
            <div className='hidden sm:flex flex-col mt-2 text-white justify-center items-center bg-[#352b2b] h-64'>
                <h1 className='text-4xl'>Lorem ipsum dolor sit amet.</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi, molestiae odit aut quos repudiandae nemo itaque</p>
            </div>
            <Card />
        </div>
    )
}

export default Home