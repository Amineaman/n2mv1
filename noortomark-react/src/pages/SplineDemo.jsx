import React from 'react'
import { SplineSceneBasic } from '../components/ui/demo'

export default function SplineDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Spline 3D Integration
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive 3D scenes powered by Spline, integrated with React and Tailwind CSS
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <SplineSceneBasic />
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Available Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">SplineScene</h3>
              <p className="text-gray-300">Lazy-loaded Spline 3D scene component with suspense fallback</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Spotlight Effects</h3>
              <p className="text-gray-300">Multiple spotlight implementations for dynamic lighting effects</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Card Components</h3>
              <p className="text-gray-300">shadcn/ui card components with custom styling</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}