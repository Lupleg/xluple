import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaUserTie, FaUsers, FaRegLightbulb, FaLaptop } from "react-icons/fa";

export default function BuildingLupleg() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navigation */}
      <nav className="border-b sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex items-center h-16 space-x-8 whitespace-nowrap">
            <Link
              href="/docs/building"
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
              className="text-[#2D1537] border-b-2 border-[#2D1537] hover:text-gray-900 h-full flex items-center flex-shrink-0 transition duration-200"
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
              className="text-gray-600 hover:text-gray-900 h-full flex items-center flex-shrink-0 transition duration-200"
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
            <div className="font-semibold text-purple-600">Building Lupleg</div>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Contact Us
              </Link>
              <Link
                href="/docs/building/vision"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Vision and Goals
              </Link>
              <Link
                href="/docs/building/process"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Building Process
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
                Building Lupleg
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Discover the vision, principles, and journey behind creating Lupleg.
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
                  The Vision
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Lupleg was born out of a simple yet ambitious idea: to create solutions that bridge gaps, solve real-world problems, and leave a lasting positive impact. Our vision is to build something that doesn’t just exist but thrives—driving progress for individuals, communities, and industries alike.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                  The Foundation
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The journey of Lupleg is grounded in empathy-driven design, cutting-edge technology, and a collaborative spirit. By prioritizing sustainability, inclusivity, and innovation, we create solutions that are not only effective but also forward-thinking.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-[#2D1537] mb-4">
                  The Process
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Building Lupleg involves meticulous planning and execution:
                </p>
                <ul className="list-decimal list-inside space-y-3 mt-4 text-gray-700 text-lg leading-relaxed">
                  <li>
                    <span className="font-semibold">Ideation:</span> Exploring challenges and opportunities.
                  </li>
                  <li>
                    <span className="font-semibold">Prototyping:</span> Rapidly creating and refining solutions.
                  </li>
                  <li>
                    <span className="font-semibold">Scaling:</span> Growing and adapting to changing needs.
                  </li>
                </ul>
              </div>
            </section>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-[#f9f5fc] p-10 rounded-lg shadow-md">
              <h2 className="text-4xl font-bold text-[#2D1537] mb-4">
                Join the Journey
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Be a part of the Lupleg story. Together, we can create something extraordinary.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="bg-[#2D1537] text-white py-3 px-6 rounded-lg text-lg font-medium shadow hover:bg-[#4b3160] transition duration-200"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
