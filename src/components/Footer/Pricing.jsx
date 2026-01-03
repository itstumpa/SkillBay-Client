// pages/Pricing.jsx
import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        { text: "Access to free courses", included: true },
        { text: "Basic progress tracking", included: true },
        { text: "Community forum access", included: true },
        { text: "Mobile app access", included: true },
        { text: "Certificate of completion", included: false },
        { text: "Offline downloads", included: false },
        { text: "Priority support", included: false },
        { text: "1-on-1 mentoring", included: false },
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Best for serious learners",
      features: [
        { text: "Access to all courses", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Community forum access", included: true },
        { text: "Mobile app access", included: true },
        { text: "Certificate of completion", included: true },
        { text: "Offline downloads", included: true },
        { text: "Priority support", included: false },
        { text: "1-on-1 mentoring", included: false },
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      description: "For teams and organizations",
      features: [
        { text: "Access to all courses", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Community forum access", included: true },
        { text: "Mobile app access", included: true },
        { text: "Certificate of completion", included: true },
        { text: "Offline downloads", included: true },
        { text: "Priority support", included: true },
        { text: "1-on-1 mentoring", included: true },
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="text-emerald-600">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Choose the plan that's right for you. All plans include a 14-day
            free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="font-medium">Monthly</span>
            <button className="relative w-14 h-8 bg-emerald-600 rounded-full p-1">
              <div className="w-6 h-6 bg-white rounded-full shadow transition-transform transform translate-x-0"></div>
            </button>
            <span className="font-medium">
              Yearly <span className="text-green-500 text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl shadow-lg border-2 transition-all hover:shadow-xl ${
                  plan.popular
                    ? "border-emerald-600 scale-105"
                    : "border-gray-100 dark:border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <FaCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <FaTimes className="w-5 h-5 text-gray-300 dark:text-gray-600 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included
                            ? ""
                            : "text-gray-400 dark:text-gray-500"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:shadow-lg"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check out our FAQ page for answers to common questions about pricing
            and plans.
          </p>
          <Link
            to="/faq"
            className="inline-block text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
          >
            Visit FAQ →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
