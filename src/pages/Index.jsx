import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import MarketingStepButton from '@/components/MarketingStepButton';
import MarketingStepInfo from '@/components/MarketingStepInfo';

const marketingSteps = [
  { number: '01', title: 'Market Research', color: 'bg-red-300', description: 'Conduct thorough market research to understand your target audience, competitors, and industry trends.' },
  { number: '02', title: 'Competitive Analysis', color: 'bg-yellow-300', description: 'Analyze your competitors to identify their strengths, weaknesses, and market positioning.' },
  { number: '03', title: 'Identify Target Audiences', color: 'bg-green-300', description: 'Define and segment your target audiences based on demographics, psychographics, and behavior.' },
  { number: '04', title: 'Set Goals and Objectives', color: 'bg-red-300', description: 'Establish clear, measurable, and time-bound marketing goals aligned with your business objectives.' },
  { number: '05', title: 'Define Specific Strategies and Tactics', color: 'bg-yellow-300', description: 'Develop detailed strategies and tactics to reach your target audience and achieve your goals.' },
  { number: '06', title: 'Determine Evaluation Methods', color: 'bg-green-300', description: 'Set up metrics and methods to evaluate the effectiveness of your marketing efforts.' },
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <AnimatePresence>
        {!isExpanded ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Button
              onClick={handleCentralButtonClick}
              className="rounded-full text-lg font-bold p-8"
            >
              6 Steps To An Effective Marketing Plan
            </Button>
          </motion.div>
        ) : (
          <>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-8"
            >
              6 Steps To An Effective Marketing Plan
            </motion.h1>
            <div className="relative w-80 h-80 mb-8">
              {marketingSteps.map((step, index) => (
                <MarketingStepButton
                  key={step.number}
                  step={step}
                  index={index}
                  onClick={() => handleStepClick(step)}
                  isSelected={selectedStep === step}
                />
              ))}
            </div>
            <AnimatePresence>
              {selectedStep && (
                <MarketingStepInfo step={selectedStep} />
              )}
            </AnimatePresence>
            <Button onClick={handleReset} className="mt-4">
              Reset
            </Button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
