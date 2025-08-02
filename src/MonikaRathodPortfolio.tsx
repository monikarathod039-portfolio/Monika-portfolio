
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
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-6">
          <li>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">Fidelity Investments</h3>
                <p className="text-sm text-gray-500">Shareholder Reporting Analyst | Sep 2023 - Present</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Reduced analysis time by 25% by developing interactive Tableau dashboards.</li>
                  <li>Automated Excel-based reports for audit & compliance reviews.</li>
                  <li>Improved compliance readiness by 30% with JIRA documentation workflows.</li>
                </ul>
              </CardContent>
            </Card>
          </li>

          <li>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">USM Business Systems</h3>
                <p className="text-sm text-gray-500">FP&A Analyst | Oct 2022 - Sep 2023</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Achieved $1.2M annual cost savings through modeling and analysis.</li>
                  <li>Built IRR & NPV models for 12+ products, reallocating $15M.</li>
                  <li>Designed $20M credit exposure forecasting scenarios.</li>
                </ul>
              </CardContent>
            </Card>
          </li>

          <li>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">Fidelity Charitable</h3>
                <p className="text-sm text-gray-500">Operations Specialist | Jan 2021 - Sep 2022</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Boosted KPI by 58% and streamlined reports using Tableau & Oracle BI.</li>
                  <li>Oversaw 200+ JIRA support tickets with customized dashboards.</li>
                </ul>
              </CardContent>
            </Card>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h4 className="text-lg font-bold">Real-time Stock Scraper</h4>
              <p className="text-sm mt-2">
                Built a stock data scraper using Python and automated validation checks across five systems to ensure 100% regulatory compliance. Strengthened data integrity and minimized financial risk.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="text-lg font-bold">Risk Analysis for Global Banks</h4>
              <p className="text-sm mt-2">
                Analyzed risk factors from annual 10-K reports of Wells Fargo, Goldman Sachs, and UBS. Compared liquidity, market, and credit risk using Tableau dashboards and Excel-based models.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills Snapshot</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc pl-5">
          <li>Financial Modeling & Forecasting</li>
          <li>Tableau & Power BI</li>
          <li>SQL & Excel Automation</li>
          <li>Risk & Credit Analysis</li>
          <li>JIRA & Agile Workflows</li>
          <li>Regulatory & SOX Compliance</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-10">
        © 2025 Monika Rathod. All rights reserved.
      </footer>
    </div>
  );
}
