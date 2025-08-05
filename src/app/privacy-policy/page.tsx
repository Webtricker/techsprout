import Title from '@/components/Title';

export default function PrivacyPolicyPage() {
  return (
    <div className='container mx-auto max-w-3xl px-4 py-20 md:py-30'>
      <Title h={2}> Privacy Policy</Title>
      <p className='mb-12 text-center text-gray-600'>Last updated: June 5, 2024</p>

      <section className='mb-10'>
        <Title h={2}>1. Introduction</Title>
        <p className='leading-relaxed text-gray-700'>
          collects, uses, and shares your personal information when you use our website, products,
          to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section className='mb-10'>
        <Title h={2}> 2. Information We Collect</Title>
        <p className='mb-4 leading-relaxed text-gray-700'>
          We collect several types of information for various purposes to provide and improve our
          Service to you.
        </p>
        <h3 className='mb-2 text-xl font-medium text-gray-800'>Personal Data</h3>
        <p className='mb-4 leading-relaxed text-gray-700'>
          While using our Service, we may ask you to provide us with certain personally identifiable
          identifiable information may include, but is not limited to:
        </p>
        <ul className='list-inside list-disc pl-4 leading-relaxed text-gray-700'>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Cookies and Usage Data</li>
        </ul>
        <h3 className='mt-6 mb-2 text-xl font-medium text-gray-800'>Usage Data</h3>
        <p className='leading-relaxed text-gray-700'>
          (e.g., IP address), browser type, browser version, the pages of our Service that you
          visit, the time and date of your visit, the time spent on those pages, unique device
          identifiers and other diagnostic data.
        </p>
      </section>

      <section className='mb-10'>
        <Title h={2}> 3. How We Use Your Information</Title>
        <p className='mb-4 leading-relaxed text-gray-700'>
          TechSprout uses the collected data for various purposes:
        </p>
        <ul className='list-inside list-disc pl-4 leading-relaxed text-gray-700'>
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service when you choose to do
            so
          </li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
          <li>To monitor the usage of our Service</li>
          <li>To detect, prevent and address technical issues</li>
          <li>
            To provide you with news, special offers and general information about other goods,
            services and events which we offer that are similar to those that you have already
            purchased or enquired about unless you have opted not to receive such information
          </li>
        </ul>
      </section>

      <section className='mb-10'>
        <Title h={2}> 4. How We Share Your Information</Title>
        <p className='mb-4 leading-relaxed text-gray-700'>
          We may share your information in the following situations:
        </p>
        <ul className='list-inside list-disc pl-4 leading-relaxed text-gray-700'>
          <li>
            <strong>With Service Providers:</strong> We may share your Personal Data with service
            providers to monitor and analyze the use of our Service, to contact you.
          </li>
          <li>
            <strong>For Business Transfers:</strong> We may share or transfer your Personal Data in
            connection with, or during negotiations of, any merger, sale of company assets,
            financing, or acquisition of all or a portion of our business to another company.
          </li>
          <li>
            <strong>With Affiliates:</strong> We may share your information with our affiliates, in
            which case we will require those affiliates to honor this Privacy Policy.
          </li>
          <li>
            <strong>With Business Partners:</strong> We may share your information with our business
            partners to offer you certain products, services or promotions.
          </li>
          <li>
            <strong>With Other Users:</strong> When you share personal information or otherwise
            interact in the public areas with other users, such information may be viewed by all
            users and may be publicly distributed outside.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may disclose your personal information for any
            other purpose with your consent.
          </li>
        </ul>
      </section>

      <section className='mb-10'>
        <Title h={2}>5. Your Choices</Title>
        <p className='mb-4 leading-relaxed text-gray-700'>
          You have certain choices regarding the personal information we collect and how it is used:
        </p>
        <ul className='list-inside list-disc pl-4 leading-relaxed text-gray-700'>
          <li>
            <strong>Opt-Out of Marketing Communications:</strong> You can opt-out of receiving
            marketing communications from us by following the unsubscribe link or instructions
            provided in any email we send.
          </li>
          <li>
            <strong>Access, Update, or Delete Your Information:</strong> You may have the right to
            access, update, or request deletion of your personal information. Please contact us to
            exercise these rights.
          </li>
        </ul>
      </section>

      <section className='mb-10'>
        <Title h={2}>6. Data Security</Title>
        <p className='leading-relaxed text-gray-700'>
          The security of your data is important to us, but remember that no method of transmission
          over the Internet, or method of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Data, we cannot guarantee its
          absolute security.
        </p>
      </section>

      <section className='mb-10'>
        <Title h={2}> 7. Children Privacy</Title>
        <p className='leading-relaxed text-gray-700'>
          collect personally identifiable information from anyone under the age of 18. If you are a
          parent or guardian and you are aware that your child has provided us with Personal Data,
          please contact us. If we become aware that we have collected Personal Data from a child
          without verification of parental consent, we take steps to remove that information from
          our servers.
        </p>
      </section>

      <section className='mb-10'>
        <Title h={2}> 8. Changes to This Privacy Policy</Title>
        <p className='leading-relaxed text-gray-700'>
          We may update our Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page. We will let you know via email and/or a
          prominent notice on our Service, prior to the change becoming effective and update the
          Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective
          when they are posted on this page.
        </p>
      </section>

      <section>
        <Title h={2}>9. Contact Us</Title>
        <p className='mb-4 leading-relaxed text-gray-700'>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul className='list-inside list-disc pl-4 leading-relaxed text-gray-700'>
          <li>
            By email:{' '}
            <a href='mailto:info@example.com' className='text-primary hover:underline'>
              info@example.com
            </a>
          </li>
          <li>
            By visiting this page on our website:{' '}
            <a href='/contact' className='text-primary hover:underline'>
              /contact
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
