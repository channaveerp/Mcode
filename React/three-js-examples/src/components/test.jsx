import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Test() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 0.5], ["1%", "-55%"]);
  return (
    //     <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
    //     <div className="sticky top-0 flex h-screen items-center overflow-hidden">
    //       <motion.div style={{ x }} className="flex gap-4">
    //         {cards.map((card) => {
    //           return <Card card={card} key={card.id} />;
    //         })}
    //       </motion.div>
    //     </div>
    //   </section>
    <div className='test_component'>
      <div className='div1'></div>
      <div className='div1'></div>
      <div className='div1'></div>
      <div className='div1'></div>
      <div ref={targetRef} className='div2'>
        <div className='div20'>
          <motion.div style={{ x }} className='motionDiv'>
            <div className='div21'>1</div>
            <div className='div21'>2</div>
            <div className='div21'>3</div>
            <div className='div21'>4</div>
            <div className='div21'>5</div>
            <div className='div21'>6</div>
          </motion.div>
        </div>
      </div>
      <div className='div1'></div>
    </div>
  );
}
