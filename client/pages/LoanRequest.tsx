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
import { ArrowLeft, Shield, Clock, DollarSign, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoanRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: "",
    purpose: "",
    duration: "",
    urgency: "",
    description: "",
    university: "",
    year: "",
    studentId: "",
    phone: "",
    email: "",
    agreeTerms: false,
    agreePrivacy: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Loan request submitted:", formData);
    alert(
      "Your loan request has been submitted successfully! We'll review it within 24 hours.",
    );
  };

  const isFormValid =
    formData.amount &&
    formData.purpose &&
    formData.duration &&
    formData.university &&
    formData.year &&
    formData.email &&
    formData.agreeTerms &&
    formData.agreePrivacy;

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-mint-50">
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
                <p className="text-sm text-gray-600">Loan Application</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Need help?</p>
              <p className="text-sm text-navy-950 font-semibold">
                support@scholarlyfund.com
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-navy-950 mb-4">
            Apply for a Student Loan
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out this secure form to connect with trusted student lenders.
            Your information is encrypted and kept completely confidential.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-navy-950 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-navy-950 font-medium">
                Application
              </span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-gray-600">Review</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-gray-600">Funding</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Loan Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-navy-950">
                <DollarSign className="h-5 w-5 mr-2" />
                Loan Details
              </CardTitle>
              <CardDescription>
                Tell us about your funding needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount (₹) *
                  </label>
                  <Input
                    type="number"
                    placeholder="e.g., 25000"
                    value={formData.amount}
                    onChange={(e) =>
                      handleInputChange("amount", e.target.value)
                    }
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum: ₹5,000 | Maximum: ₹1,00,000
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Duration *
                  </label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("duration", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-month">1 Month</SelectItem>
                      <SelectItem value="2-months">2 Months</SelectItem>
                      <SelectItem value="3-months">3 Months</SelectItem>
                      <SelectItem value="6-months">6 Months</SelectItem>
                      <SelectItem value="12-months">12 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purpose of Loan *
                  </label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("purpose", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tuition-fees">Tuition Fees</SelectItem>
                      <SelectItem value="exam-fees">Exam Fees</SelectItem>
                      <SelectItem value="books-supplies">
                        Books & Supplies
                      </SelectItem>
                      <SelectItem value="accommodation">
                        Accommodation
                      </SelectItem>
                      <SelectItem value="travel">Travel Expenses</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("urgency", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">
                        Immediate (within 24 hours)
                      </SelectItem>
                      <SelectItem value="within-week">Within a week</SelectItem>
                      <SelectItem value="within-month">
                        Within a month
                      </SelectItem>
                      <SelectItem value="flexible">
                        Flexible timeline
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <Textarea
                  placeholder="Provide any additional context that might help lenders understand your situation..."
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Student Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-navy-950">
                <FileText className="h-5 w-5 mr-2" />
                Student Information
              </CardTitle>
              <CardDescription>
                Help us verify your student status
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
                    Year of Study *
                  </label>
                  <Select
                    onValueChange={(value) => handleInputChange("year", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st-year">1st Year</SelectItem>
                      <SelectItem value="2nd-year">2nd Year</SelectItem>
                      <SelectItem value="3rd-year">3rd Year</SelectItem>
                      <SelectItem value="4th-year">4th Year</SelectItem>
                      <SelectItem value="postgraduate">Postgraduate</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID
                  </label>
                  <Input
                    type="text"
                    placeholder="Your student ID number"
                    value={formData.studentId}
                    onChange={(e) =>
                      handleInputChange("studentId", e.target.value)
                    }
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    This will be verified for security
                  </p>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="your.email@university.edu"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Use your university email if possible
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security & Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-navy-950">
                <Shield className="h-5 w-5 mr-2" />
                Security & Privacy
              </CardTitle>
              <CardDescription>
                Your data is encrypted and kept confidential
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-mint-50 p-4 rounded-lg border border-mint-200">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-mint-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-navy-950 mb-1">
                      Your Privacy is Protected
                    </h4>
                    <p className="text-sm text-gray-600">
                      Lenders will never see your personal information. We use
                      advanced encryption and anonymous matching to protect your
                      identity throughout the process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
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
                      Terms of Service
                    </a>{" "}
                    and understand the loan terms and repayment obligations. *
                  </label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.agreePrivacy}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreePrivacy", checked as boolean)
                    }
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    I have read and accept the{" "}
                    <a href="#" className="text-navy-950 underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to the processing of my data for loan matching
                    purposes. *
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
                  ? "bg-navy-950 hover:bg-navy-800 text-white hover:shadow-xl transform hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              <Clock className="h-5 w-5 mr-2" />
              Submit Loan Application
            </Button>
          </div>
        </form>

        {/* What Happens Next */}
        <Card className="mt-8 bg-gold-50 border-gold-200">
          <CardHeader>
            <CardTitle className="text-navy-950">What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-navy-950 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-navy-950 mb-2">
                  Review & Verification
                </h4>
                <p className="text-sm text-gray-600">
                  We'll verify your information within 24 hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-mint-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold text-navy-950 mb-2">
                  Lender Matching
                </h4>
                <p className="text-sm text-gray-600">
                  Anonymous matching with trusted lenders
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-navy-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold text-navy-950 mb-2">Funding</h4>
                <p className="text-sm text-gray-600">
                  Receive funds directly to your account
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
