import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Privacy.css";
const Privacy = () => {
  return (
    <>
      <Header />
      <div className="container ">
        <div className="row">
          <div className="privacy col-md-8 offset-md-2">
            <div className=" text-center ">
              <h1 className="display-4 mt-5 fw-bold fs-3">Privacy Policies</h1>
            </div>

            {/* Introduction */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Introduction</h2>
              <p className="lead fs-6">
                Ssingularity Technologies is committed to protecting the privacy
                and security of the personal information of our employees,
                clients, partners, and visitors to our website. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your personal information.
              </p>
            </div>

            {/* Scope */}
            <div className="mt-4 ">
              <h2 className="fw-bold fs-5">Scope</h2>
              <p>
                This Privacy Policy applies to all personal information
                collected by Ssingularitee Technologies Private Limited,
                including information collected through our website, during our
                business operations, and from any other interactions you may
                have with us.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-unstyled bullet-list">
                <li>
                  Contact Information - Name, email address, phone number,
                  postal address.
                </li>
                <li>
                  Identification Information - Date of birth, government-issued
                  identification numbers.
                </li>
                <li>
                  Professional Information - Job title, company name, work
                  email, work phone number.
                </li>
                <li>
                  Financial Information - Bank account details, and payment
                  information.
                </li>
                <li>
                  Technical Information - IP address, browser type, operating
                  system, device information, and browsing behavior on our
                  website.
                </li>
                <li>
                  Other Information - Any other information you choose to
                  provide to us directly or through our website.
                </li>
              </ul>
            </div>

            {/* How We Collect Information */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">How We Collect Information</h2>
              <p>We collect personal information in various ways, including:</p>
              <ul className="list-unstyled bullet-list">
                <li>
                  Directly from You - When you fill out forms on our website,
                  contact us via email or phone, or provide information during
                  business interactions.
                </li>
                <li>
                  Automatically - When you visit our website, we may collect
                  technical information through cookies and other tracking
                  technologies.
                </li>
                <li>
                  From Third Parties - We may receive information about you from
                  third parties, such as business partners, contractors, and
                  public databases.
                </li>
              </ul>
            </div>

            {/* Use of Information */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Use of Information</h2>
              <p>
                We use the personal information we collect for the following
                purposes:
              </p>
              <ul className="list-unstyled bullet-list">
                <li>
                  Providing Services - To deliver the products and services you
                  request, including customer support and processing
                  transactions.
                </li>
                <li>
                  Communication - To communicate with you about our services,
                  updates, promotions, and events.
                </li>
                <li>
                  Improvement of Services - To analyze and improve our services,
                  website functionality, and user experience.
                </li>
                <li>
                  Legal Compliance - To comply with legal obligations and
                  protect our rights and interests.
                </li>
                <li>
                  Security - To protect against and prevent fraud, unauthorized
                  access, and other security issues.
                </li>
              </ul>
            </div>

            {/* Disclosure of Information */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Disclosure of Information</h2>
              <p>We may share your personal information with:</p>
              <ul className="list-unstyled bullet-list">
                <li>
                  Service Providers - Third-party vendors who provide services
                  on our behalf, such as payment processing, data analysis, and
                  marketing assistance.
                </li>
                <li>
                  Affiliates - Our subsidiaries and affiliates for the purposes
                  outlined in this Privacy Policy.
                </li>
                <li>
                  Legal Authorities - Law enforcement or regulatory bodies as
                  required by law or to protect our rights.
                </li>
                <li>
                  Business Transfers - In the event of a merger, acquisition, or
                  sale of all or part of our assets, your information may be
                  transferred to the new owner.
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures
                include encryption, access controls, and secure storage systems.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, comply
                with legal obligations, and resolve disputes. When personal
                information is no longer needed, we will securely delete or
                anonymize it.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Your Rights</h2>
              <ul className="list-unstyled bullet-list">
                <li>
                  Access - Request a copy of the personal information we hold
                  about you.
                </li>
                <li>
                  Correction - Request correction of any inaccurate or
                  incomplete information.
                </li>
                <li>
                  Deletion - Request deletion of your personal information,
                  subject to legal requirements.
                </li>
                <li>
                  Objection - Object to the processing of your personal
                  information under certain circumstances.
                </li>
                <li>
                  Data Portability - Request transfer of your personal
                  information to another organization.
                </li>
              </ul>
              <p>
                To exercise your rights, please contact us using the contact
                information provided below.
              </p>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect
                information about your interactions with our website. You can
                manage your cookie preferences through your browser settings.
                However, disabling cookies may affect the functionality of our
                website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                websites. We encourage you to review the privacy policies of
                these third parties.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We will notify
                you of any significant changes by posting the updated policy on
                our website and updating the "Effective Date" at the top of this
                policy.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mt-4">
              <h2 className="fw-bold fs-5">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <p>
                Address: Gate No - 2, Business District, 707/B, Lodha Supremus,
                Clariyant Compound, Kolshet Rd, Thane, Maharashtra 400607
                <br />
                Email: info@ssingularity.co.in
                <br />
                Phone: +91 9324251097 / 99677 14270
              </p>
              <p>
                By using our services or providing us with your personal
                information, you agree to the terms of this Privacy Policy.
                Thank you for trusting Ssingularity Technologies with your
                personal information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
