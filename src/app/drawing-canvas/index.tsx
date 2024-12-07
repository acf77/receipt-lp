'use client'
import { useEffect, useRef, useState } from 'react'

interface DrawingCanvasProps {
  width: number
  height: number
}

const DrawingCanvas = ({ width, height }: DrawingCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastX, setLastX] = useState(0)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.strokeStyle = '#0000FF' // Blue color
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 1
  }, [])

  const startDrawing = (e: React.MouseEvent) => {
    setIsDrawing(true)
    setLastX(e.nativeEvent.offsetX)
    setLastY(e.nativeEvent.offsetY)
  }

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!ctx || !canvas) return

    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ctx.stroke()

    setLastX(e.nativeEvent.offsetX)
    setLastY(e.nativeEvent.offsetY)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        cursor: 'crosshair',
      }}
    />
  )
}

export default DrawingCanvas
