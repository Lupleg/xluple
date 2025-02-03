import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Mentoring() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navigation */}
      <nav className="border-b sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center h-16 space-x-8 whitespace-nowrap">
            <Link
              href="/docs/mentoring"
              className="text-gray-600 hover:text-gray-900 flex-shrink-0"
            >
              <IoHome className="h-5 w-5" />
            </Link>
            <Link
              href="/docs/using"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0 transition duration-200"
            >
              Using Lupleg
            </Link>
            <Link
              href="/docs/building"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0 transition duration-200"
            >
              Building Lupleg
            </Link>
            <Link
              href="/docs/tracks"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0 transition duration-200"
            >
              Track Specific
            </Link>
            <Link
              href="/docs/mentoring"
              className="text-[#2D1537] border-b-2 border-[#2D1537] hover:text-gray-900 h-full flex items-center flex-shrink-0 transition duration-200"
            >
              Mentoring
            </Link>
            <Link
              href="/docs/community"
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0 transition duration-200"
            >
              Community
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 hidden md:block">
          <nav className="space-y-4">
            <div className="font-semibold text-purple-600">Using Lupleg</div>
            <div className="space-y-2">
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
        <main className="flex-1 px-8 py-8 mt-8">
          <div className="max-w-4xl">
            {/* Header Section */}
            <header className="mb-8">
              <h1 className="text-5xl font-extrabold text-[#2D1537] mb-4 leading-tight">
                Mentoring with Lupleg
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Transform lives, share expertise, and experience the rewards of
                mentorship.
              </p>
            </header>
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

            {/* Content Sections */}
            <section className="space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                  Introduction to Mentoring
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At <span className="font-semibold text-[#2D1537]">Lupleg</span>,
                  mentoring is the cornerstone of growth and innovation. It bridges
                  the gap between experience and ambition, creating a path for
                  meaningful collaboration. By being a mentor, you empower others
                  while enriching your own journey with fresh perspectives and
                  mutual respect.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                  Why Become a Mentor?
                </h2>
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
                  <li>
                    <span className="font-semibold text-[#2D1537]">
                      Create Impact:
                    </span>{" "}
                    Shape careers and influence success.
                  </li>
                  <li>
                    <span className="font-semibold text-[#2D1537]">
                      Foster Growth:
                    </span>{" "}
                    Learn and grow alongside your mentees.
                  </li>
                  <li>
                    <span className="font-semibold text-[#2D1537]">
                      Build Connections:
                    </span>{" "}
                    Expand your professional network with lasting relationships.
                  </li>
                  <li>
                    <span className="font-semibold text-[#2D1537]">
                      Enhance Skills:
                    </span>{" "}
                    Develop leadership and communication prowess.
                  </li>
                  <li>
                    <span className="font-semibold text-[#2D1537]">
                      Leave a Legacy:
                    </span>{" "}
                    Inspire future leaders and make a difference.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                  The Mentoring Process
                </h2>
                <ul className="list-decimal list-inside space-y-3 mt-4 text-gray-700 text-lg leading-relaxed">
                  <li>
                    <span className="font-semibold">Foster Trust:</span> Build a
                    foundation of openness and reliability.
                  </li>
                  <li>
                    <span className="font-semibold">Set Goals:</span> Define
                    clear, actionable outcomes.
                  </li>
                  <li>
                    <span className="font-semibold">Provide Guidance:</span> Offer
                    insights and encourage growth.
                  </li>
                  <li>
                    <span className="font-semibold">Celebrate Wins:</span>{" "}
                    Recognize progress and successes.
                  </li>
                  <li>
                    <span className="font-semibold">Encourage Independence:</span>{" "}
                    Empower mentees to take charge of their growth.
                  </li>
                </ul>
              </div>
            </section>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-[#f9f5fc] p-10 rounded-lg shadow-md">
              <h2 className="text-4xl font-bold text-[#2D1537] mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Join our community of mentors and mentees and start creating a
                lasting impact today.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="bg-[#2D1537] text-white py-3 px-6 rounded-lg text-lg font-medium shadow hover:bg-[#4b3160] transition duration-200"
                >
                  Become a Mentor
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
