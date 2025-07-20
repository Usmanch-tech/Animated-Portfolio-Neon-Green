import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Instagram, Twitter, Linkedin, ArrowRight, Star, Zap, Palette, Target, Sparkles, Rocket, Globe, Code } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: "TechNova Brand Identity",
      category: "Brand Design",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete brand identity for tech startup",
      color: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "Cosmic Logo Suite",
      category: "Logo Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Futuristic logo collection",
      color: "from-green-300 to-green-500"
    },
    {
      id: 3,
      title: "Digital Arts Branding",
      category: "Brand Design",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Creative agency complete rebrand",
      color: "from-green-500 to-green-700"
    },
    {
      id: 4,
      title: "NeuroLink Identity",
      category: "Logo Design",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "AI company logo and guidelines",
      color: "from-green-200 to-green-400"
    },
    {
      id: 5,
      title: "Crypto Exchange Brand",
      category: "Brand Design",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Web3 platform complete identity",
      color: "from-green-600 to-green-800"
    },
    {
      id: 6,
      title: "Meta Studios Logo",
      category: "Logo Design",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Gaming studio brand mark",
      color: "from-green-100 to-green-300"
    }
  ];

  const services = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Logo Design",
      description: "Custom logos that capture your brand essence with modern, memorable designs.",
      features: ["Brand Mark Design", "Icon Systems", "Logo Guidelines", "Vector Files"],
      gradient: "from-green-300 via-green-400 to-green-500"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Brand Identity",
      description: "Complete brand systems including typography, colors, and visual language.",
      features: ["Style Guides", "Color Palettes", "Typography", "Brand Applications"],
      gradient: "from-green-400 via-green-500 to-green-600"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Digital Branding",
      description: "Web3-ready designs optimized for digital platforms and experiences.",
      features: ["NFT Collections", "Crypto Branding", "Social Media", "Web Assets"],
      gradient: "from-green-500 via-green-600 to-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-300 to-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500 to-green-700 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-green-200 to-green-400 rounded-full mix-blend-screen filter blur-2xl opacity-35 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-green-600 to-green-800 rounded-full mix-blend-screen filter blur-2xl opacity-35 animate-pulse animation-delay-3000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-gray-800/50' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent flex items-center gap-2">
              <Zap className="w-6 h-6 text-green-400" />
              MatrixLab
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-green-300 via-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-pulse">
                Matrix Design
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-200 via-green-300 to-green-400 bg-clip-text text-transparent">Revolution</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Crafting electrifying brand identities and logos that pulse with matrix energy. 
              Where digital aesthetics meet cutting-edge Web3 innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full text-black font-semibold overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 animate-pulse">
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Explore Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 border-2 border-green-500 bg-transparent rounded-full text-green-400 font-semibold hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group hover:bg-green-500 hover:text-black">
                <span className="relative z-10 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Start Project
                </span>
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                Matrix Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most vibrant projects featuring electrifying brand identities and matrix-inspired designs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.category}</span>
                    <Star className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                Matrix Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Electrifying design solutions that make your brand shine in the digital matrix
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-green-500/20 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`relative z-10 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="relative z-10 text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="relative z-10 text-gray-300 mb-6">{service.description}</p>
                <ul className="relative z-10 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                  About MatrixLab
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We are an electrifying design collective specializing in creating vibrant, matrix-inspired brand identities 
                that pulse with digital energy. Our expertise lies in fusing bold green aesthetics with cutting-edge Web3 
                aesthetics and futuristic visual languages.
              </p>
              <p className="text-gray-400 mb-8">
                With over 5 years of experience crafting digital masterpieces, we've helped 150+ brands establish their 
                electrifying visual identity in the matrix-powered digital metaverse.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2">150+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent mb-2">75+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-200 to-green-400 bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-500/10 via-green-400/10 to-green-300/10 backdrop-blur-xl border border-gray-700/30 p-8 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-400/20 to-green-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 group-hover:scale-110 transition-transform duration-500">
                    <Zap className="w-16 h-16 text-black animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Creative Excellence</h3>
                  <p className="text-gray-300">
                    Pushing the boundaries of matrix design with electrifying solutions and visionary creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 bg-clip-text text-transparent">
                Let's Connect to the Matrix
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to electrify your brand with matrix energy? Connect with us and let's create something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center border border-green-500/30">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-400">hello@matrixlab.studio</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex space-x-4 pt-8">
                {[Instagram, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-gray-800/30 to-black/30 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 border border-gray-700/30 hover:border-green-500/50 hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-green-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8 relative overflow-hidden group hover:border-green-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-green-400/5 to-green-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:shadow-lg focus:shadow-green-500/20 transition-all duration-300 backdrop-blur-sm"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none focus:shadow-lg focus:shadow-green-400/20 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-black/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-green-300 focus:outline-none focus:shadow-lg focus:shadow-green-300/20 transition-all duration-300 backdrop-blur-sm"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-black/30 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:border-green-600 focus:outline-none focus:shadow-lg focus:shadow-green-600/20 transition-all duration-300 resize-none backdrop-blur-sm"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-lg text-black font-semibold hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Launch Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-green-400" />
              MatrixLab
            </div>
            <p className="text-gray-400 mb-8">
              Illuminating the digital matrix with electrifying brand experiences.
            </p>
            <p className="text-gray-500">
              © 2025 MatrixLab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;