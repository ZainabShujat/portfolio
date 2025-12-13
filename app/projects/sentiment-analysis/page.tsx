'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'

export default function SentimentAnalysis() {
  const images = [
    { src: '/images/projects/sentiment-analysis/hero.png', alt: 'Sentiment Analysis tool interface' },
    { src: '/images/projects/sentiment-analysis/feature-1.png', alt: 'Sentiment Analysis feature screenshot' },
    { src: '/images/projects/sentiment-analysis/feature-2.png', alt: 'Sentiment Analysis feature screenshot' },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage()
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevImage()
    }
  }
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="px-6 sm:px-8 lg:px-16 py-12 lg:py-16 pt-[200px]">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white mb-12 mt-8 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono uppercase tracking-wider rounded-full">
                Play & Experiment
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
              Sentiment<br />Analysis
            </h1>
            <p className="text-2xl sm:text-3xl text-teal-400 font-medium mb-8">
              Understanding what people feel
            </p>
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              A tool that analyzes emotional patterns in text, helping understand sentiment and tone. 
              Built to make emotional intelligence more accessible through natural language processing.
            </p>
          </div>

          {/* Preview Section with Gallery */}
          <section className="mb-12">
            <div 
              className="relative h-[400px] bg-gradient-to-br from-teal-900/20 to-blue-900/20 border border-white/10 rounded-2xl overflow-hidden group cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="relative min-w-full h-full flex-shrink-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 border border-white/20 rounded-full text-xs font-mono transition-opacity duration-200">
                    {currentImageIndex + 1} / {images.length}
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-teal-400 w-6' 
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What It Does */}
              <section>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                  Project Overview
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    This project involves analysing customer reviews from platforms such as Amazon and Flipkart to determine 
                    whether the sentiment expressed is positive, negative, or neutral.
                  </p>
                  <p>
                    I use natural language processing (NLP) techniques such as tokenisation, stopword removal, stemming, and 
                    TF-IDF vectorisation to preprocess the text data, and then train a Naive Bayes classifier to categorise 
                    the reviews and evaluate the model using a confusion matrix, accuracy, precision, and recall.
                  </p>
                  <p>
                    This project introduced me to text classification, NLP, and basic machine learning.
                  </p>
                </div>
              </section>

              {/* Details */}
              <section className="border-t border-white/10 pt-12">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
                  Implementation
                </h2>
                <ul className="space-y-3 text-base text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 text-xl">•</span>
                    <span>Processed thousands of data points from e-commerce datasets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 text-xl">•</span>
                    <span>Achieved model accuracy of ~87%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 text-xl">•</span>
                    <span>Used confusion matrix, precision, and recall metrics for validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-teal-400 text-xl">•</span>
                    <span>Hands-on experience with pandas data handling and ML pipelines</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-10">
              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Project Management', 'pandas', 'Python', 'NLP', 'Machine Learning', 'Naive Bayes'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Timeline
                </h3>
                <p className="text-xl font-bold">Jul 2025 - Aug 2025</p>
              </div>

              {/* Status */}
              <div>
                <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Status
                </h3>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400 font-mono">Live</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://zainab-sentiment-analysis.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-colors duration-200"
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
