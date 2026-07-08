interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export function Logo({ size = 40, showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        
        {/* Hexagonal C shape */}
        <path
          d="M50 5 
             C55 5, 85 22, 88 25
             C91 28, 91 32, 88 35
             C85 38, 82 36, 80 34
             C78 32, 55 18, 50 18
             C45 18, 20 32, 18 34
             C16 36, 16 64, 18 66
             C20 68, 45 82, 50 82
             C55 82, 78 68, 80 66
             C82 64, 85 62, 88 65
             C91 68, 91 72, 88 75
             C85 78, 55 95, 50 95
             C45 95, 12 75, 8 70
             C5 65, 5 35, 8 30
             C12 25, 45 5, 50 5Z"
          fill="url(#logoGradient)"
          stroke="none"
        />
        
        {/* Inner hexagon */}
        <path
          d="M50 38
             L62 45
             L62 58
             L50 65
             L38 58
             L38 45Z"
          fill="url(#innerGradient)"
          stroke="none"
        />
      </svg>

      {showText && (
        <span className="text-2xl font-bold tracking-wider font-orbitron">
          <span className="text-[#2563eb]">core</span>
          <span className="text-white">clave</span>
        </span>
      )}
    </div>
  );
}
