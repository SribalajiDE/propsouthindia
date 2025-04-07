import React from 'react';
import { Building2, Phone, Mail, MapPin, Users, Briefcase, Target, Award, Lightbulb, Crown } from 'lucide-react';

function App() {
  const team = [
    { name: "S. Krishna Kumar", role: "Managing Director" },
    { name: "I. Arun Prasad", role: "General Manager" },
    { name: "L. Gopinath", role: "Executive Director" },
    { name: "R. Vanitha", role: "Executive Director" },
    { name: "Veeramani", role: "Executive Manager" },
    { name: "Poornima Devi", role: "Legal Head" },
    { name: "Muktha Pratap", role: "Business Development Manager" },
    { name: "Nava Kumar", role: "Business Development Manager" },
    { name: "Trichy Mohan", role: "Business Development Manager" },
    { name: "D. Prabhakaran", role: "Business Development Manager" }
  ];

  const services = [
    "Project management",
    "Property acquisition and development",
    "Real estate brokerage",
    "Construction and Infra Structure Management",
    "Property management",
    "Environmental management",
    "Sales and leasing of residential and commercial property",
    "Project sales and marketing",
    "Advice on other property",
    "Vacant space management",
    "Commercial, residential and leisure management services",
    "Maintenance and cleaning Services"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">PropSouthIndia</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About Us</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gray-900 h-screen pt-16">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Modern building"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Properties, Loans, Construction and Maintenance</h1>
            <p className="text-xl mb-8">Prop South India is a venture aimed at easing the property buying process. We help customers buy property easily, get bank loans, and assist in construction and maintenance.</p>
            <div className="text-2xl font-semibold text-blue-400">You grow. We grow.</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="space-y-12">
            <div className="prose max-w-none text-gray-600">
              <p className="mb-4">
                Prop South India offers a complete portfolio of real estate services and we offer high-performing solutions built around a culture of innovation, distinguished by service excellence and longstanding client relationships.
              </p>
              <p className="mb-4">
                We align the interests of the property investor, the tenants and the property manager using a strategic blend of skills, experience, knowledge, relationships and proactive operational efficiency.
              </p>
              <p>
                We successfully implement tailor-made management strategies for each property portfolio. By harnessing our high-performance portfolio of property services, as well as our incontestable expertise in maximizing asset values, we navigate your business landscape and lead you to sustainable real estate success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be a recognized leader in the property management industry in India; while maintaining our authentic level of services founded on basic core values of integrity and partnership.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  We are on a mission to enhance the associations we partner with; while operating in an ethical and socially conscious manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">We embrace the highest standards of ethical behavior and transparency in every aspect of our business.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-gray-600">Our success depends on the strong partnerships we create with our clients and stakeholders.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">Our commitment to professional excellence ensures the highest quality service for our clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Teamwork</h3>
              <p className="text-gray-600">Our culture of teamwork allows us to combine the quality and expertise of our professional staff to deliver optimum solutions to our clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">We thrive on creativity and ingenuity. In today's fast-paced technological climate, innovative ideas, concepts and processes are essential to continued success and growth of a company.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Crown className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Leadership</h3>
              <p className="text-gray-600">Team spirit of leadership is instilled in every employee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <Briefcase className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600">
                    No.20, Ganapathi Nagar,<br />
                    Vijayarani Garden(Near Water Canal Road),<br />
                    Korattur, Chennai - 600099.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">Contact number coming soon</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">Email address coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold">PropSouthIndia</span>
            </div>
            <div className="text-gray-400">© 2024 PropSouthIndia. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;