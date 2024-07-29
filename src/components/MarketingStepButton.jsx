import { motion } from 'framer-motion';
import PetalSVG from './PetalSVG';

const MarketingStepButton = ({ step, index, onClick, isSelected, isExpanded }) => {
  const angle = (index * 60 - 90) * (Math.PI / 180);
  const radius = 150;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ 
        scale: isExpanded ? 1 : 0, 
        opacity: isExpanded ? 1 : 0,
        rotate: isExpanded ? 0 : -180
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
        transform: `translate(-50%, -50%) rotate(${angle}rad) translateY(-150px)`,
        transformOrigin: 'center center'
      }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`w-32 h-32 relative cursor-pointer ${isSelected ? 'z-10' : 'z-0'}`}
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
