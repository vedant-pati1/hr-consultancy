import Title from "antd/es/typography/Title";
import HeroSection from "@/my-components/HeroSection";
import Card from "antd/es/card/Card";

export default function Payroll() {
  interface Offering {
    title: String;
    description: String;
  }
  const offerings: Offering[] = [
    {
      title: "Timely & Error-Free Salary Processing",
      description:
        "We process your employees’ salaries with precision and punctuality — ensuring every individual receives the correct amount, on the correct date, every month. From basic salary to allowances, tax deductions to reimbursements, we calculate and process every component with 100% accuracy. You’ll also receive clear and fully itemized salary slips, helping build employee trust and confidence.",
    },
    {
      title: "Smart Integration with Attendance & Leave Systems",
      description:
        "We connect your payroll system with digital attendance tools (biometric or software-based) to automatically fetch data like working days, approved leaves, holidays, and late arrivals. This seamless integration removes manual calculations, reduces disputes, and ensures salaries are paid based on verified attendance records.",
    },
    {
      title: "Comprehensive Payroll Records at Your Fingertips",
      description:
        "We maintain structured and secure records of every payroll transaction, including salary history, bonuses, deductions, and statutory filings. Whether you need data for audits, HR decisions, or employee queries — everything is just a few clicks away, safely stored and fully organized.",
    },
    {
      title: " Performance-Based Incentive Tracking",
      description:
        "Motivating your employees through rewards becomes easy. We track, calculate, and disburse incentives, commissions, and variable pay based on predefined KPIs or performance benchmarks — ensuring your high performers are recognized accurately and fairly, without delays.",
    },
    {
      title: "Advanced Payroll Insights & Analytics",
      description:
        "Our system offers insightful reports that help you make informed decisions about salary budgets, cost control, and workforce planning. Get detailed analytics on salary distribution, overtime expenses, tax liabilities, and more — helping you plan smarter for the future.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Payroll Management Services"
        subtitle="Payroll isn't just numbers — it's the foundation of employee trust. We provide fully managed payroll services that are accurate, on time, and 100% compliant with statutory laws. From calculating salaries and incentives to generating payslips and filing taxes, we handle it all — so your team gets paid with transparency and you gain peace of mind."
        showButtons={false}
      />
      <div className="my-5">
        <Title level={2}>
          {" "}
          <span className="">What We Offer:</span>
        </Title>
      </div>
      <div className="flex flex-col items-center px-3">
        {offerings.map((offering: Offering, index) => {
          return (
            <div
              className="apple m-5 max-w-[1500px] w-full max-h-[1000px] h-auto"
              key={index}
            >
              <Card>
                <div className="flex flex-col gap-5 md:flex-row">
                  <h1 className="font-bold text-2xl md:text-3xl md:mx-5 md:flex-[0.3]">
                    {" "}
                    {offering.title}
                  </h1>
                  <p className="text-[16px] md:text-[20px] md:flex-[0.6]">
                    {offering.description}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}
