import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Shield,
  Users,
  GraduationCap,
  Lock,
  Handshake,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-navy-950">
                  Scholarly Fund
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-700 hover:text-navy-950 px-3 py-2 text-sm font-medium transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="text-gray-700 hover:text-navy-950 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Why Us?
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-gray-700 hover:text-navy-950 px-3 py-2 text-sm font-medium transition-colors"
                >
                  FAQs
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-navy-950 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("hero")}
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-navy-950"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-950 w-full text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-950 w-full text-left"
              >
                Why Us?
              </button>
              <button
                onClick={() => scrollToSection("faqs")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-950 w-full text-left"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-950 w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy-50 to-mint-50"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="mb-8">
              <div
                className="inline-block p-4 bg-gold-100 rounded-full mb-6"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              >
                <GraduationCap className="h-12 w-12 text-gold-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              Financial Help,
              <br />
              <span className="text-gold-600">Without the Hardship</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your confidential and secure platform for short-term, peer-to-peer
              student loans. Connect with fellow students who understand your
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => navigate("/loan-request")}
                className="bg-navy-950 hover:bg-navy-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-xl transform hover:scale-105"
              >
                I Need a Loan
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/lender-registration")}
                className="border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-xl"
              >
                I Want to Lend
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, secure, and confidential. Get the help you need in just a
              few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div
              className="text-center group"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-navy-950 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="w-16 h-16 bg-gold-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 -z-10 group-hover:scale-125 transition-transform duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-navy-950 mb-3">
                Verify Identity
              </h3>
              <p className="text-gray-600">
                Quick and secure verification using your student ID and basic
                information.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="text-center group"
              style={{ transform: `translateY(${scrollY * 0.015}px)` }}
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-navy-950 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="w-16 h-16 bg-mint-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 -z-10 group-hover:scale-125 transition-transform duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-navy-950 mb-3">
                Post Request
              </h3>
              <p className="text-gray-600">
                Share your funding need anonymously with our trusted student
                community.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="text-center group"
              style={{ transform: `translateY(${scrollY * 0.01}px)` }}
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-navy-950 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="w-16 h-16 bg-gold-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 -z-10 group-hover:scale-125 transition-transform duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-navy-950 mb-3">
                Get Funded
              </h3>
              <p className="text-gray-600">
                Connect with lenders and receive funds through our secure
                platform.
              </p>
            </div>

            {/* Step 4 */}
            <div
              className="text-center group"
              style={{ transform: `translateY(${scrollY * 0.005}px)` }}
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 bg-navy-950 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <div className="w-16 h-16 bg-mint-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 -z-10 group-hover:scale-125 transition-transform duration-200" />
              </div>
              <h3 className="text-xl font-semibold text-navy-950 mb-3">
                Repay Securely
              </h3>
              <p className="text-gray-600">
                Easy repayment system with flexible terms that work with your
                schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-6">
              Why Choose Scholarly Fund?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're built by students, for students. Our platform prioritizes
              your privacy, security, and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-gold-200 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-navy-100 rounded-full group-hover:bg-navy-200 transition-colors duration-200">
                  <Lock className="h-8 w-8 text-navy-950" />
                </div>
                <CardTitle className="text-2xl font-bold text-navy-950">
                  Absolute Confidentiality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Your identity remains completely anonymous to lenders. We use
                  advanced encryption and privacy protocols to ensure your
                  personal information stays secure.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-mint-200 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-mint-100 rounded-full group-hover:bg-mint-200 transition-colors duration-200">
                  <Handshake className="h-8 w-8 text-mint-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-navy-950">
                  Ethical & Secure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Smart agreements and transparent terms protect both borrowers
                  and lenders. Our ethical recovery process ensures fair
                  treatment for everyone.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-gold-200 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gold-100 rounded-full group-hover:bg-gold-200 transition-colors duration-200">
                  <Users className="h-8 w-8 text-gold-700" />
                </div>
                <CardTitle className="text-2xl font-bold text-navy-950">
                  Built for Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  Community-focused platform with reputation scores and peer
                  support. We understand student life and create solutions that
                  actually work.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy-50 to-mint-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-6">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from students who found the help they needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Scholarly Fund helped me cover my exam fees without any
                  stress. The process was so discreet and quick!"
                </p>
                <div className="text-sm font-semibold text-navy-950">
                  A.K., B.Tech Student
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "As a lender, I love helping fellow students. The platform
                  makes it safe and rewarding."
                </p>
                <div className="text-sm font-semibold text-navy-950">
                  R.S., MBA Student
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Finally, a lending platform that understands students.
                  Transparent, fair, and trustworthy."
                </p>
                <div className="text-sm font-semibold text-navy-950">
                  M.P., Engineering Student
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about our platform.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-navy-950 hover:text-gold-600">
                Is my information safe and confidential?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutely. We use bank-level encryption and never share your
                personal details with lenders. Your identity remains completely
                anonymous throughout the entire process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-navy-950 hover:text-gold-600">
                What are the fees and interest rates?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We charge a small platform fee (2-3%) and interest rates are
                determined by the community, typically ranging from 5-12%
                annually. All fees are transparently displayed before you
                commit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-navy-950 hover:text-gold-600">
                What happens if I can't repay on time?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We understand student life can be unpredictable. Our ethical
                recovery process includes flexible payment plans and direct
                communication to find solutions that work for everyone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-navy-950 hover:text-gold-600">
                Who can become a lender on the platform?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Any verified student or recent graduate can become a lender. We
                verify identity and financial capacity to ensure a safe lending
                environment for all participants.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-navy-950 hover:text-gold-600">
                How quickly can I get funding?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Most loan requests are funded within 24-48 hours of approval.
                Emergency requests can be processed even faster through our
                priority system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Have questions? We're here to help you get started on your
              financial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-gold-400 mr-3" />
                  <span className="text-gray-300">
                    Secure & Confidential Support
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-mint-400 mr-3" />
                  <span className="text-gray-300">24/7 Student Support</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-gold-400 mr-3" />
                  <span className="text-gray-300">
                    Community-Driven Platform
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-300 mb-6">
                  Ready to join thousands of students who've found financial
                  freedom through our platform?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => navigate("/loan-request")}
                    className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold flex-1"
                  >
                    Start Borrowing
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("/lender-registration")}
                    className="border-2 border-white text-white hover:bg-white hover:text-navy-950 flex-1"
                  >
                    Start Lending
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-gold-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-gold-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-gold-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                Scholarly Fund
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering students through confidential, ethical, and secure
                peer-to-peer lending. Built by students, for students.
              </p>
              <div className="text-sm text-gray-500">
                © 2024 Scholarly Fund. All rights reserved.
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Safety & Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              Your financial journey starts here. Join thousands of students
              building their future together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
