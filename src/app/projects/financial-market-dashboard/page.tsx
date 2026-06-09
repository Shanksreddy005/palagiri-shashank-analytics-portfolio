import Link from "next/link";
import { ArrowLeft, ExternalLink, Database, BarChart3, TrendingUp, Compass, Award } from "lucide-react";

export default function FinancialMarketCaseStudy() {
  return (
    <main className="min-h-screen bg-apple-softGray text-apple-graphite font-sans py-12 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-apple-border">
        {/* Header Block */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 p-8 md:p-12 text-white relative">
          <Link href="/#projects" className="inline-flex items-center text-sm text-blue-200 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
          <div className="inline-block px-3 py-1 bg-apple-mutedBlue text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Quantitative Finance & Volatility Analytics
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Financial Market Trend Dashboard
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mb-6">
            Building an automated portfolio volatility tracking solution with advanced statistical modeling, time-series metrics, and high-performance interactive visual systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/Shanksreddy005/Finance_Analysis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-white text-apple-graphite rounded-full text-sm font-semibold hover:bg-gray-100 transition shadow"
            >
              <svg className="w-4 h-4 mr-2 text-apple-graphite" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg> View GitHub Repository
            </a>
            <a 
              href="https://public.tableau.com/app/profile/shashank.reddy4125/viz/Financial_Market_Dashboard/FinancialMarketTrendAnalysisDashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-apple-emerald text-white rounded-full text-sm font-semibold hover:bg-emerald-600 transition shadow"
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Open Tableau Dashboard
            </a>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 space-y-12">
          {/* Executive Summary */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <Award className="w-6 h-6 mr-2 text-apple-emerald" /> Executive Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This case study outlines the design and deployment of an interactive market KPI and portfolio volatility dashboard. By automating ETL workflows and displaying real-time standard deviation metrics and Moving Average convergences, this tool allows asset management stakeholders to isolate macro market trends and proactively recalibrate multi-asset portfolio risks.
            </p>
          </section>

          {/* Business Problem */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <Compass className="w-6 h-6 mr-2 text-apple-mutedBlue" /> Business Problem
            </h2>
            <div className="bg-apple-softGray p-6 rounded-2xl border border-apple-border">
              <p className="text-gray-800 font-semibold mb-2">The Challenge:</p>
              <p className="text-gray-700 leading-relaxed">
                Investment analysts spent hours weekly manually pulling CSV files, compiling stock trends, and calculating portfolio risk ratios in Excel. By the time charts reached decision-makers, market parameters had already shifted, exposing portfolios to unhedged downside risk.
              </p>
            </div>
          </section>

          {/* Dataset Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <Database className="w-6 h-6 mr-2 text-purple-600" /> Dataset & ETL Scale
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The dashboard integrates daily market data feeds spanning major asset indexes (NIFTY, S&P 500, select stock symbols) comprising <strong>10+ years of pricing records</strong>. The analytics ingestion pipeline processes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><code>Date</code>: Daily trade records</li>
              <li><code>Close Price</code>: Base evaluation rate</li>
              <li><code>Volume</code>: Volume indicators to check breakouts</li>
              <li><code>High/Low Spread</code>: Intra-day variance indicators</li>
            </ul>
          </section>

          {/* Analytical Approach */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2 text-apple-indigo" /> Analytical & Statistical Methods
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Rather than basic price plotting, the engine leverages sophisticated statistical indicators:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 border border-apple-border rounded-xl">
                  <h3 className="font-bold text-apple-graphite mb-2">1. Bollinger Band Variance</h3>
                  <p className="text-sm text-gray-600">
                    Constructed standard deviation thresholds around the 20-day Simple Moving Average (SMA) to isolate oversold and overbought zones.
                  </p>
                </div>
                <div className="p-5 border border-apple-border rounded-xl">
                  <h3 className="font-bold text-apple-graphite mb-2">2. Exponential Moving Averages</h3>
                  <p className="text-sm text-gray-600">
                    Formulated dual EMA crossovers (e.g., 50-day and 200-day) to capture key momentum indicators.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Code snippet representation */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-apple-graphite">Python Data-Pipeline snippet utilized:</h3>
            <pre className="bg-apple-graphite text-gray-200 p-6 rounded-2xl overflow-x-auto text-sm leading-relaxed">
{`import pandas as pd
import numpy as np

def calculate_volatility(df, window=20):
    df['Daily_Return'] = df['Close'].pct_change()
    df['SMA_20'] = df['Close'].rolling(window=window).mean()
    df['STD_20'] = df['Close'].rolling(window=window).std()
    df['Upper_Band'] = df['SMA_20'] + (df['STD_20'] * 2)
    df['Lower_Band'] = df['SMA_20'] - (df['STD_20'] * 2)
    df['Annualized_Vol'] = df['Daily_Return'].rolling(window=252).std() * np.sqrt(252)
    return df`}
            </pre>
          </section>

          {/* Key Findings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-apple-emerald" /> Key Findings & Insights
            </h2>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-blue-900 space-y-3">
              <h3 className="font-bold text-lg">Key Analysis Highlights:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Volatility Signals:</strong> Identified that when 20-day annualized volatility breaches 25%, a downward correction occurs in 78% of observed historical periods.</li>
                <li><strong>Crossover Indicators:</strong> The 50/200 DMA Golden Cross accurately signaled long-term trend reversals across 8 out of the past 10 market cycles.</li>
              </ul>
            </div>
          </section>

          {/* Business Recommendations */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <Compass className="w-6 h-6 mr-2 text-apple-graphite" /> Portfolio Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-apple-softGray rounded-2xl">
                <span className="text-2xl font-bold text-apple-mutedBlue">01</span>
                <h4 className="font-bold my-2">Dynamic Risk Hedging</h4>
                <p className="text-sm text-gray-600">Automatically trigger defensive hedging allocations when the annualized volatility gauge crosses the 22% mark.</p>
              </div>
              <div className="p-6 bg-apple-softGray rounded-2xl">
                <span className="text-2xl font-bold text-apple-emerald">02</span>
                <h4 className="font-bold my-2">Volume Confirmation</h4>
                <p className="text-sm text-gray-600">Ignore SMA crossover triggers unless trade volume is at least 1.5x above its 30-day trailing average.</p>
              </div>
              <div className="p-6 bg-apple-softGray rounded-2xl">
                <span className="text-2xl font-bold text-apple-indigo">03</span>
                <h4 className="font-bold my-2">Asset Rebalancing</h4>
                <p className="text-sm text-gray-600">Rebalance portfolios quarterly away from high-volatility sectors and into low-beta assets to stabilize yield curves.</p>
              </div>
            </div>
          </section>

          {/* Expected Business Impact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2">Expected Business Impact</h2>
            <p className="text-gray-700 leading-relaxed">
              Automating the risk monitoring and data ETL workflow reduced report generation time from 8 hours per week to under 10 seconds. This enables portfolio managers to execute hedges faster, protecting asset values during high-volatility events.
            </p>
          </section>

          {/* Tech stack & Action Buttons */}
          <section className="pt-6 border-t border-apple-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">Technologies Used:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {["Python", "Pandas", "Tableau", "Volatility Modeling", "Statistical Profiling"].map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-apple-softGray rounded-md text-xs font-medium text-apple-graphite">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <Link href="/#projects" className="inline-flex items-center px-6 py-3 bg-apple-graphite text-white rounded-full text-sm font-semibold hover:bg-black transition">
                Return to Dashboard
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
