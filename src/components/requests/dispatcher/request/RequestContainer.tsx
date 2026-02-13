import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export const RequestContainer = ({ container, indexc }) => {
    const shadowX = useMotionValue(0);
    const shadowY = useMotionValue(0);
    const shadowOpacity = useMotionValue(0);
  
    const springShadowX = useSpring(shadowX, { stiffness: 80, damping: 20 });
    const springShadowY = useSpring(shadowY, { stiffness: 80, damping: 20 });
    const springShadowOpacity = useSpring(shadowOpacity, { stiffness: 80, damping: 20 });
  
    const boxShadow = useMotionTemplate`
      ${springShadowX}px 
      ${springShadowY}px 
      19px 
      0px
      rgba(93, 101, 255, ${springShadowOpacity})
    `;
  
    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const posX = e.clientX - rect.left;
      const posY = e.clientY - rect.top;
  
      const relX = posX / rect.width - 0.5;
      const relY = posY / rect.height - 0.5;
  
      shadowX.set(relX * 20);
      shadowY.set(relY * 20);
      shadowOpacity.set(0.5);
    };
  
    const handleLeave = () => {
      shadowX.set(0);
      shadowY.set(0);
      shadowOpacity.set(0);
    };
  
    return (
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ boxShadow }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          type: "spring",
          delay: 0.2 * indexc,
        }}
        className={container.class}
      >
        <h3 className="title">{container.title}</h3>
  
        {container.points.map((point, index) => (
          <motion.div
            key={point.id}
            className="point-container"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              delay: 0.2 * indexc + index * 0.1,
            }}
          >
            <label className="label">{point.label}</label>
            <textarea
              className={`textarea textarea-${container.id}-${point.id}`}
              placeholder={point.placeholder}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  };
  