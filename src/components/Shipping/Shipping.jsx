import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './Shipping.css'
const Shipping = () => {
  return (
    <>
      <Header />

      <div className="container mt-5">
      <div className="Shipping col-md-8 offset-md-2">
        <div className="text-center">
          <h1 className="display-4 font-weight-bold fs-3">Shipping And Delivery Policy</h1>
        </div>

        {/* Purpose */}
        <div className="mt-3">
          <h2 className="font-weight-bold fs-5">Purpose</h2>
          <p className="mt-3">
            The purpose of this Shipping and Delivery Policy is to outline the terms and conditions under which Ssingularity Technologies handles the delivery of its services. Our goal is to ensure a clear and transparent process for our clients while maintaining efficient and timely delivery of our services.
          </p>
        </div>

        {/* Scope */}
        <div className="mt-3">
          <h2 className="font-weight-bold fs-5">Scope</h2>
          <p className="mt-3">
            This policy applies to all clients of Ssingularity Technologies who utilize our services.
          </p>
        </div>

        {/* Information */}
        <div className="mt-3">
          <h2 className="font-weight-bold fs-5">Policy Details</h2>
          <h2 className="font-weight-bold mt-3 fs-5">1. Service Delivery Methods</h2>
          <ul className="list-unstyled mt-3 bullet-list">
            
            <li className="mt-3">
              Digital Delivery- Most of our services are delivered digitally through secure online platforms, email, or other electronic means. The specifics of delivery will be communicated to the client upon confirmation of the service order.
            </li>
            <li className="mt-3">
              On-site Delivery - For certain services that require physical presence, our team will coordinate with the client to schedule on-site visits. The timing and details of the on-site service delivery will be mutually agreed upon.
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h2 className="font-weight-bold fs-5">2. Service Delivery Costs</h2>
          <ul className="list-unstyled mt-3 bullet-list">
            <li className="mt-3">
              Standard Delivery - The cost for standard digital delivery is included in the service fee unless otherwise specified. For on-site services, additional travel expenses may apply and will be communicated to the client in advance.
            </li>
            <li className="mt-3">
              Expedited Delivery - For clients requiring expedited service delivery, additional fees may apply. These will be discussed and agreed upon prior to the commencement of services.
            </li>
            <li className="mt-3">
              International Delivery- For services delivered outside the domestic region, any additional costs, including travel expenses for on-site services, will be communicated and agreed upon in advance.
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h2 className="font-weight-bold fs-5">3. Order Processing</h2>
          <ul className="list-unstyled mt-3 bullet-list">
            <li className="mt-3">
              Order Confirmation - Once an order for services is placed, clients will receive an order confirmation email containing the service details and an estimated delivery timeline.
            </li>
            <li className="mt-3">
              Service Commencement - The delivery of services will commence as per the agreed timeline and method of delivery. Clients will be kept informed of the progress and any potential changes to the delivery schedule.
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h2 className="font-weight-bold fs-5">4. Service Delivery</h2>
          <ul className="list-unstyled mt-3 bullet-list">
            <li className="mt-3">
              Delivery Times - Delivery times are estimates and may vary due to factors beyond our control, such as technical issues, client availability, or unforeseen delays.
            </li>
            <li className="mt-3">
              Client Availability - For on-site and interactive digital services, clients must be available at the scheduled time. Any rescheduling due to client unavailability must be communicated at least 24 hours in advance.
            </li>
            <li className="mt-3">
              Lost or Delayed Services - In the event of a delay or inability to deliver the service as scheduled, clients should contact our Customer Service department. We will work to resolve the issue promptly and ensure the delivery of the service.
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h2 className="font-weight-bold fs-5">5. Returns and Refunds</h2>
          <ul className="list-unstyled mt-3 bullet-list">
            <li className="mt-3">
              Service Satisfaction - If a client is not satisfied with the service provided, they should contact our Customer Service department within 7 days of service delivery to discuss concerns and potential resolutions.
            </li>
            <li className="mt-3">
              Refunds and Exchanges- Refunds and exchanges will be processed as per our Cancellation and Refund Policy, which will be provided to the client at the time of service order confirmation.
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h2 className="font-weight-bold fs-5">Policy Updates</h2>
          <p className="mt-3">
            This Shipping and Delivery Policy may be updated from time to time to reflect changes in our business practices or legal requirements. Clients will be notified of any significant changes through our website or direct communication.
          </p>
        </div>

        <div className="mt-3">
          <h2 className="font-weight-bold fs-5">Conclusion</h2>
          <p className="mt-3">
            Ssingularity Technologies is committed to providing efficient and reliable service delivery. We aim to ensure that our clients receive their services in a timely and satisfactory manner. If you have any questions or need further clarification, please contact our Customer Service department.
          </p>
        </div>
      </div>
</div>
      <Footer />
    </>
  );
};

export default Shipping;
