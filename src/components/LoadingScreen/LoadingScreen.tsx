import "./styles.css"
import { useState, useEffect } from "react"

export default function LoadingScreen({ onClick, isExiting }: { onClick: () => void, isExiting: boolean }) {
    const [progress, setProgress] = useState(0)
    const [statusText, setStatusText] = useState("Initializing...")
    
    const statusMessages = [
        { progress: 10, text: "Loading modules..." },
        { progress: 25, text: "Initializing server..." },
        { progress: 40, text: "Connecting to databases..." },
        { progress: 55, text: "Building routes..." },
        { progress: 70, text: "Optimizing performance..." },
        { progress: 85, text: "Almost ready..." },
        { progress: 100, text: "Ready!" }
    ]

    useEffect(() => {
        if (isExiting) return
        
        let currentProgress = 0
        const interval = setInterval(() => {
            currentProgress += Math.random() * 3 + 1
            if (currentProgress >= 100) {
                currentProgress = 100
                clearInterval(interval)
            }
            setProgress(Math.min(currentProgress, 100))
            
            const status = statusMessages.reduce((prev, curr) => {
                return Math.abs(curr.progress - currentProgress) < Math.abs(prev.progress - currentProgress) ? curr : prev
            })
            setStatusText(status.text)
        }, 150)

        return () => clearInterval(interval)
    }, [isExiting])

    const exStyle = isExiting
        ? 'opacity-0 scale-105 blur-md pointer-events-none'
        : 'opacity-100 scale-100 blur-0'

    return (
        <div className={`fixed w-screen h-screen flex flex-col justify-center items-center bg-black ${exStyle}`}>
            <div className="container" onClick={onClick}>
                <div className="logo-masterpiece">
                    <div className="logo-pulse"></div>
                    <div className="logo-glow"></div>
                    <div className="logo-core">
                        <div className="logo-symbol">M</div>
                    </div>
                </div>
                
                <div className="loading-content">
                    <div className="status-text">{statusText}</div>
                    
                    <div className="progress-bar-container">
                        <div 
                            className="progress-bar" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    
                    <div className="progress-percentage">{Math.round(progress)}%</div>
                </div>
                
                <div className="skip-hint">
                    <span>click to skip</span>
                </div>
            </div>
        </div>
    )
}