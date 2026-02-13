import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export const MenuButton = ({ item, shadowColor = "rgba(178, 77, 255,", shadowBlur = 19, thirdText = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 80, damping: 15 });
  const springY = useSpring(y, { stiffness: 80, damping: 15 });

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springTiltX = useSpring(tiltX, { stiffness: 120, damping: 20 });
  const springTiltY = useSpring(tiltY, { stiffness: 120, damping: 20 });

  const shadowX = useMotionValue(0);
  const shadowY = useMotionValue(0);
  const shadowOpacity = useMotionValue(0);

  const springShadowX = useSpring(shadowX, { stiffness: 80, damping: 20 });
  const springShadowY = useSpring(shadowY, { stiffness: 80, damping: 20 });
  const springShadowOpacity = useSpring(shadowOpacity, { stiffness: 80, damping: 20 });

  const boxShadow = useMotionTemplate`
    ${springShadowX}px 
    ${springShadowY}px 
    ${shadowBlur}px 
    0px
    ${shadowColor} ${springShadowOpacity})
  `;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    const relX = posX / rect.width - 0.5;
    const relY = posY / rect.height - 0.5;

    x.set(relX * 30);
    y.set(relY * 30);

    tiltX.set(relY * -30);
    tiltY.set(relX * 30);

    shadowX.set(relX * 20);
    shadowY.set(relY * 20);
    shadowOpacity.set(0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    tiltX.set(0);
    tiltY.set(0);

    shadowX.set(0);
    shadowY.set(0);
    shadowOpacity.set(0);
  };

  return (
    <motion.a
      whileTap={{ scale: 0.9 }}
      initial={item.initial}
      animate={item.animate}
      transition={{
        duration: 0.7,
        type: "spring",
        delay: item.delay,
      }}
      href={item.path}
      className={item.class}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: springTiltX,
        rotateY: springTiltY,
        transformStyle: "preserve-3d",
        boxShadow,
      }}
    >
      <motion.img
        className="img"
        src={item.img}
        draggable={false}
        style={{ x: springX, y: springY }}
      />

      <div className="text-container">
        <p className="text">{item.textFirst}</p>
        <p className="text">{item.textSecond}</p>
        {thirdText && <p className="text">{item.textThird}</p>}
      </div>
    </motion.a>
  );
};
