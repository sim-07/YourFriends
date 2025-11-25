import RotatingText from '../RotatingText';

const HeroSection = () => {

    return (
        <div>
            <div
                className="relative w-full min-h-[100vh] mb-0 p-0 bg-cover bg-center flex flex-col items-center justify-center text-center text-black"
                style={{ backgroundImage: "url('/images/yourfriends-slider_slide-3.jpg')" }}
            >
                <div className="max-w-4xl bg-white/25 backdrop-blur-xl rounded-xl p-8 border border-white/20">                    
                    <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
                        <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            YourFriends
                        </span>
                        <div className="w-[100px]">
                            <RotatingText
                                texts={['Protegge', 'Aiuta', 'Rassicura!']}
                                mainClassName="mt-2 inline-flex items-center w-fit rounded-full bg-[#5227ff] text-white overflow-hidden px-5 py-2 text-xl md:text-2xl lg:text-3xl font-bold shadow-md"
                                staggerFrom="last"
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '-120%' }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                                
                            />
                        </div>
                    </div>

                    <h1 className="mb-6 text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-semibold leading-tight" >
                        Scopri come <strong className="font-extrabold">YourFriends</strong> può fare la differenza nella vita dei tuoi cari e nella tua tranquillità.
                    </h1>
                </div>

            </div>
        </div>


    );
};

export default HeroSection;