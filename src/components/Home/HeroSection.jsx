import React from 'react';
import RotatingText from '../RotatingText';
import SpotlightCard from '../SpotlightCard';
import AnimatedContent from '../AnimatedContent';

const HeroSection = () => {
    return (
        <div className="mt-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 text-black">
            {/* Titolo principale */}
            <div className="max-w-4xl">
                <h1 className="mb-6 text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-semibold leading-tight">
                    Scopri come <strong className="font-extrabold">YourFriends</strong> può fare la differenza nella vita dei tuoi cari e nella tua tranquillità.
                </h1>

                {/* Rotating text */}
                <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        YourFriends
                    </span>
                    <div className="inline-block transform">
                        <RotatingText
                            texts={['Protegge', 'Aiuta', 'Rassicura!']}
                            mainClassName="inline-flex items-center w-fit rounded-full bg-[#5227ff] text-white overflow-hidden px-5 py-2 text-xl md:text-2xl lg:text-3xl font-bold shadow-md"
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
            </div>

            {/* Container delle card */}
            <div className="flex justify-center gap-6 w-full mt-6 px-4">
                {/* CARD 1 */}
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="expo.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.02}
                    threshold={0.2}
                    delay={0.2}
                >
                    <SpotlightCard className="w-[380px] h-full group" spotlightColor="rgba(82, 39, 255, 0.18)">
                        <div className="flex flex-col h-full p-8 rounded-2xl transition-transform transform group-hover:scale-[1.03]">
                            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Iscriviti
                            </h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                È facile e gratuito. Fornisci solo le informazioni essenziali per ricevere e inviare i messaggi "Come Stai?". L'installazione dell'app è opzionale.
                            </p>
                        </div>
                    </SpotlightCard>
                </AnimatedContent>

                {/* CARD 2 */}
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="expo.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.02}
                    threshold={0.2}
                    delay={0.4}
                >
                    <SpotlightCard className="w-[380px] h-full group" spotlightColor="rgba(82, 39, 255, 0.18)">
                        <div className="flex flex-col h-full p-8 rounded-2xl transition-transform transform group-hover:scale-[1.03]">
                            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Scegli i tuoi Friends
                            </h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                Crea la tua cerchia di fiducia: amici che accettano di far parte della tua 'tribù' e che verranno avvisati se non rispondi a un "Come Stai?".
                            </p>
                        </div>
                    </SpotlightCard>
                </AnimatedContent>

                {/* CARD 3 */}
                <AnimatedContent
                    distance={150}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="expo.out"
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.02}
                    threshold={0.2}
                    delay={0.6}
                >
                    <SpotlightCard className="w-[380px] h-full group" spotlightColor="rgba(82, 39, 255, 0.18)">
                        <div className="flex flex-col h-full p-8 rounded-2xl transition-transform transform group-hover:scale-[1.03]">
                            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Programma i tuoi "Come Stai?"
                            </h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                Scegli quando i tuoi Friends devono controllare come stai e con quale canale (App, WhatsApp, SMS...). Se non rispondi, verranno avvisati.
                            </p>
                        </div>
                    </SpotlightCard>
                </AnimatedContent>
            </div>
        </div>
    );
};

export default HeroSection;
