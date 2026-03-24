import React from 'react';
import Head from 'next/head';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Head>
        <title>Sagar | Resume</title>
        <meta name="description" content="Sagar's Resume" />
      </Head>

      <div className="bg-gray-100 min-h-screen py-10 print:bg-white print:py-0 font-sans text-black">
        {/* Floating Print Button - Hidden on print */}
        <div className="fixed bottom-10 right-10 print:hidden z-50">
          <button
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Download PDF
          </button>
        </div>

        {/* A4 Document Container */}
        <div className="bg-white mx-auto shadow-2xl overflow-hidden print:shadow-none box-border flex flex-col" 
             style={{ width: '210mm', minHeight: '297mm', padding: '5mm 15mm' }}>
          
          {/* Header */}
          <header className="mb-4 border-b-2 border-gray-800 pb-2">
            <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-900">Sagar Adhikari, PhD</h1>
            <div className="mt-2 text-md text-gray-700 font-medium flex justify-between">
              <span>Astrophysicist & Data Scientist</span>
              <span>adhikaree.sagar@gmail.com</span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-4">
            <h2 className="text-xl font-bold mb-2 uppercase text-gray-800 border-b border-gray-300 pb-1">Professional Summary</h2>
            <p className="text-sm text-justify leading-relaxed text-gray-700">
              I find the mysteries of the universe to be incredibly fascinating as both an astrophysicist and a data scientist. 
              Working with massive, high-dimensional data from telescopes around the world has honed my expertise in statistical modeling, machine learning, and advanced data visualization. From writing predictive algorithms to developing complex mathematical models, I constantly seek to apply data science techniques to push the boundaries of knowledge and solve broad, real-world problems.
            </p>
          </section>

          {/* Core Competencies */}
          <section className="mb-4">
            <h2 className="text-xl font-bold mb-2 uppercase text-gray-800 border-b border-gray-300 pb-1">Core Competencies</h2>
            <ul className="text-sm list-disc list-inside grid grid-cols-2 gap-1 text-gray-700">
              <li>Python (Pandas, Scikit-learn)</li>
              <li>Machine Learning & NLP</li>
              <li>Deep Learning (TensorFlow, XGBoost)</li>
              <li>Statistical & Time Series Analysis</li>
              <li>RAG & LLM Integrations</li>
              <li>Data Visualization</li>
            </ul>
          </section>

          {/* Projects */}
          <section className="mb-4">
            <h2 className="text-xl font-bold mb-2 uppercase text-gray-800 border-b border-gray-300 pb-1">Key Projects</h2>
            
            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-md font-bold text-gray-900">My Research Assistant (RAG Pipeline)</h3>
                <span className="text-xs font-semibold text-gray-600">Python, NLP, Streamlit</span>
              </div>
              <p className="text-sm text-gray-700 mt-1 text-justify">
                An end-to-end Retrieval-Augmented Generation (RAG) web app built to interactively answer questions related to my peer-reviewed publications. Retrieves relevant responses from dense academic papers on Supermassive Black Holes and AGNs.
              </p>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-md font-bold text-gray-900">Stock Market Forecasting</h3>
                <span className="text-xs font-semibold text-gray-600">Pandas, Scikit-learn</span>
              </div>
              <p className="text-sm text-gray-700 mt-1 text-justify">
                Utilized multiple statistical and machine learning models to forecast S&P 500 market trends. Compared and evaluated the effectiveness of different models to forecast impending market shifts.
              </p>
            </div>

            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-md font-bold text-gray-900">ML Classifications of Fermi-LAT Blazars</h3>
                <span className="text-xs font-semibold text-gray-600">XGBoost, Random Forest</span>
              </div>
              <p className="text-sm text-gray-700 mt-1 text-justify">
                Analyzed raw data from the Fermi-LAT telescope for classification of blazar types. Trained Decision Tree, XGBoost, and Random Forest classifiers, achieving over 90% accuracy with GBDT.
              </p>
            </div>
            
            <div className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-md font-bold text-gray-900">Hangman ML Solver</h3>
                <span className="text-xs font-semibold text-gray-600">NLP, N-Gram Models</span>
              </div>
              <p className="text-sm text-gray-700 mt-1 text-justify">
                Implemented an N-Gram model to learn word patterns from a dictionary to solve the Hangman Word Game with ~66% accuracy against the training dictionary.
              </p>
            </div>
          </section>

          {/* Recent Publications */}
          <section className="mb-4">
            <h2 className="text-xl font-bold mb-2 uppercase text-gray-800 border-b border-gray-300 pb-1">Selected Publications</h2>
            <ul className="text-sm list-disc list-none text-gray-700 space-y-2 text-justify">
              <li><strong>Constraining the PG 1553+113 binary hypothesis: interpreting a new, 22-year period.</strong> Analyzed a century-long optical light curve, finding hints of a ~22 yr oscillation and exploring its relationship to supermassive black hole binaries.</li>
              <li><strong>Singular spectrum analysis of Fermi-LAT blazar light curves:</strong> A systematic search for periodicity and trends in the time domain. Processed data for 494 sources, extracting oscillatory components from trends and noise.</li>
              <li><strong>Distortions in periodicity analysis of blazars: the impact of flares.</strong> Investigated how stochastic flaring events mask or distort true periodic behavior in active galactic nuclei.</li>
            </ul>
          </section>

          {/* Education & Achievements */}
          <section className="mb-4">
            <h2 className="text-xl font-bold mb-2 uppercase text-gray-800 border-b border-gray-300 pb-1">Conferences & Achievements</h2>
            <ul className="text-sm list-disc list-none text-gray-700 space-y-1">
              <li><strong>2025:</strong> $80,000 NASA Fermi-GI research award grant</li>
              <li><strong>2025:</strong> Meeting of Astronomers of South Carolina, Florence, SC, USA</li>
              <li><strong>2024:</strong> 11th International Fermi Symposium, Maryland, USA</li>
              <li><strong>2023:</strong> International Conference on Time Series and Forecasting (ITISE-2023), Gran Canaria, Spain</li>
              <li><strong>2023:</strong> AAS/High Energy Astrophysics Division, Hawaii, USA</li>
            </ul>
          </section>

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-gray-300 text-center text-xs text-gray-500">
            Generated from adhikari-sagar.com.np
          </div>

        </div>
      </div>
    </>
  );
};

export default Resume;
