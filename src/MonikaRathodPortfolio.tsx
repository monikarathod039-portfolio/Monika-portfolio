
import { Card, CardContent } from "./card";
import { Button } from "./button";

export default function MonikaRathodPortfolio() {
  return (
    <div className="p-6 space-y-10 max-w-5xl mx-auto">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Monika Rathod</h1>
        <p className="text-lg text-gray-600">
          Financial Analyst | Risk & Compliance | Business Intelligence
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:monikarathod039@gmail.com">
            <Button variant="outline">Email</Button>
          </a>
          <a href="https://www.linkedin.com/in/rathod-monika/" target="_blank">
            <Button variant="outline">LinkedIn</Button>
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
        <p>
          Financial Analyst with proven experience in financial modeling, variance analysis, and data visualization. Adept at enhancing report accuracy, automating reporting systems, and driving business decisions through cross-functional collaboration. Highly skilled in tools like Tableau, Power BI, SQL, and JIRA with a strong background in risk management and compliance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Visual Dashboards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <h4 className="font-bold text-lg">Cost Savings Over Time</h4>
              <img src="/cost_savings_chart.png" alt="Cost Savings Chart" className="my-2 rounded" />
              <p>Achieved up to $700K in savings by implementing data-driven budget optimizations and scenario planning.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="font-bold text-lg">Risk Assessment Breakdown</h4>
              <img src="/risk_breakdown_chart.png" alt="Risk Breakdown Chart" className="my-2 rounded" />
              <p>Performed comprehensive risk analysis to balance exposures across credit, market, and liquidity risk.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="font-bold text-lg">Automation Time Saved</h4>
              <img src="/automation_time_saved.png" alt="Automation Time Chart" className="my-2 rounded" />
              <p>Saved over 150 hours monthly by streamlining manual processes across reporting and audit tasks.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-10">
        © 2025 Monika Rathod. All rights reserved.
      </footer>
    </div>
  );
}
