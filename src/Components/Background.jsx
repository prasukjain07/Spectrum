import React, { useEffect, useRef } from 'react';
import '../css/Hero.css';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let hue = 0;
        let time = 0;
        let animationFrameId;

        function updateCanvasColors(timestamp) {
            const deltaTime = timestamp - time;
            time = timestamp;

            // Calculate hue based on time
            hue += 0.1 * deltaTime / 3; // Adjust speed as needed

            // Wrap hue value within 360 degrees
            if (hue > 360) {
                hue -= 360;
            }

            // Create a gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, `hsl(${hue}, 60%, 20%)`);
            gradient.addColorStop(0.2, `hsl(${hue + 20}, 60%, 20%)`);
            gradient.addColorStop(0.4, `hsl(${hue + 40}, 60%, 20%)`);
            gradient.addColorStop(0.6, `hsl(${hue + 60}, 60%, 20%)`);
            gradient.addColorStop(0.8, `hsl(${hue + 80}, 60%, 20%)`);
            gradient.addColorStop(1, `hsl(${hue + 100}, 60%, 20%)`); // Adjust the angle of the gradient

            // Set canvas fill style to the gradient
            ctx.fillStyle = gradient;

            // Fill the entire canvas with the gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Request next animation frame
            animationFrameId = requestAnimationFrame(updateCanvasColors);
        }

        // Start the animation loop
        animationFrameId = requestAnimationFrame(updateCanvasColors);

        // Clean up function
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="landing-container">
            {/* Set canvas dimensions */}
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} style={{ top: 0, left: 0, zIndex: -1 }}></canvas>
            

        </div>
    );
};

export default Background;
