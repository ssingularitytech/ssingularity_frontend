import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Terms.css"
const Terms = () => {
  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="terms col-md-8 offset-md-2">
          <div className="text-center mt-5">
            <h1 className="display-4 font-weight-bold fs-3">
              Terms And Conditions
            </h1>
          </div>

          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">Introduction</h2>
            <p className="mt-3">
              Welcome to the website of Ssingularitee Technologies Private
              Limited. By accessing or using our website, services, or products,
              you agree to comply with and be bound by these Terms and
              Conditions. Please read them carefully.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using our website or services, you confirm that
              you have read, understood, and agreed to abide by these Terms and
              Conditions. If you do not accept these terms, please refrain from
              using our website and services.
            </p>
          </div>

          {/* Use of Services */}
          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">Use of Services</h2>
            <ul className="list-unstyled mt-3 bullet-list">
              <li className="mt-3">
                Eligibility - You must be at least 18 years old to use our
                website and services. By using our website, you represent and
                warrant that you meet this age requirement.
              </li>
              <li className="mt-3">
                Account Registration - Some services may require you to create
                an account. You are responsible for maintaining the
                confidentiality of your account information and for all
                activities that occur under your account.
              </li>
              <li className="mt-3">
                Prohibited Conduct - You agree not to engage in any unlawful
                activities or use our services for any illegal or unauthorized
                purposes. This includes, but is not limited to, violating
                intellectual property rights, transmitting harmful code, or
                engaging in fraudulent activities.
              </li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">Intellectual Property</h2>
            <ul className="list-unstyled mt-3 bullet-list">
              <li className="mt-3">
                Ownership - All content on our website, including text,
                graphics, logos, and software, is the property of Ssingularity
                Technologies and is protected by intellectual property laws.
              </li>
              <li className="mt-3">
                Limited License - We grant you a limited, non-exclusive,
                non-transferable license to access and use our website and
                services for personal or internal business purposes. You may not
                reproduce, distribute, or create derivative works from our
                content without our prior written consent.
              </li>
            </ul>
          </div>

          {/* Privacy Policy */}
          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">Privacy Policy</h2>
            <p className="mt-3">
              Your use of our website and services is also governed by our
              Privacy Policy, which is incorporated into these Terms and
              Conditions by reference. Please review our Privacy Policy to
              understand our data practices.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">Disclaimers</h2>
            <ul className="list-unstyled mt-3 bullet-list">
              <li className="mt-3">
                No Warranty - Our website and services are provided "as is" and
                "as available" without any warranties of any kind, either
                express or implied. We do not warrant that our services will be
                uninterrupted, error-free, or free of harmful components.
              </li>
              <li className="mt-3">
                Limitation to Liability - To the fullest extent permitted by
                law, Ssingularity Technologies shall not be liable for any
                indirect, incidental, special, or consequential damages arising
                out of or in connection with your use of our website or
                services.
              </li>
            </ul>
          </div>

          {/* Indemnification */}
          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">Indemnification</h2>
            <p className="mt-3">
              You agree to indemnify, defend, and hold harmless Ssingularitee
              Technologies Private Limited, its affiliates, officers, directors,
              employees, and agents from any claims, liabilities, damages,
              losses, or expenses arising out of or in connection with your use
              of our website or services or your violation of these Terms and
              Conditions.
            </p>
          </div>

          {/* Termination */}
          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">Termination</h2>
            <p className="mt-3">
              We reserve the right to terminate or suspend your access to our
              website and services, without notice, for conduct that we believe
              violates these Terms and Conditions or is harmful to other users
              of our website, us, or third parties, or for any other reason in
              our sole discretion.
            </p>
          </div>

          {/* Changes to Terms and Conditions */}
          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">
              Changes to Terms and Conditions
            </h2>
            <p className="mt-3">
              We reserve the right to modify these Terms and Conditions at any
              time. Any changes will be effective immediately upon posting on
              our website. Your continued use of our website or services after
              such changes constitutes your acceptance of the new terms.
            </p>
          </div>

          {/* Contact Us */}
          <div className="mt-3">
            <h2 className="font-weight-bold fs-5">Contact Us</h2>
            <p className="mt-3">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at: Ssingularity
              Technologies.
            </p>
            <p className="mt-3">
              Address: Gate No - 2, Business District, 707/B,
              Lodha Supremus, Clariyant Compound, Kolshet Rd, Thane, Maharashtra
              400607
              <br />
              
              Email: info@ssingularity.co.in
              <br/>
              Phone:+91 9324251097 / 99677 14270
            </p>
            <p className="mt-3">
              By using our services or providing us with your personal
              information, you agree to the terms of this Privacy Policy. Thank
              you for trusting Ssingularity Technologies with your personal
              information.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Terms;
