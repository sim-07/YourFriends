import React from 'react';
import CardNav from '../CardNav';
import HeroSection from './HeroSection.jsx';
import logo from '../../assets/logo.svg';

export default function App() {
  const items = [
    {
      label: "Su di noi",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Contattaci", ariaLabel: "Contattaci" },
        { label: "Scopri la guida di YourFriends", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Scopri di più",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Come si usa YourFriends?", ariaLabel: "Featured Projects" },
        { label: "Per chi è pensato YourFriends?", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Area Personale",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Accedi", ariaLabel: "Email us" },
        { label: "Registrati", ariaLabel: "Twitter" },
        { label: "Che dati raccogliamo?", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <>
      <CardNav
        //style={{ maxWidth: "100vw" }}
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="transparent"
        menuColor="#000"
        buttonBgColor="#5227ff"
        buttonTextColor="#fff"
        ease="power3.out"
        className="glass-nav"
        
      />

      <HeroSection />
    </>
  );
}
