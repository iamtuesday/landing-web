import { cn } from '@/lib/utils'

export const WaveSkeleton = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
	return (
		<span className={cn('inline-block  min-h-[1rem] rounded-lg relative overflow-hidden bg-[#DDDBDD] ', className)}>
			<style>
				{`
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }

          .WaveSkeleton::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transform: translateX(-100%);
            animation: shimmer 4s infinite;
            background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0,
              rgba(255, 255, 255, 0.2) 20%,
              rgba(255, 255, 255, 0.5) 60%,
              rgba(255, 255, 255, 0) 100%
            );
          }
        `}
			</style>
			{children}
			<span className="WaveSkeleton"></span>
		</span>
	)
}
