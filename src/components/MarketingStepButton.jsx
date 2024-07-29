import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MarketingStepButton = ({ step, index, onClick, isSelected }) => {
  const angle = (index * 60 * Math.PI) / 180;
  const x = Math.cos(angle) * 120;
  const y = Math.sin(angle) * 120;

  return (
    <motion.div
      initial={{ scale: 0, x: 0, y: 0 }}
      animate={{ scale: 1, x, y }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: index * 0.1,
      }}
      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <Button
        onClick={onClick}
        className={`rounded-full w-20 h-20 ${step.color} text-black font-bold flex flex-col items-center justify-center transition-transform ${
          isSelected ? 'scale-110' : ''
        }`}
      >
        <span className="text-xs">{step.number}</span>
        <span className="text-[8px] mt-1 px-1 text-center">{step.title}</span>
      </Button>
    </motion.div>
  );
};

export default MarketingStepButton;
