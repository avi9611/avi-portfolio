"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  MessageCircle,
  Github as GitHub,
  Linkedin,
  GraduationCap,
  Lightbulb,
  ScrollText,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname() ?? '/';

  const navItems = [
    { href: "/about", label: "About", icon: <User className="w-4 h-4" /> },
    { href: "/skills", label: "Skills", icon: <Lightbulb className="w-4 h-4" /> },
    { href: "/education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
    { href: "/projects", label: "Projects", icon: <Briefcase className="w-4 h-4" /> },
    { href: "/contact", label: "Contact", icon: <MessageCircle className="w-4 h-4" /> },
    { href: "/certificate", label: "Certificate", icon: <ScrollText className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { href: "https://github.com/avi9611", icon: <GitHub className="w-5 h-5" />, label: "GitHub" },
    { href: "http://linkedin.com/in/avinash-n-a99387286", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="relative group">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Avi</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div 
                key={item.href} 
                className="relative"
                onHoverStart={() => setHoveredItem(item.href)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ y: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link 
                  href={item.href} 
                  className={`relative group px-4 py-2 block ${
                    pathname === item.href || 
                    (item.href !== '/' && pathname.startsWith(item.href)) 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                  } transition-colors`}
                >
                  <motion.div 
                    className="flex items-center gap-2 relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} target="_blank" className="relative group p-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{link.icon}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800" whileTap={{ scale: 0.95 }}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-neutral-900 overflow-hidden"
          >
            <motion.div className="flex flex-col px-4 py-2">
              {navItems.map((item) => (
                <motion.div key={item.href} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-colors ${
                      pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) 
                        ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300' 
                        : 'hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <span className="p-2 rounded-lg bg-gray-100 dark:bg-neutral-800">
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              ))}

              {/* Social Links (Mobile) */}
              <motion.div className="mt-4 mb-6 px-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-neutral-800/50">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Connect with me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <Link key={index} href={link.href} target="_blank" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors">
                        {link.icon}
                        <span className="text-sm font-medium">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
