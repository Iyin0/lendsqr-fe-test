import { motion } from "framer-motion";

interface transitionProps {
    children: React.ReactNode
}

const PageTransition = ({ children }: transitionProps) => {

    const animationConfiguration = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;