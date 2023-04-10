'use client';

import { motion, useCycle } from 'framer-motion';
import React, { useState } from 'react';

import { MenuToggle } from './MenuToggle';
import styles from './styles.module.css';

type Props = {};

const sidebar = {
  open: (height = 1000, width) => ({
    clipPath: `circle(${height * 2 + 300}px at calc(100vw - 20px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(20px at calc(100vw - 40px) 40px)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };
  return (
    <header className="header bg-green-500">
      <div className="nav-header">
        <div className="justify-end bg-green-400 lg:hidden">
          <motion.nav animate={isOpen ? 'open' : 'closed'} className="z-10 ">
            <motion.div
              className={` z-10  ${styles.background}`}
              variants={sidebar}
            >
              {/* <Navigation /> */}
            </motion.div>

            <MenuToggle
              toggle={() => {
                toggleOpen();
                onToggleNav();
              }}
            />
          </motion.nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
