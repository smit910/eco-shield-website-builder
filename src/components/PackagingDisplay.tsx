
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

// This component will simulate a 3D display using CSS transforms
const PackagingDisplay = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rotateX = 15;
    let rotateY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    // Mouse events for rotation
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      // Calculate rotation based on mouse movement
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      rotateY += deltaX * 0.5;
      rotateX -= deltaY * 0.5;
      
      // Clamp rotateX to prevent flipping
      rotateX = Math.max(-30, Math.min(30, rotateX));
      
      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      startX = e.clientX;
      startY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Add mouse event listeners
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Auto rotation for non-interactive state
    let animationId: number;
    let autoRotate = true;

    const animate = () => {
      if (autoRotate) {
        rotateY += 0.2;
        container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Stop auto rotation when interacting
    container.addEventListener('mouseenter', () => {
      autoRotate = false;
    });

    container.addEventListener('mouseleave', () => {
      autoRotate = true;
    });

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div 
        ref={containerRef} 
        className="relative w-[280px] h-[280px] cursor-grab active:cursor-grabbing transition-transform duration-200 transform perspective-1000 preserve-3d"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {/* Bottom foam */}
        <div 
          className="absolute w-[280px] h-[280px] bg-eco-green-light rounded-lg transform translate-z-[-25px]"
          style={{ transform: "translateZ(-25px)", boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}
        >
          {/* Create foam texture with dots */}
          <div className="w-full h-full p-2">
            <div className="w-full h-full bg-eco-green-light relative overflow-hidden rounded">
              {Array.from({ length: 100 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white opacity-30"
                  style={{ 
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                />
              ))}
              {/* Center cutout for device */}
              <div 
                className="absolute bg-eco-green-light rounded-lg transform-gpu shadow-inner"
                style={{ 
                  top: "50%", 
                  left: "50%", 
                  width: "150px",
                  height: "220px",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.15)"
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Phone device */}
        <div 
          className="absolute bg-gray-800 rounded-xl border-4 border-gray-900 transform-gpu"
          style={{ 
            top: "50%", 
            left: "50%", 
            width: "130px",
            height: "200px",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)"
          }}
        >
          {/* Phone screen */}
          <div className="w-full h-[170px] bg-blue-100 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white">
              <span className="text-xs">EcoShield</span>
            </div>
          </div>
          {/* Phone button */}
          <div className="w-10 h-10 rounded-full bg-gray-700 mx-auto mt-1 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gray-600"></div>
          </div>
        </div>
        
        {/* Top foam - slightly transparent to see the phone */}
        <div 
          className="absolute w-[280px] h-[280px] bg-eco-green-light rounded-lg transform translate-z-[25px] opacity-90"
          style={{ transform: "translateZ(25px)", boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}
        >
          {/* Create foam texture with dots */}
          <div className="w-full h-full p-2">
            <div className="w-full h-full bg-eco-green-light relative overflow-hidden rounded">
              {Array.from({ length: 100 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white opacity-30"
                  style={{ 
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                />
              ))}
              {/* Center cutout for device */}
              <div 
                className="absolute bg-eco-green-light rounded-lg transform-gpu shadow-inner"
                style={{ 
                  top: "50%", 
                  left: "50%", 
                  width: "150px",
                  height: "220px",
                  transform: "translate(-50%, -50%)",
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.15)"
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Animated text to draw attention */}
        {!isMobile && (
          <div 
            className="absolute text-sm text-white bg-eco-green px-2 py-1 rounded-md animate-float"
            style={{ top: "-40px", left: "50%", transform: "translateX(-50%)" }}
          >
            Drag to rotate
          </div>
        )}
      </div>
    </div>
  );
};

export default PackagingDisplay;
