import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeft,
  Shield,
  TrendingUp,
  Heart,
  Users,
  DollarSign,
  FileText,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LenderRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    graduationYear: "",
    currentStatus: "",
    experience: "",
    lendingAmount: "",
    preferredDuration: "",
    riskTolerance: "",
    motivation: "",
    bankAccount: "",
    panCard: "",
    agreeTerms: false,
    agreeVerification: false,
    agreeRisks: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lender registration submitted:", formData);
    alert(
      "Your lender application has been submitted! We'll review your application and get back to you within 48 hours.",
    );
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.university &&
    formData.currentStatus &&
    formData.lendingAmount &&
    formData.bankAccount &&
    formData.panCard &&
    formData.agreeTerms &&
    formData.agreeVerification &&
    formData.agreeRisks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-navy-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="mr-4 p-2"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-navy-950">
                  Scholarly Fund
                </h1>
                <p className="text-sm text-gray-600">Become a Lender</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Need help?</p>
              <p className="text-sm text-navy-950 font-semibold">
                lenders@scholarlyfund.com
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section for Lenders */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-mint-100 rounded-full mb-6">
            <Heart className="h-12 w-12 text-mint-600" />
          </div>
          <h2 className="text-4xl font-bold text-navy-950 mb-4">
            Make a Difference While Earning Returns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of student lenders and help fellow students
            achieve their dreams while earning competitive returns on your
            investment.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-2 border-mint-200 bg-mint-50">
            <CardContent className="pt-6">
              <TrendingUp className="h-10 w-10 text-mint-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy-950 mb-2">
                Earn 8-15% Returns
              </h3>
              <p className="text-gray-600">
                Competitive returns while helping students succeed
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-gold-200 bg-gold-50">
            <CardContent className="pt-6">
              <Shield className="h-10 w-10 text-gold-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy-950 mb-2">
                Secure Platform
              </h3>
              <p className="text-gray-600">
                Verified borrowers and smart contract protection
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-navy-200 bg-navy-50">
            <CardContent className="pt-6">
              <Users className="h-10 w-10 text-navy-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-navy-950 mb-2">
                Community Impact
              </h3>
              <p className="text-gray-600">
                Direct impact on student success and education
              </p>
            </CardContent>
          </Card>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-navy-950">
                <FileText className="h-5 w-5 mr-2" />
                Personal Information
              </CardTitle>
              <CardDescription>Tell us about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Educational Background */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-navy-950">
                <Users className="h-5 w-5 mr-2" />
                Educational Background
              </CardTitle>
              <CardDescription>
                Your connection to the student community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    University/College *
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Indian Institute of Technology Delhi"
                    value={formData.university}
                    onChange={(e) =>
                      handleInputChange("university", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Graduation Year
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., 2022"
                    value={formData.graduationYear}
                    onChange={(e) =>
                      handleInputChange("graduationYear", e.target.value)
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Status *
                </label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("currentStatus", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current-student">
                      Current Student
                    </SelectItem>
                    <SelectItem value="recent-graduate">
                      Recent Graduate (within 2 years)
                    </SelectItem>
                    <SelectItem value="working-professional">
                      Working Professional
                    </SelectItem>
                    <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                    <SelectItem value="postgraduate">
                      Postgraduate Student
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Lending Experience
                </label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("experience", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first-time">
                      First-time lender
                    </SelectItem>
                    <SelectItem value="peer-lending">
                      Experience with peer-to-peer lending
                    </SelectItem>
                    <SelectItem value="traditional-investments">
                      Traditional investments experience
                    </SelectItem>
                    <SelectItem value="financial-professional">
                      Financial professional
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Lending Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-navy-950">
                <DollarSign className="h-5 w-5 mr-2" />
                Lending Preferences
              </CardTitle>
              <CardDescription>
                Configure your lending parameters
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Lending Amount (₹) *
                  </label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("lendingAmount", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select amount range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000-25000">
                        ₹5,000 - ₹25,000
                      </SelectItem>
                      <SelectItem value="25000-50000">
                        ₹25,000 - ₹50,000
                      </SelectItem>
                      <SelectItem value="50000-100000">
                        ₹50,000 - ₹1,00,000
                      </SelectItem>
                      <SelectItem value="100000-250000">
                        ₹1,00,000 - ₹2,50,000
                      </SelectItem>
                      <SelectItem value="250000+">₹2,50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Loan Duration
                  </label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("preferredDuration", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short-term">
                        Short-term (1-3 months)
                      </SelectItem>
                      <SelectItem value="medium-term">
                        Medium-term (3-6 months)
                      </SelectItem>
                      <SelectItem value="long-term">
                        Long-term (6-12 months)
                      </SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Risk Tolerance
                </label>
                <Select
                  onValueChange={(value) =>
                    handleInputChange("riskTolerance", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your risk tolerance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">
                      Conservative - Lower risk, stable returns
                    </SelectItem>
                    <SelectItem value="moderate">
                      Moderate - Balanced risk and returns
                    </SelectItem>
                    <SelectItem value="aggressive">
                      Aggressive - Higher risk, higher returns
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What motivates you to lend to students?
                </label>
                <Textarea
                  placeholder="Share why you want to support student education through lending..."
                  value={formData.motivation}
                  onChange={(e) =>
                    handleInputChange("motivation", e.target.value)
                  }
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Financial Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-navy-950">
                <Shield className="h-5 w-5 mr-2" />
                Financial Verification
              </CardTitle>
              <CardDescription>
                Required for secure transactions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-mint-50 p-4 rounded-lg border border-mint-200">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-mint-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-950 mb-1">
                      Your Financial Information is Secure
                    </h4>
                    <p className="text-sm text-gray-600">
                      We use bank-level encryption to protect your financial
                      data. Information is only used for verification and secure
                      transactions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Account Number *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your bank account number"
                    value={formData.bankAccount}
                    onChange={(e) =>
                      handleInputChange("bankAccount", e.target.value)
                    }
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    For secure fund transfers
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PAN Card Number *
                  </label>
                  <Input
                    type="text"
                    placeholder="ABCDE1234F"
                    value={formData.panCard}
                    onChange={(e) =>
                      handleInputChange("panCard", e.target.value)
                    }
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Required for KYC compliance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-navy-950">
                <CheckCircle className="h-5 w-5 mr-2" />
                Agreement & Verification
              </CardTitle>
              <CardDescription>
                Please review and accept our terms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeTerms", checked as boolean)
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-navy-950 underline">
                      Lender Terms of Service
                    </a>{" "}
                    and understand the lending process, fees, and my obligations
                    as a lender. *
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="verification"
                    checked={formData.agreeVerification}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeVerification", checked as boolean)
                    }
                  />
                  <label
                    htmlFor="verification"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    I consent to verification of my identity, educational
                    background, and financial information for security and
                    compliance purposes. *
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="risks"
                    checked={formData.agreeRisks}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeRisks", checked as boolean)
                    }
                  />
                  <label
                    htmlFor="risks"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    I understand that lending involves risk and that returns are
                    not guaranteed. I have read the{" "}
                    <a href="#" className="text-navy-950 underline">
                      Risk Disclosure
                    </a>
                    . *
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              size="lg"
              disabled={!isFormValid}
              className={`px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-200 ${
                isFormValid
                  ? "bg-mint-600 hover:bg-mint-700 text-white hover:shadow-xl transform hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <Heart className="h-5 w-5 mr-2" />
              Start Lending Journey
            </Button>
          </div>
        </form>

        {/* Next Steps */}
        <Card className="mt-8 bg-navy-50 border-navy-200">
          <CardHeader>
            <CardTitle className="text-navy-950">Your Lender Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold text-navy-950 mb-2">
                  Application Review
                </h4>
                <p className="text-sm text-gray-600">
                  We verify your information within 48 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-mint-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold text-navy-950 mb-2">
                  Account Setup
                </h4>
                <p className="text-sm text-gray-600">
                  Complete your lender profile and preferences
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-navy-950 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-navy-950 mb-2">
                  Start Lending
                </h4>
                <p className="text-sm text-gray-600">
                  Browse and fund student loan requests
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-semibold text-navy-950 mb-2">
                  Earn Returns
                </h4>
                <p className="text-sm text-gray-600">
                  Receive repayments and track your impact
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
