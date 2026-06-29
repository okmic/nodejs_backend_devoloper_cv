import { useEffect, useRef } from 'react'

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animationId = 0
    let isTabVisible = true
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden
      if (isTabVisible) {
        draw()
      }
    }
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }
    const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charArray = chars.split('')
    const getFontSize = () => window.innerWidth < 768 ? 10 : 14
    let fontSize = getFontSize()
    let columns = 0
    const drops: number[] = []
    const colors = [
      '#68A063',
      '#7CB873',
      '#539B4A',
      '#8FC87A',
      '#3D7A36',
      '#A8D88A',
      '#2E6B28',
      '#FFFFFF',
    ]
    let canvasWidth = 0
    let canvasHeight = 0
    const initDrops = () => {
      drops.length = 0
      canvasWidth = canvas.getBoundingClientRect().width
      canvasHeight = canvas.getBoundingClientRect().height
      columns = Math.floor(canvasWidth / fontSize)
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvasHeight / fontSize)
      }
    }
    let lastTime = 0
    const fpsInterval = 1000 / 30
    const draw = (timestamp = 0) => {
      if (!isTabVisible) return
      const elapsed = timestamp - lastTime
      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)
        ctx.font = `bold ${fontSize}px monospace`
        ctx.textAlign = 'center'
        for (let i = 0; i < drops.length; i++) {
          const char = charArray[Math.floor(Math.random() * charArray.length)]
          const colorIndex = Math.min(Math.floor(Math.random() * colors.length), colors.length - 1)
          ctx.fillStyle = colors[colorIndex]
          const x = i * fontSize + fontSize / 2
          const y = drops[i] * fontSize
          if (y > 0 && y <= canvasHeight + fontSize) {
            ctx.globalAlpha = 0.5 + Math.random() * 0.4
            ctx.fillText(char, x, y)
            ctx.globalAlpha = 1
          }
          if (y > canvasHeight + fontSize) {
            drops[i] = Math.floor(Math.random() * -canvasHeight / fontSize) - 5
          }
          drops[i] += 0.5 + Math.random() * 0.5
        }
      }
      animationId = requestAnimationFrame(draw)
    }
    const handleResize = () => {
      resizeCanvas()
      fontSize = getFontSize()
      initDrops()
    }
    let resizeTimeout: any
    const optimizedResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(handleResize, 100)
    }
    const resizeObserver = new ResizeObserver(optimizedResize)
    resizeObserver.observe(canvas)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    resizeCanvas()
    initDrops()
    draw()
    return () => {
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationId)
      clearTimeout(resizeTimeout)
    }
  }, [])
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        opacity: 0.35,
        transform: 'translateZ(0)'
      }}
    />
  )
}