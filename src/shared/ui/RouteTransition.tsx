import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export default function RouteTransition({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      // Optional 확장(나중에 원하면)
      // initial={{ opacity: 0, y: 6 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: -4 }}
    >
      {children}
    </motion.div>
  );
}
