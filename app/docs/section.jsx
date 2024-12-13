import { ArrowRight, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Section() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Building Lupleg Section */}
        <div className="space-y-4">
          <div className="h-16 w-16">
            <Image
              src="/docs/build.svg"
              alt="Mentoring illustration"
              width={64}
              height={64}
              className="rounded-full bg-purple-50 p-2"
            />
          </div>
          <h2 className="text-2xl font-bold text-purple-900">
            Building Lupleg
          </h2>
          <p className="text-gray-600">
            Our comprehensive docs on building Lupleg. Discover everything you
            need to know about how to contribute to tracks, including guides,
            specs and explanations.
          </p>
          <Link
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Mentoring Section */}
        <div className="space-y-4">
          <div className="h-16 w-16">
            <Image
              src="/docs/mentor.svg"
              alt="Mentoring illustration"
              width={64}
              height={64}
              className="rounded-full bg-purple-50 p-2"
            />
          </div>
          <h2 className="text-2xl font-bold text-purple-900">Mentoring</h2>
          <p className="text-gray-600">
            Understand and master the art of mentoring on Lupleg. Our docs
            explain how to start your first session, how to give great feedback,
            and how to use the mentoring interface.
          </p>
          <Link
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Community Section */}
        <div className="space-y-4">
          <div className="h-16 w-16">
            <Image
              src="/docs/community.svg"
              alt="Community illustration"
              width={64}
              height={64}
              className="rounded-full bg-green-50 p-2"
            />
          </div>
          <h2 className="text-2xl font-bold text-purple-900">Community</h2>
          <p className="text-gray-600">
            Understand how our community works, the different roles people have
            and how you can join. Learn how to be a positive contributor and
            great community member.
          </p>
          <Link
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
