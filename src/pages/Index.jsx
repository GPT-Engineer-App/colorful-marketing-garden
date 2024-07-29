import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MarketingStepButton from '@/components/MarketingStepButton';
import MarketingStepInfo from '@/components/MarketingStepInfo';

const marketingSteps = [
  { number: '01', title: 'Market Research', color: '#E57373', description: 'Conduct thorough market research to understand your target audience, competitors, and industry trends.' },
  { number: '02', title: 'Competitive Analysis', color: '#FFB74D', description: 'Analyze your competitors to identify their strengths, weaknesses, and market positioning.' },
  { number: '03', title: 'Identify Target Audiences', color: '#81C784', description: 'Define and segment your target audiences based on demographics, psychographics, and behavior.' },
  { number: '04', title: 'Set Goals and Objectives', color: '#64B5F6', description: 'Establish clear, measurable, and time-bound marketing goals aligned with your business objectives.' },
  { number: '05', title: 'Define Strategies and Tactics', color: '#BA68C8', description: 'Develop detailed strategies and tactics to reach your target audience and achieve your goals.' },
  { number: '06', title: 'Determine Evaluation Methods', color: '#4DB6AC', description: 'Set up metrics and methods to evaluate the effectiveness of your marketing efforts.' },
];

const Index = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const handleCentralButtonClick = () => {
    setIsExpanded(true);
  };

  const handleStepClick = (step) => {
    setSelectedStep(step);
  };

  const handleReset = () => {
    setIsExpanded(false);
    setSelectedStep(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="relative w-[400px] h-[400px]">
        <motion.div
          initial={false}
          animate={{
            width: isExpanded ? 400 : 200,
            height: isExpanded ? 400 : 200,
          }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <motion.button
            onClick={handleCentralButtonClick}
            className="w-full h-full rounded-full bg-white shadow-lg flex flex-col items-center justify-center text-center p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-semibold">6 STEPS</span>
            <span className="text-lg font-bold">To An Effective Marketing Plan</span>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <>
              {marketingSteps.map((step, index) => (
                <MarketingStepButton
                  key={step.number}
                  step={step}
                  index={index}
                  onClick={() => handleStepClick(step)}
                  isSelected={selectedStep === step}
                  isExpanded={isExpanded}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 w-full max-w-md"
          >
            <MarketingStepInfo step={selectedStep} />
          </motion.div>
        )}
      </AnimatePresence>

      {isExpanded && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="mt-4 px-4 py-2 bg-gray-200 rounded-full text-sm font-semibold hover:bg-gray-300 transition-colors"
        >
          Reset
        </motion.button>
      )}
    </div>
  );
};

export default Index;
