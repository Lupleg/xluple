import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoHome } from "react-icons/io5";

export default function ReportAbuse() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="border-b sticky top-0 bg-white z-10">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center h-16 space-x-8 whitespace-nowrap">
            <Link
              href="/docs"
              className="text-gray-600 hover:text-gray-900 flex-shrink-0"
            >
              <IoHome className="h-5 w-5" />
            </Link>
            <Link
              href="/docs/using"
              className="text-[#2D1537] border-b-2 border-[#2D1537] hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Using Lupleg
            </Link>
            <Link
              href="/docs/building"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Building Lupleg
            </Link>
            <Link
              href="/docs/mentoring"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Mentoring
            </Link>
            <Link
              href="/docs/community"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Community
            </Link>
            <Link
              href="/docs/tracks"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0"
            >
              Track Specific
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex pt-16">
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 hidden md:block">
          <nav className="space-y-4">
            <div className="font-semibold text-purple-600">Using Lupleg</div>
            <div className="space-y-2">
            <Link
                href="/docs/feedback"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Getting Feedback
              </Link>
              <Link
                href="/docs/exercises"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Solving Exercises
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Contact Us
              </Link>
              <Link
                href="/docs/using/report-abuse"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Report Abuse
              </Link>
              <Link
                href="/docs/using/getting-started"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Getting Started
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Frequently asked questions
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-[#2D1537] mb-4">
              Report Abuse
            </h1>

            {/* Decorative Wave */}
            <div className="mb-4">
              <svg className="text-[#2D1537]" viewBox="0 0 100 20" width="100">
                <path
                  d="M0 10 Q25 20 50 10 T100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* First Paragraph */}
            <p className="text-xl text-gray-600 mb-8">
              At Lupleg, we are committed to providing a safe and respectful
              environment for everyone. If you have experienced any form of
              abuse, harassment, or inappropriate behavior, we take all reports
              seriously and will ensure that each one is handled promptly and
              confidentially.
            </p>

            {/* Second Heading */}
            <h2 className="text-2xl font-semibold mb-4 text-[#2D1537]">
              What to Report?
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>
                <strong>Harassment:</strong> Any form of bullying, offensive
                behavior, or unwanted attention.
              </li>
              <li>
                <strong>Fraud:</strong> Scams or deceitful actions designed to
                trick or harm others.
              </li>
              <li>
                <strong>Spam:</strong> Unsolicited messages or promotions that
                disrupt communication.
              </li>
              <li>
                <strong>Other:</strong> If the issue doesn't fit into the above
                categories, please describe it.
              </li>
            </ul>

            {/* How to Report */}
            <h2 className="text-2xl font-semibold mb-4 text-[#2D1537]">
              How to Report
            </h2>
            <p className="text-gray-600 mb-4">
              To file a report, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Visit the <strong>Report Abuse</strong> page.</li>
              <li>
                Provide details such as names, dates, and a clear description of
                the incident.
              </li>
              <li>Submit any supporting screenshots or documents if needed.</li>
              <li>Our team will review your report within 48 hours.</li>
            </ol>

            {/* What Happens After Reporting */}
            <h2 className="text-2xl font-semibold mb-4 text-[#2D1537]">
              What Happens After Reporting?
            </h2>
            <p className="text-gray-600 mb-8">
              Once a report is submitted:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Your report will be reviewed by our moderation team.</li>
              <li>
                You may be contacted for additional details if required.
              </li>
              <li>Appropriate action will be taken based on our findings.</li>
              <li>We will keep you updated throughout the process.</li>
            </ul>

            {/* Closing Statement */}
            <div className="mt-8">
              <p className="text-lg font-medium text-[#2D1537]">
                Your safety and comfort are our priority. Thank you for helping
                us create a better, safer community for everyone.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
