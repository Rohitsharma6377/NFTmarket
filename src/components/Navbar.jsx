import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/logo.png"
              alt="Logo"
              className="h-12"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/marketplace">NFT Marketplace</NavLink>
            <NavLink to="/tokens">Tokens</NavLink>
            <NavLink to="/claims">Daily Claims</NavLink>
            <ConnectButton />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children }) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Link
      to={to}
      className="text-white hover:text-primary-500 transition-colors duration-300"
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar; 