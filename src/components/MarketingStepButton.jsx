import { motion } from 'framer-motion';
import PetalSVG from './PetalSVG';

const MarketingStepButton = ({ step, index, onClick, isSelected, isExpanded }) => {
  const angle = (index * 60 * Math.PI) / 180;
  const x = Math.cos(angle) * 150;
  const y = Math.sin(angle) * 150;

  return (
    <motion.div
      initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
      animate={{ 
        scale: isExpanded ? 1 : 0, 
        x: isExpanded ? x : 0, 
        y: isExpanded ? y : 0, 
        opacity: isExpanded ? 1 : 0 
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`w-32 h-48 relative cursor-pointer ${isSelected ? 'z-10' : 'z-0'}`}
      >
        <PetalSVG color={step.color} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="text-lg font-bold">{step.number}</span>
          <span className="text-xs mt-1 px-2 text-center">{step.title}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MarketingStepButton;
