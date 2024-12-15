import React from "react";

function ReportAbuse() {
  return (
    <div className="w-full bg-gradient-to-r from-[#2D1537] to-[#4E315A] py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl mb-8 text-center lg:text-left">
            Report <span className="text-[#FFC857]">Abuse</span>
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto lg:mx-0">
            At Lupleg, we are committed to providing a safe and respectful
            environment for everyone. If you have experienced any form of abuse,
            harassment, or inappropriate behavior, please use the form below to
            report it. We take all reports seriously and will ensure that each
            one is handled promptly and confidentially.
          </p>

          <hr className="border-gray-400 mb-8" />

          {/* What to Report */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-black text-3xl font-semibold mb-4">
              What to Report?
            </h3>
            <p className="text-black mb-4">Please report any incidents of:</p>
            <ul className="list-disc pl-8 text-black mb-6">
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
                <strong>Other:</strong> If the issue you're facing doesn’t fit
                into the above categories, please feel free to describe it.
              </li>
            </ul>
          </div>

          {/* How We Handle Reports */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-3xl mx-auto">
            <h3 className="text-black text-3xl font-semibold mb-4">
              How We Handle Reports
            </h3>
            <ul className="list-inside list-disc space-y-4 text-black">
              <li>
                <strong>Confidentiality:</strong> All reports are handled with
                the utmost privacy. Your personal information will not be shared
                without your consent.
              </li>
              <li>
                <strong>Prompt Action:</strong> We aim to review all reports as
                soon as possible and take necessary action, which may include
                investigating the issue, contacting involved parties, or taking
                preventive measures.
              </li>
              <li>
                <strong>Support:</strong> If you need further assistance or want
                to discuss the issue in more detail, our support team is
                available to provide help.
              </li>
            </ul>
          </div>

          {/* Report Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-black text-3xl font-semibold mb-4">
              Report Form
            </h3>
            <p className="text-black mb-6">
              Please provide the details of the incident below so we can address
              it appropriately. All fields are required to help us better
              understand the situation.
            </p>
            <form action="/submit-abuse-report" method="POST">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-black"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC857]"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="abuse-type"
                  className="text-lg font-medium text-black"
                >
                  Type of Abuse
                </label>
                <select
                  id="abuse-type"
                  name="abuse-type"
                  className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC857]"
                  required
                >
                  <option value="harassment">Harassment</option>
                  <option value="fraud">Fraud</option>
                  <option value="spam">Spam</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="description"
                  className="text-lg font-medium text-black"
                >
                  Description of Incident
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFC857]"
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFC857] text-black text-lg font-semibold py-4 rounded-lg hover:bg-yellow-200 text-black"
              >
                Submit Report
              </button>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 hidden lg:block">
          <img
            src="https://images.pexels.com/photos/6801684/pexels-photo-6801684.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Illustration"
            className="w-full rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ReportAbuse;
