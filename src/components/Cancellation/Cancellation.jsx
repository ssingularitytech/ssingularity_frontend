import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Cancellation.css";
const Cancellation = () => {
  return (
    <>
      <Header />
      <div className="container main ">
        <div className="privacy col-md-8 offset-md-2">
          <div className="text-xl font-weight-bold">
            <h1 className="text-center display-4 fs-3">
              Cancellation And Refund Policy
            </h1>
          </div>
          {/* Purpose */}
          <div className="mt-4">
            <h2 className="font-weight-bold fs-5"> Purpose </h2>
            <p className="pt-2">
              The purpose of this Cancellation and Refund Policy is to outline
              the terms and conditions under which Ssingularity Technologies
              processes cancellations and refunds for its products and services.
              Our goal is to ensure a fair and transparent process for our
              customers while protecting the interests of our company.
            </p>
          </div>

          {/* Scope */}
          <div className="mt-4">
            <h2 className="font-weight-bold fs-5">Scope</h2>
            <p className="pt-2">
              This policy applies to all customers of Ssingularity Technologies
              who purchase our products and services. This includes, but is not
              limited to, software subscriptions, professional services, and
              consulting engagements.
            </p>
          </div>

          {/* Information */}
          <div className="mt-4">
            <h2 className="font-weight-bold fs-5"> Policy Details</h2>
            <h2 className="font-weight-bold fs-5"> 1. Cancellation Policy</h2>

            <p className="pt-2">1.1 Software Subscriptions</p>
            <ul className="list-unstyled  bullet-list">
              <li className="pt-2">
                Monthly Subscriptions- Customers may cancel their monthly
                subscription at any time. Cancellations will take effect at the
                end of the current billing cycle, and no further charges will be
                made. No refunds will be provided for the current billing cycle.
              </li>
              <li>
                Annual Subscriptions- Customers may cancel their annual
                subscription at any time. Cancellations will take effect at the
                end of the current annual period. Refunds will be prorated based
                on the number of months remaining in the subscription period.
              </li>
            </ul>
          </div>
          <div className="mt-2">
          <p className="pt-4">1.2 Professional Services and Consulting Engagements</p>
          <ul className="list-unstyled  bullet-list">
          <li className="pt-2">
                Scheduled Services- Customers may cancel scheduled services up
                to 48 hours before the service is to be rendered. Cancellations
                made within 48 hours of the scheduled service will incur a
                cancellation fee of 25% of the service fee.
              </li>
              <li>
                Ongoing Engagements- For ongoing consulting engagements, either
                party may terminate the agreement with 30 days’ written notice.
                Any services rendered up to the termination date will be billed
                accordingly.
              </li>
          </ul>
              
          </div>
          <div className="mt-4">
            <h2 className="font-weight-bold fs-5"> 2. Refund Policy </h2>
            <p className="pt-2 ">2.1 Software Subscriptions</p>

            <ul className="list-unstyled pl-3 bullet-list">
              <li className="pt-2">
                Monthly Subscriptions- Refunds are not provided for monthly
                subscriptions. Customers are encouraged to use the full month
                before deciding to cancel.
              </li>
              <li>
                Annual Subscriptions- Refunds for annual subscriptions will be
                prorated based on the number of months remaining in the
                subscription period. Refund requests must be made within 30 days
                of cancellation.
              </li>
            </ul>
           
          </div>
          <div className="mt-2">
            <p className="pt-4">
              2.2 Professional Services and Consulting Engagements
            </p>
            <ul className="list-unstyled  bullet-list">
              <li className="pt-2">
                Prepaid Services- Refunds for prepaid services will be provided
                for cancellations made at least 48 hours before the scheduled
                service, minus any applicable cancellation fees.
              </li>
              <li>
                Unused Hours- For consulting engagements billed on an hourly
                basis, refunds will be provided for any unused prepaid hours
                upon termination of the engagement.{" "}
              </li>
            </ul>
          </div>

          <div className="mt-2">
            <p className="pt-2">2.3 Customer Solutions Department</p>
            <ul className="list-unstyled pl-3 bullet-list">
              <li className="pt-2">
                Due to the nature of custom software development and bespoke
                solutions, refunds for these services are handled on a
                case-by-case basis. Customers should refer to their specific
                service agreement for details.
              </li>
              <li>
                Unused Hours- For consulting engagements billed on an hourly
                basis, refunds will be provided for any unused prepaid hours
                upon termination of the engagement.{" "}
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="font-weight-bold fs-5">3. Refund Process</h2>

            <ul className="list-unstyled pl-3 bullet-list">
              <li className="pt-2">
                Requesting a Refund- Customers must request a refund by
                contacting our Customer Service department at
                info@ssingularity.co.in or by calling our support number. The
                request should include the customer’s name, contact information,
                purchase details, and the reason for the refund request.
              </li>
              <li>
                Refund Approval- Refund requests will be reviewed and processed
                within 10 business days. Approved refunds will be issued via the
                original payment method used for the purchase.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="font-weight-bold fs-5">
              4. Exceptions and Special Cases
            </h2>

            <ul className="list-unstyled pl-3 bullet-list">
              <li className="pt-2">
                Force Majeure- In cases where services are canceled due to
                events beyond our control (e.g., natural disasters, acts of
                government), refunds will be handled on a case-by-case basis.
              </li>
              <li>
                Promotional Offers- Refunds for products or services purchased
                under promotional offers will be subject to the terms and
                conditions of the promotion.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="font-weight-bold fs-5"> 5. Dispute Resolution</h2>
            <ul className="list-unstyled pl-3 bullet-list">
              <li className="pt-2">
                Any disputes arising from cancellations or refunds will be
                handled by our company’s dispute resolution policy. Customers
                are encouraged to contact our Customer Service department to
                resolve any issues amicably.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="font-weight-bold fs-5"> 6. Policy Updates </h2>
            <ul className="list-unstyled pl-3 bullet-list">
              <li className="pt-2">
                This Cancellation and Refund Policy may be updated from time to
                time to reflect changes in our business practices or legal
                requirements. Customers will be notified of any significant
                changes through our website or direct communication.
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="font-weight-bold fs-5">Conclusion</h2>
            <p className="pt-2">
              Ssingularity Technologies is committed to providing high-quality
              products and services. We value our customers and aim to ensure
              their satisfaction through fair and transparent policies. If you
              have any questions or need further clarification, please contact
              our Customer Service department.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cancellation;
