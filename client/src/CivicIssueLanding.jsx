import React, { useState, useEffect } from 'react';
import { AlertCircle, Camera, MapPin, Users, Zap, CheckCircle, MessageSquare, Shield } from 'lucide-react';

export default function CivicIssueLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const issues = [
    { icon: AlertCircle, title: "Infrastructure", color: "text-orange-400" },
    { icon: MapPin, title: "Public Spaces", color: "text-green-400" },
    { icon: Shield, title: "Safety Concerns", color: "text-blue-400" },
    { icon: MessageSquare, title: "Community", color: "text-amber-400" }
  ];

  const features = [
    {
      icon: Camera,
      title: "Photo Documentation",
      description: "Capture and submit visual evidence of issues instantly"
    },
    {
      icon: MapPin,
      title: "GPS Location",
      description: "Automatic location tagging for precise issue tracking"
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Get notifications on the status of your reported issues"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "See how many community members support your issue"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">MyShehar</h1>
            </div>
            <nav className="hidden md:flex space-x-8 text-gray-300">
              <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
              <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
              <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              आपकी आवाज़,
              <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent"> आपका शहर</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Report civic issues instantly, track their progress, and build stronger communities together. Your feedback creates real change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center justify-center space-x-2">
                  <span>Report an Issue</span>
                  <AlertCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                View Reports
              </button>
            </div>

            {/* Issue Type Icons */}
            <div className="flex justify-center space-x-8 mb-20">
              {issues.map((issue, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center space-y-2 group cursor-pointer">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <issue.icon className={`w-8 h-8 ${issue.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{issue.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-4">Powerful Features</h3>
              <p className="text-gray-300 text-lg">Everything you need to make your voice heard</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-orange-400 mb-2">2,547</div>
                <div className="text-gray-300">Issues Resolved</div>
              </div>
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-green-400 mb-2">15,290</div>
                <div className="text-gray-300">Community Members</div>
              </div>
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-4xl font-bold text-blue-400 mb-2">87%</div>
                <div className="text-gray-300">Resolution Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 bg-gradient-to-r from-orange-600/20 to-green-600/20 backdrop-blur-sm rounded-3xl border border-white/20">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h3>
              <p className="text-gray-300 text-lg mb-8">Join thousands of citizens working together to improve our communities</p>
              <button className="px-10 py-4 bg-gradient-to-r from-orange-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold">MyShehar</span>
              </div>
              <div className="text-gray-400 text-sm">
                © 2024 MyShehar. Building better communities together.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}









// import React, { useState, useEffect } from 'react';
// import { AlertCircle, Camera, MapPin, Users, Zap, CheckCircle, MessageSquare, Shield } from 'lucide-react';

// export default function CivicIssueLanding() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const issues = [
//     { icon: AlertCircle, title: "Infrastructure", color: "text-orange-400" },
//     { icon: MapPin, title: "Public Spaces", color: "text-green-400" },
//     { icon: Shield, title: "Safety Concerns", color: "text-blue-400" },
//     { icon: MessageSquare, title: "Community", color: "text-amber-400" }
//   ];

//   const features = [
//     {
//       icon: Camera,
//       title: "Photo Documentation",
//       description: "Capture and submit visual evidence of issues instantly"
//     },
//     {
//       icon: MapPin,
//       title: "GPS Location",
//       description: "Automatic location tagging for precise issue tracking"
//     },
//     {
//       icon: Zap,
//       title: "Real-time Updates",
//       description: "Get notifications on the status of your reported issues"
//     },
//     {
//       icon: Users,
//       title: "Community Impact",
//       description: "See how many community members support your issue"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
//         <div className="absolute top-40 left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
//       </div>

//       <div className="relative z-10">
//         {/* Header */}
//         <header className="px-6 py-8">
//           <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
//                 <AlertCircle className="w-6 h-6 text-white" />
//               </div>
//               <h1 className="text-2xl font-bold text-white">MyShehar</h1>
//             </div>
//             <nav className="hidden md:flex space-x-8 text-gray-300">
//               <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
//               <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
//               <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
//             </nav>
//           </div>
//         </header>

//         {/* Hero Section */}
//         <section className="px-6 py-20">
//           <div className={max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}}>
//             <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//               आपकी आवाज़,
//               <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent"> आपका शहर</span>
//             </h2>
//             <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
//               Report civic issues instantly, track their progress, and build stronger communities together. Your feedback creates real change.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//               <button className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1">
//                 <span className="flex items-center justify-center space-x-2">
//                   <span>Report an Issue</span>
//                   <AlertCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
//                 </span>
//               </button>
//               <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
//                 View Reports
//               </button>
//             </div>

//             {/* Issue Type Icons */}
//             <div className="flex justify-center space-x-8 mb-20">
//               {issues.map((issue, index) => (
//                 <div key={index} className={transform transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}} style={{transitionDelay: ${index * 100}ms}}>
//                   <div className="flex flex-col items-center space-y-2 group cursor-pointer">
//                     <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
//                       <issue.icon className={w-8 h-8 ${issue.color} group-hover:scale-110 transition-transform} />
//                     </div>
//                     <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{issue.title}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="px-6 py-20">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <h3 className="text-4xl font-bold text-white mb-4">Powerful Features</h3>
//               <p className="text-gray-300 text-lg">Everything you need to make your voice heard</p>
//             </div>
            
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {features.map((feature, index) => (
//                 <div key={index} className={group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}} style={{transitionDelay: ${index * 150}ms}}>
//                   <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                     <feature.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
//                   <p className="text-gray-300 leading-relaxed">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="px-6 py-20">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//                 <div className="text-4xl font-bold text-orange-400 mb-2">2,547</div>
//                 <div className="text-gray-300">Issues Resolved</div>
//               </div>
//               <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//                 <div className="text-4xl font-bold text-green-400 mb-2">15,290</div>
//                 <div className="text-gray-300">Community Members</div>
//               </div>
//               <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//                 <div className="text-4xl font-bold text-blue-400 mb-2">87%</div>
//                 <div className="text-gray-300">Resolution Rate</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="px-6 py-20">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="p-12 bg-gradient-to-r from-orange-600/20 to-green-600/20 backdrop-blur-sm rounded-3xl border border-white/20">
//               <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
//               <h3 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h3>
//               <p className="text-gray-300 text-lg mb-8">Join thousands of citizens working together to improve our communities</p>
//               <button className="px-10 py-4 bg-gradient-to-r from-orange-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
//                 Get Started Today
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="px-6 py-12 border-t border-white/10">
//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="flex items-center space-x-3 mb-4 md:mb-0">
//                 <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
//                   <AlertCircle className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-white font-semibold">MyShehar</span>
//               </div>
//               <div className="text-gray-400 text-sm">
//                 © 2024 MyShehar. Building better communities together.
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// }