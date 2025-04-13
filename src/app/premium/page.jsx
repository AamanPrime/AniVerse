import React from "react";

const PremiumSubscription = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white flex items-center justify-center p-6"
    >
      <div className="max-w-4xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8">
          Premium Subscription
        </h1>
        <p className="text-center text-lg mb-6">
          Unlock exclusive features and enjoy an ad-free experience with our
          premium subscription plans.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Basic", price: "$5/month", features: ["Ad-free", "HD Streaming"] },
            { title: "Standard", price: "$10/month", features: ["Ad-free", "HD Streaming", "Offline Downloads"] },
            { title: "Premium", price: "$15/month", features: ["Ad-free", "4K Streaming", "Offline Downloads", "Priority Support"] },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-center mb-4">
                {plan.title}
              </h2>
              <p className="text-center text-xl font-semibold mb-4">
                {plan.price}
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-lg hover:opacity-90 transition-all duration-300">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumSubscription;