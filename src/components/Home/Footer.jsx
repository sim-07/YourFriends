import React from 'react';
import logo from '../../assets/logo.svg';

export default function App() {
    return (
        <footer className="bg-white dark:bg-black">
            <div className="mx-auto w-full max-w-screen-xl py-3 lg:py-4 px-6">


                <div className="absolute mt-[10px]">
                    <img src={logo} className="h-10" alt="YourFriends Logo" />
                </div>

                <div className="flex flex-col md:flex-row justify-center text-left gap-12 mt-10">

                    <div className="text-gray-700 dark:text-gray-300 text-sm leading-6 max-w-xs">
                        <h2 className="text-lg font-semibold dark:text-white">
                            Contatti
                        </h2>

                        <p>
                            Via Don Bosco, 30<br />
                            14021 Buttigliera d'Asti (AT)
                        </p>

                        <p className="mt-3">
                            Email:{" "}
                            <a
                                href="mailto:info@yourfriends.cloud"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                info@yourfriends.cloud
                            </a>
                        </p>
                    </div>

                    <div className="text-gray-700 dark:text-gray-300 text-sm leading-6 max-w-xs">
                        <h2 className="text-lg font-semibold mb-2 dark:text-white">
                            Azienda
                        </h2>

                        <p>YourFriends S.r.l.</p>
                        <p>SIAVS unipersonale</p>

                        <p className="mt-3">
                            P.IVA: <strong>IT01729890051</strong>
                        </p>
                    </div>

                </div>

                <hr className="my-8 border-gray-300 dark:border-gray-700" />

                {/* Copyright */}
                <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} YourFriends S.r.l. — Tutti i diritti riservati.
                </div>

            </div>
        </footer>
    );
}
