export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="8" fill="#000000"/>
      <path 
        d="M 10 50 Q 20 30, 30 50 T 50 50 Q 60 30, 70 50 T 90 50" 
        stroke="#3B82F6" 
        strokeWidth="4" 
        fill="none"
        strokeLinecap="round"
      />
      <path 
        d="M 10 50 Q 20 70, 30 50 T 50 50 Q 60 70, 70 50 T 90 50" 
        stroke="#3B82F6" 
        strokeWidth="4" 
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <line x1="20" y1="35" x2="20" y2="65" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
      <line x1="40" y1="40" x2="40" y2="60" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
      <line x1="60" y1="35" x2="60" y2="65" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
      <line x1="80" y1="40" x2="80" y2="60" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
