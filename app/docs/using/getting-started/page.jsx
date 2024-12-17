import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { User, Settings, ArrowRight, CheckCircle } from "lucide-react";

export default function GettingStarted() {
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

      {/* Page Layout */}
      <div className="flex-1 flex pt-16">
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 hidden md:block">
          <nav className="space-y-4">
            <div className="font-semibold text-purple-600">Using Lupleg</div>
            <div className="space-y-2">
              <Link
                href="/getting-started"
                className="block px-4 py-2 text-[#2D1537] hover:text-gray-900"
              >
                Getting Started
              </Link>
              <Link
                href="/docs/settings"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Settings and Options
              </Link>
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
                href="/report-abuse"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Report Abuse
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                Frequently Asked Questions
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* heading */}
            <h1 className="text-4xl font-bold text-[#2D1537] mb-6">
              Getting Started
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Welcome to Lupleg! Follow these simple steps to kickstart your
              journey. Each step is designed to help you get familiar with the
              platform, personalize your experience, and start learning
              effectively.
            </p>

            {/* Steps Section */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {/* Step 1 */}
              <div className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
                <User className="h-10 w-10 text-purple-600 mb-4" />
                <h2 className="text-2xl font-semibold text-[#2D1537] mb-2">
                  Step 1: Create Your Account
                </h2>
                <p className="text-gray-600 mb-4">
                  Sign up for an account to unlock access to tracks, resources,
                  and exercises. Your account is your personalized entry point
                  into the Lupleg platform.
                </p>
                <Link
                  href="/signup"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Create Account &rarr;
                </Link>
              </div>

              {/* Step 2 */}
              <div className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
                <Settings className="h-10 w-10 text-purple-600 mb-4" />
                <h2 className="text-2xl font-semibold text-[#2D1537] mb-2">
                  Step 2: Customize Your Settings
                </h2>
                <p className="text-gray-600 mb-4">
                  Update your profile, set your preferences, and configure
                  notifications to tailor the platform to your unique needs.
                </p>
                <Link
                  href="/docs/settings"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Customize Settings &rarr;
                </Link>
              </div>

              {/* Step 3 */}
              <div className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
                <ArrowRight className="h-10 w-10 text-purple-600 mb-4" />
                <h2 className="text-2xl font-semibold text-[#2D1537] mb-2">
                  Step 3: Explore the Platform
                </h2>
                <p className="text-gray-600 mb-4">
                  Dive into our curated tracks, learning paths, and
                  collaborative tools. Discover how Lupleg can support your
                  growth and goals.
                </p>
                <Link
                  href="/docs/explore"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Explore Now &rarr;
                </Link>
              </div>

              {/* Step 4 */}
              <div className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
                <CheckCircle className="h-10 w-10 text-purple-600 mb-4" />
                <h2 className="text-2xl font-semibold text-[#2D1537] mb-2">
                  Step 4: Start Learning
                </h2>
                <p className="text-gray-600 mb-4">
                  Take on exercises, participate in challenges, and collaborate
                  with others to accelerate your learning journey.
                </p>
                <Link
                  href="/docs/exercises"
                  className="text-purple-600 font-medium hover:underline"
                >
                  Start Learning &rarr;
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
