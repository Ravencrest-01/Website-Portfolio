'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from 'framer-motion';
import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/utils';

const DOCK_DIMENSION = 128; // Max expansion
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_SIZE = 64;

type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number; // Kept for API compatibility, treated as panelSize
  magnification?: number;
  spring?: SpringOptions;
  direction?: 'horizontal' | 'vertical'; // New prop
};
type DockItemProps = {
  className?: string;
  children: React.ReactNode;
};
type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};
type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

type DocContextType = {
  mousePos: MotionValue; // Renamed from mouseX
  spring: SpringOptions;
  magnification: number;
  distance: number;
  direction: 'horizontal' | 'vertical';
};
type DockProviderProps = {
  children: React.ReactNode;
  value: DocContextType;
};

const DockContext = createContext<DocContextType | undefined>(undefined);

function DockProvider({ children, value }: DockProviderProps) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error('useDock must be used within an DockProvider');
  }
  return context;
}

function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_SIZE,
  direction = 'horizontal', // Default to horizontal
}: DockProps) {
  const mousePos = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxDimension = useMemo(() => {
    return Math.max(DOCK_DIMENSION, magnification + magnification / 2 + 4);
  }, [magnification]);

  const sizeRow = useTransform(isHovered, [0, 1], [panelHeight, maxDimension]);
  const size = useSpring(sizeRow, spring);

  return (
    <motion.div
      style={{
        [direction === 'vertical' ? 'width' : 'height']: size, // Animate main container dimension
        scrollbarWidth: 'none',
      }}
      className={cn(
        'mx-2 flex max-w-full overflow-x-auto', // Base
        direction === 'vertical' ? 'flex-col items-start h-full overflow-y-auto' : 'items-end'
      )}
    >
      <motion.div
        onMouseMove={({ pageX, pageY }) => {
          isHovered.set(1);
          mousePos.set(direction === 'vertical' ? pageY : pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mousePos.set(Infinity);
        }}
        className={cn(
          'mx-auto flex w-fit gap-4 rounded-2xl bg-gray-50 px-4 dark:bg-neutral-900',
          direction === 'vertical' ? 'flex-col py-4' : '',
          className
        )}
        style={{
          [direction === 'vertical' ? 'width' : 'height']: panelHeight
        }}
        role='toolbar'
        aria-label='Application dock'
      >
        <DockProvider value={{ mousePos, spring, distance, magnification, direction }}>
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  );
}

function DockItem({ children, className }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { distance, magnification, mousePos, spring, direction } = useDock();

  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mousePos, (val) => {
    const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
    const pos = direction === 'vertical' ? domRect.y : domRect.x;
    const dim = direction === 'vertical' ? domRect.height : domRect.width;
    return val - pos - dim / 2;
  });

  const sizeTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const size = useSpring(sizeTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size, // Always animate width (generic size)
        height: size // Always animate height (generic size) because circles are square
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn(
        'relative inline-flex items-center justify-center',
        className
      )}
      tabIndex={0}
      role='button'
      aria-haspopup='true'
    >
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement<any>, { width: size, isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className, ...rest }: DockLabelProps) {
  const restProps = rest as Record<string, unknown>;
  const isHovered = restProps['isHovered'] as MotionValue<number>;
  const [isVisible, setIsVisible] = useState(false);
  const { direction } = useDock();

  useEffect(() => {
    const unsubscribe = isHovered.on('change', (latest) => {
      setIsVisible(latest === 1);
    });

    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, [direction === 'vertical' ? 'x' : 'y']: 0 }}
          animate={{ opacity: 1, [direction === 'vertical' ? 'x' : 'y']: direction === 'vertical' ? 10 : -10 }}
          exit={{ opacity: 0, [direction === 'vertical' ? 'x' : 'y']: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute w-fit whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white',
            direction === 'vertical' ? 'left-full ml-2 top-1/2 -translate-y-1/2' : '-top-6 left-1/2 -translate-x-1/2',
            className
          )}
          role='tooltip'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className, ...rest }: DockIconProps) {
  const restProps = rest as Record<string, unknown>;
  const width = restProps['width'] as MotionValue<number>;

  /* 
     Adjusted widthTransform to be 60% of container instead of 50% 
     to make icons larger and more visible
  */
  const widthTransform = useTransform(width, (val) => val * 0.6);

  return (
    <motion.div
      style={{ width: widthTransform, height: widthTransform }} // Square icon
      className={cn('flex items-center justify-center', className)}
    >
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon, DockItem, DockLabel };