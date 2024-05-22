// components/Footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LIVE EVENTS</h3>
            <ul>
              <li><Link href="#" className="hover:underline">Gita Samagam</Link></li>
              <li><Link href="#" className="hover:underline">Vedanta: Basics to Classics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">WISDOM CONTENT</h3>
            <ul>
              <li><Link href="#" className="hover:underline">Video Series</Link></li>
              <li><Link href="#" className="hover:underline">AP Books</Link></li>
              <li><Link href="#" className="hover:underline">AP Articles</Link></li>
              <li><Link href="#" className="hover:underline">AP Circle</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">MORE</h3>
            <ul>
              <li><Link href="#" className="hover:underline">About Acharya Prashant</Link></li>
              <li><Link href="#" className="hover:underline">Invite Him</Link></li>
              <li><Link href="#" className="hover:underline">Interview Him</Link></li>
              <li><Link href="#" className="hover:underline">Ghar Ghar Upanishad</Link></li>
              <li><Link href="#" className="hover:underline">Media and Public Interaction</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
            <ul>
              <li><Link href="#" className="hover:underline">For English</Link></li>
              <li><Link href="#" className="hover:underline">For Hindi</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">DOWNLOAD APP</h3>
            <ul>
              <li><Link href="#" className="hover:underline">Acharya Prashant</Link></li>
              <li><Link href="#" className="hover:underline">Get it on Google Play</Link></li>
              <li><Link href="#" className="hover:underline">Download on the App Store</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <ul>
              <li><Link href="mailto:support@advait.org.in" className="hover:underline">support@advait.org.in</Link></li>
              <li><Link href="tel:+919650585100" className="hover:underline">+91 9650585100</Link></li>
              <li><Link href="tel:+919650585100" className="hover:underline">+91 9650585100</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">&copy; 2022 PrashantAdvait Foundation</p>
          <ul className="flex justify-center space-x-4 mt-2 text-sm text-gray-500">
            <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
            <li><span>|</span></li>
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            <li><span>|</span></li>
            <li><Link href="#" className="hover:underline">Undertaking</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
