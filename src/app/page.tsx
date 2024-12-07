"use client"

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import DrawingCanvas from './drawing-canvas'

export default function ReceiptLandingPage() {

  const receiptRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (receiptRef.current) {
      setDimensions({
        width: receiptRef.current.offsetWidth,
        height: receiptRef.current.offsetHeight
      })
    }
  }, [])

  return (
    <div className="min-h-full bg-black flex items-center justify-center p-4">
      <div ref={receiptRef} className={`bg-yellow-50 shadow-lg max-w-md w-full  relative`}>
        {dimensions.width > 0 && dimensions.height > 0 && (
          <DrawingCanvas width={dimensions.width} height={dimensions.height} />
        )}
        <div className="p-4 flex flex-col min-h-[700px] [font-variant-numeric:tabular-nums]">
          <div className="flex justify-center mb-4">
            <div className="w-24">
              <Image
                src="/picture.png"
                alt="Document Photo"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-2 text-sm flex-grow leading-tight">
            <h1 className="text-xl font-bold text-center uppercase tracking-wider">Antonio Carlos Filho</h1>
            <p className="text-center text-xs uppercase tracking-wide">Developer and Scientist</p>
            <Link href='mailto:acfilho@acfilho.dev' >
              <p className="text-center text-xs">acfilho@acfilho.dev</p>
            </Link>
            <div className="border-t border-gray-400 pt-2 mt-4">
              <div className="flex justify-between items-start py-2">
                <div>
                  <Link href="https://wisio.app">
                    <span className="font-bold">wisio.app</span>
                  </Link>
                  <p className="text-xs">AI-powered scientific writing platform</p>
                </div>
                <span className="font-bold">2022</span>
              </div>
              <div className="flex justify-between items-start py-2">
                <div>
                  <Link href="https://rescribo.science">
                    <span className="font-bold">rescribo.science</span>
                  </Link>
                  <p className="text-xs">Scientific review marketplace</p>
                </div>
                <span className="font-bold">2024</span>
              </div>
              <div className="flex justify-between items-start py-2">
                <div>
                  <span className="font-bold">Fullstack Developer</span>
                  <p className="text-xs">Next.js, React, Node.js, Golang</p>
                </div>
                <span className="font-bold">5+ yrs</span>
              </div>
              <div className="flex justify-between items-start py-2">
                <div>
                  <span className="font-bold">PhD Biotechnology</span>
                  <p className="text-xs">Machine Learning for CVD Diagnosis</p>
                </div>
                <span className="font-bold">2023</span>
              </div>
            </div>
            {/* <div className="border-t border-gray-400 pt-2">
              <div className="flex justify-between font-bold">
                <span>Experience</span>
                <span>Full Stack</span>
              </div>
            </div> */}
          </div>
          <div className="mt-auto pt-4 border-t border-gray-400">
            <div className="flex flex-col items-center">
              <Image
                src="/signature.png"
                alt="Signature"
                width={150}
                height={50}
                className="w-48 h-24 object-contain"
              />
              <p className="text-xs mt-2">Antonio Carlos Filho</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
