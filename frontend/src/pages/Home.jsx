import React from 'react';
import { Dumbbell, TrendingUp, ClipboardList, ArrowRight, Activity, LogIn, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Hero Section - Dark Theme */}
      <div className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Build Muscle. <br />
                <span className="text-blue-500">Track Progress.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg">
                The ultimate companion for your strength journey. Log workouts, analyze history, and break personal records without the clutter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/workouts" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
                >
                  Start Logging Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/login" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-full text-gray-300 hover:text-white hover:bg-gray-800 transition-all"
                >
                  Member Login
                </a>
              </div>
            </div>
            
            {/* Abstract Graphic / Hero Image Placeholder */}
            <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse absolute top-0 right-10"></div>
                <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
                            <Dumbbell className="text-white h-6 w-6" />
                        </div>
                        <div>
                            <div className="h-2 w-24 bg-gray-600 rounded mb-2"></div>
                            <div className="h-2 w-16 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 w-full bg-gray-700 rounded"></div>
                        <div className="h-2 w-5/6 bg-gray-700 rounded"></div>
                        <div className="h-2 w-4/6 bg-gray-700 rounded"></div>
                    </div>
                    <div className="mt-6 flex justify-between items-end">
                        <div className="text-blue-400 font-bold text-xl">Bench Press</div>
                        <div className="text-white font-mono">100kg x 5</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-blue-200 text-sm mt-1">Free to Use</div>
                </div>
                 <div>
                    <div className="text-3xl font-bold">Unltd</div>
                    <div className="text-blue-200 text-sm mt-1">Workouts</div>
                </div>
                 <div>
                    <div className="text-3xl font-bold">Fast</div>
                    <div className="text-blue-200 text-sm mt-1">Performance</div>
                </div>
                 <div>
                    <div className="text-3xl font-bold">Secure</div>
                    <div className="text-blue-200 text-sm mt-1">Data</div>
                </div>
            </div>
        </div>
      </div>

      {/* Features Section - Zig Zag or Clean Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Features</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple tools, massive gains.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
             {[
                {
                    icon: <ClipboardList className="h-6 w-6 text-white" />,
                    title: "Effortless Logging",
                    desc: "Quickly input your sets, reps, and weights. Designed to be used between sets without slowing you down.",
                    color: "bg-orange-500"
                },
                {
                    icon: <TrendingUp className="h-6 w-6 text-white" />,
                    title: "Progress Tracking",
                    desc: "Visualize your strength gains over time. See your history for every exercise to ensure you're progressive overloading.",
                    color: "bg-blue-500"
                },
                {
                    icon: <Activity className="h-6 w-6 text-white" />,
                    title: "Workout History",
                    desc: "Keep a permanent record of every gym session. Analyze your consistency and dedication over weeks and months.",
                    color: "bg-green-500"
                }
             ].map((feature, index) => (
                 <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group">
                     <div className={`absolute top-0 right-0 w-24 h-24 ${feature.color} opacity-5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
                     <div className={`inline-flex items-center justify-center p-3 ${feature.color} rounded-xl shadow-lg mb-6 transform group-hover:-translate-y-1 transition-transform`}>
                         {feature.icon}
                     </div>
                     <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                     <p className="text-gray-500">{feature.desc}</p>
                 </div>
             ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to crush your goals?</h2>
              <p className="text-lg text-gray-500 mb-8">Join the community of lifters who treat their training seriously.</p>
              <div className="flex justify-center gap-4">
                  <a href="/signup" className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                      Get Started Free
                  </a>
                  <a href="/login" className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Log In
                  </a>
              </div>
          </div>
      </div>

    </div>
  );
};

export default Home;