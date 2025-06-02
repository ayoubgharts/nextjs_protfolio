import SectionTitle from "@/components/buttons/section-title/SectionTitle";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";

export const metadata = {
  title: "ayoubgharts | Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.privacy}>
      <Container>
        <div className={styles.privacyContainer}>
          <SectionTitle textContent={'Privacy Policy'} />
          <p>
            Welcome to our Privacy Policy page. We are committed to protecting
            your personal data and your right to privacy. If you have any
            questions or concerns about this policy or our practices with
            regards to your personal information, please contact us.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us
            when registering on the website, expressing an interest in obtaining
            information about us, or otherwise contacting us. The personal
            information we collect can include the following:
          </p>
          <ul>
            <li>
              Name and Contact Data: We collect your first and last name, email
              address, postal address, phone number, and other similar contact
              data.
            </li>
            <li>
              Credentials: We collect passwords, password hints, and similar
              security information used for authentication and account access.
            </li>
            <li>
              Payment Data: We collect data necessary to process your payment if
              you make purchases, such as your payment instrument number (e.g.,
              credit card number) and the security code associated with your
              payment instrument.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our website for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>
          <ul>
            <li>
              To send administrative information to you for business purposes,
              legal reasons, and contractual reasons.
            </li>
            <li>
              To manage user accounts, keep the website running smoothly, and
              enhance the user experience.
            </li>
            <li>
              To protect our services, including fraud monitoring and
              prevention.
            </li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>

          <h2>3. Cookies and Other Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to access or store
            information. Specific information about how we use such technologies
            and how you can refuse certain cookies is set out in our Cookie
            Policy.
          </p>

          <h2>4. Sharing Your Information</h2>
          <p>
            We do not share, sell, rent, or trade your information with third
            parties for their promotional purposes unless you have consented to
            such sharing. We may share your data with the following types of
            third parties:
          </p>
          <ul>
            <li>
              Service Providers: We may share your data with third-party service
              providers who help us with data analysis, marketing, payment
              processing, and more.
            </li>
            <li>
              Legal Requirements: We may disclose your personal information when
              required by law or to protect the security of our company and
              users.
            </li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as
            necessary to fulfill the purposes for which we collected it,
            including for the purposes of satisfying any legal, accounting, or
            reporting requirements.
          </p>

          <h2>6. Your Privacy Rights</h2>
          <p>
            Depending on where you reside, you may have certain rights regarding
            your personal data. These may include:
          </p>
          <ul>
            <li>
              The right to access – You can request copies of your personal
              data.
            </li>
            <li>
              The right to rectification – You can request correction of any
              information you believe is inaccurate.
            </li>
            <li>
              The right to erasure – You can request that we erase your personal
              data, under certain conditions.
            </li>
          </ul>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time in order to
            reflect changes to our practices or for other operational, legal, or
            regulatory reasons. We encourage you to review this page
            periodically for the latest information on our privacy practices.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our
            practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> ayoubgharts@gmail.com
            <br />
            <strong>Phone:</strong> +212 620-074838
          </p>
        </div>
      </Container>
    </main>
  );
}
