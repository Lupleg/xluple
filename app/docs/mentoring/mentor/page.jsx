import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function Mentoring() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Top Navigation */}
      <nav className="border-b sticky top-0 bg-white shadow-sm z-10">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center h-16 space-x-8 whitespace-nowrap">
            <Link
              href="/"
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
              href="/docs/mentoring/mentor"
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

      {/* Main Content */}
      <main className="flex-1 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <header className="mb-12">
            <h1 className="text-5xl font-extrabold text-[#2D1537] mb-4 leading-tight">
              Mentoring with Lupleg
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              Discover how you can transform lives by sharing your expertise and
              learn the rewards of mentorship.
            </p>
          </header>

          {/* Content Sections */}
          <section className="space-y-16">
            {/* Section 1 */}
            <div>
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Introduction to Mentoring
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At <span className="font-semibold text-[#2D1537]">Lupleg</span>,
                mentoring is the cornerstone of growth and innovation. It
                bridges the gap between experience and ambition, creating a path
                for meaningful collaboration. By being a mentor, you empower
                others while enriching your own journey with fresh perspectives
                and mutual respect.
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
              <p className="text-gray-700 text-lg leading-relaxed">
                Mentoring is more than just advice; it’s a structured, impactful
                process:
              </p>
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

            {/* Section 4 */}
            <div>
              <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                Types of Mentoring
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <li>
                  <span className="font-semibold">One-on-One Mentoring:</span>{" "}
                  Individualized, focused guidance.
                </li>
                <li>
                  <span className="font-semibold">Group Mentoring:</span>{" "}
                  Collaborative sessions with multiple mentees.
                </li>
                <li>
                  <span className="font-semibold">Reverse Mentoring:</span> Gain
                  insights from junior professionals.
                </li>
                <li>
                  <span className="font-semibold">Virtual Mentoring:</span>{" "}
                  Connect and guide remotely using digital tools.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
