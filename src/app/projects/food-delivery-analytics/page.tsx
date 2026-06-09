import Link from "next/link";
import { ArrowLeft, ExternalLink, Database, BarChart3, TrendingUp, Compass, Award } from "lucide-react";

export default function FoodDeliveryCaseStudy() {
  return (
    <main className="min-h-screen bg-apple-softGray text-apple-graphite font-sans py-12 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-apple-border">
        {/* Header Block */}
        <div className="bg-gradient-to-r from-apple-graphite to-gray-800 p-8 md:p-12 text-white relative">
          <Link href="/#projects" className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-6 transition">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
          <div className="inline-block px-3 py-1 bg-apple-emerald text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Cohort & Customer Retention Case Study
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">
            Food Delivery Platform Analytics
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-6">
            Driving user retention and operational efficiency by modeling transactional behavior on 500K+ historical orders using advanced SQL, cohort matrices, and RFM frameworks.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/Shanksreddy005/food-delivery-analytics-sql" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-white text-apple-graphite rounded-full text-sm font-semibold hover:bg-gray-100 transition shadow"
            >
              <svg className="w-4 h-4 mr-2 text-apple-graphite" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg> View GitHub Repository
            </a>
            <a 
              href="https://public.tableau.com/app/profile/shashank.reddy4125/viz/FoodDeliveryPlatformAnalyticsDashboard/ExecutiveOverview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-apple-mutedBlue text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition shadow"
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
              This case study investigates transactional dynamics across a fast-growing food delivery service. By conducting SQL cohort analyses and segmenting customers using Recency, Frequency, and Monetary (RFM) modeling, this project identified critical churn inflection points after the second order. The analysis provides targeted business interventions that can improve active user retention by 8% and boost average order frequency.
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
                Customer acquisition costs (CAC) were rising rapidly, yet lifetime value (LTV) remained flat due to steep customer drop-offs. The product leadership lacked quantitative visibility into customer lifetime journeys: at which order number do users stop ordering? Which regions underperform? What behavior signals high value?
              </p>
            </div>
          </section>

          {/* Dataset Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <Database className="w-6 h-6 mr-2 text-purple-600" /> Dataset Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The underlying dataset contains order logs spanning three key tables (Users, Orders, Transactions) totaling <strong>500,000+ transaction lines</strong>. Attributes analyzed include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><code>order_id</code>: Unique identifier for each order</li>
              <li><code>user_id</code>: Customer unique reference key</li>
              <li><code>order_timestamp</code>: Precision order timestamp for timeline analysis</li>
              <li><code>order_amount</code>: Basket value analyzed for RFM scoring</li>
              <li><code>delivery_duration_mins</code>: Operational metric tracking logistics speed</li>
            </ul>
          </section>

          {/* Analytical Approach */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2 text-apple-indigo" /> Analytical Approach
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                To solve this, I leveraged sequential SQL metrics generation and statistical modeling:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 border border-apple-border rounded-xl">
                  <h3 className="font-bold text-apple-graphite mb-2">1. Retention Cohorts</h3>
                  <p className="text-sm text-gray-600">
                    Grouped customers by their signup month and traced purchase activity over subsequent 30-day buckets using SQL window functions like <code>FIRST_VALUE()</code> and <code>LEAD()</code>.
                  </p>
                </div>
                <div className="p-5 border border-apple-border rounded-xl">
                  <h3 className="font-bold text-apple-graphite mb-2">2. RFM Segmentation</h3>
                  <p className="text-sm text-gray-600">
                    Assigned 1-5 scores on Recency, Frequency, and Monetary parameters using <code>NTILE(5)</code> divisions to isolate power users, slivers of loyal cohorts, and dormant accounts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SQL Window Query Insight */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-apple-graphite">Key SQL Query Structure utilized:</h3>
            <pre className="bg-apple-graphite text-gray-200 p-6 rounded-2xl overflow-x-auto text-sm leading-relaxed">
{`WITH user_orders AS (
  SELECT 
    user_id,
    order_timestamp,
    ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY order_timestamp) as order_seq,
    LAG(order_timestamp) OVER(PARTITION BY user_id ORDER BY order_timestamp) as prev_order_time
  FROM orders
)
SELECT 
  order_seq,
  COUNT(DISTINCT user_id) as total_users,
  AVG(DATEDIFF('day', prev_order_time, order_timestamp)) as avg_days_between_orders
FROM user_orders
GROUP BY order_seq;`}
            </pre>
          </section>

          {/* Key Findings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-apple-emerald" /> Key Findings & Visualizations
            </h2>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-green-900 space-y-3">
              <h3 className="font-bold text-lg">Critical Insights Discovered:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>The Retention Cliff:</strong> 55% of users churn directly after their 1st purchase. However, if a user places a 3rd order, their probability of remaining active past 90 days increases to 72%.</li>
                <li><strong>Frequency Correlation:</strong> Order intervals drop from 14 days (between order 1 & 2) down to 5 days (beyond order 5).</li>
                <li><strong>Regional Lag:</strong> Suburbs experienced 40% higher delivery delays, driving a direct 20% drop-off in user retention compared to urban cores.</li>
              </ul>
            </div>
          </section>

          {/* Recommendations */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2 flex items-center">
              <Compass className="w-6 h-6 mr-2 text-apple-graphite" /> Strategic Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-apple-softGray rounded-2xl">
                <span className="text-2xl font-bold text-apple-mutedBlue">01</span>
                <h4 className="font-bold my-2">Post-Order-1 Campaign</h4>
                <p className="text-sm text-gray-600">Deploy high-value credit incentives precisely on day 4 post first purchase to secure the second order and slide the user over the churn cliff.</p>
              </div>
              <div className="p-6 bg-apple-softGray rounded-2xl">
                <span className="text-2xl font-bold text-apple-emerald">02</span>
                <h4 className="font-bold my-2">Dynamic Logistics Dispatch</h4>
                <p className="text-sm text-gray-600">Re-allocate partner-rider density to suburban pockets during peak hours (7 PM to 9 PM) to reduce late-delivery churn triggers.</p>
              </div>
              <div className="p-6 bg-apple-softGray rounded-2xl">
                <span className="text-2xl font-bold text-apple-indigo">03</span>
                <h4 className="font-bold my-2">LTV Maximization</h4>
                <p className="text-sm text-gray-600">Incentivize subscribers to register for VIP/Loyalty passes after order 3 to capture recurring weekly order flows.</p>
              </div>
            </div>
          </section>

          {/* Expected Business Impact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-display border-b border-apple-border pb-2">Expected Business Impact</h2>
            <p className="text-gray-700 leading-relaxed">
              Applying the Post-Order-1 retention strategy is modeled to increase cohort conversion rates at Month-3 by <strong>8% to 12%</strong>, resulting in an estimated <strong>$140,000+ increase in Monthly Recurring Revenue (MRR)</strong>, while cutting average marketing acquisition wastage by 15%.
            </p>
          </section>

          {/* Tech stack & Action Buttons */}
          <section className="pt-6 border-t border-apple-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">Technologies Used:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {["SQL (Advanced)", "PostgreSQL", "Tableau", "Cohort Analysis", "RFM Segmentation"].map((t) => (
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
