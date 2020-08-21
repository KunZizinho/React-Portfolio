import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import item_1 from '../Untitled_ Aug 13, 2020 5_30 PM.gif';
import item_2 from '../Untitled_ Mar 9, 2020 10_11 PM.gif';
import item_3 from '../Untitled_ Mar 9, 2020 10_14 PM.gif';
import item_4 from '../Untitled_ Mar 9, 2020 10_18 PM.gif';
import item_5 from '../Untitled_ Mar 9, 2020 10_16 PM.gif';
import item_6 from '../Untitled_ Mar 9, 2020 10_28 PM.gif';


/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export default function Portfolio() {
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 15 }} >
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  
  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} >
      <motion.div className="avatar" layout  />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row" />
      <div className="row" />
      <div className="row" />
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}

const items = [item_1, item_2, item_3, item_4, item_5, item_6];