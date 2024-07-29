import { motion } from 'framer-motion';
import PetalSVG from './PetalSVG';

const MarketingStepButton = ({ step, index, onClick, isSelected, isExpanded }) => {
  const finalRotation = -180 + index * 60;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ 
        scale: isExpanded ? 1 : 0, 
        opacity: isExpanded ? 1 : 0,
        rotate: isExpanded ? finalRotation : -180
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: isExpanded ? index * 0.3 : (5 - index) * 0.3,
      }}
      style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        width: '32rem', // Twice the button width to account for the radius
        height: '32rem', // Twice the button height to account for the radius
        transform: `translate(-50%, -50%) rotate(${finalRotation}deg)`,
        transformOrigin: 'center center'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`w-32 h-32 absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer ${isSelected ? 'z-10' : 'z-0'}`}
        style={{
          transform: `translateX(-50%) rotate(${-finalRotation}deg)`, // Counter-rotate the button
        }}
      >
        <PetalSVG color={step.color} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-xl font-bold">{step.number}</span>
          <span className="text-sm mt-1 px-2 text-center">{step.title}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MarketingStepButton;
