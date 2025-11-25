import React from 'react';
import RotatingText from '../RotatingText';
import SpotlightCard from '../SpotlightCard';
import AnimatedContent from '../AnimatedContent';

const HeroSection = () => {
    const cards = [
        {
            title: "Iscriviti",
            descr: "È facile e gratuito. Fornisci solo le informazioni essenziali per ricevere e inviare i messaggi \"Come Stai?\"",
        },
        {
            title: "Scegli i tuoi Friends",
            descr: "Crea la tua cerchia di fiducia: amici che accettano di far parte della tua 'tribù' e che verranno avvisati se non rispondi a un \"Come Stai?\".",
        },
        {
            title: "Programma i tuoi \"Come Stai?\"",
            descr: "Scegli quando i tuoi Friends devono controllare come stai e con quale canale (App, WhatsApp, SMS...). Se non rispondi, verranno avvisati.",
        },
    ]

    return (
        <div className="mt-4 min-h-screen flex flex-col items-center justify-center text-center px-6 py-12 text-black">

            <div className="w-[100vw] flex justify-center items-center">
                {/* Container delle card */}
                <div className="flex flex-col min-[890px]:flex-row justify-center items-stretch gap-6 max-[920px]:gap-2 mt-6 px-4 max-w-[1200px]">
                    {cards.map((card, index) => (
                        <AnimatedContent
                            key={index}
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            duration={1.2}
                            ease="expo.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.02}
                            threshold={0.05}
                            delay={0.05 + index * 0.05}
                        >
                            <SpotlightCard
                                className="flex-1 min-w-[280px] max-w-[380px] h-[480px] group"
                                spotlightColor="rgba(82, 39, 255, 0.18)"
                            >
                                <div className="flex flex-col h-full p-7 lg:p-8 md:p-7 rounded-2xl transition-transform transform group-hover:scale-[1.03]">
                                    <h3 className="text-3xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-300 text-base leading-relaxed">{card.descr}</p>
                                </div>
                            </SpotlightCard>
                        </AnimatedContent>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default HeroSection;