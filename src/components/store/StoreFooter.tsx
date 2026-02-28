import Link from "next/link";

const QUICK_LINKS = [
  "Laptops & Computers",
  "Cameras & Photography",
  "Smart Phones & Tablets",
  "Video Games & Consoles",
  "TV & Audio",
  "Gadgets",
  "Waterproof Headphones",
];

const COMPANY_LINKS = ["About", "Contact", "Wishlist", "Compare", "FAQ", "Store Directory"];

const CUSTOMER_LINKS = [
  "My Account",
  "Track your Order",
  "Customer Service",
  "Returns/Exchange",
  "FAQs",
  "Product Support",
];

export function StoreFooter() {
  return (
    <footer className="mt-8">
      <div className="bg-[#fed700]">
        <div className="container mx-auto px-4 py-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-gray-900 text-sm md:text-base text-center lg:text-left">
            Sign up to Newsletter <span className="mx-2">...and receive</span>
            <span className="font-semibold">$20 coupon for first shopping</span>
          </p>
          <form className="flex items-center bg-white rounded-full overflow-hidden w-full lg:w-[460px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full min-w-0 px-3 sm:px-4 py-2.5 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#2f3a47] text-white px-4 sm:px-6 py-2.5 text-sm font-medium hover:bg-[#1f2937] transition-colors shrink-0"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#f3f3f3] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              electro<span className="text-[#fed700]">.</span>
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Got Questions? Call us 24/7!</p>
            <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-100 leading-tight mt-1">(800) 8001-8588</p>
            <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-100 leading-tight">(0600) 874 548</p>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-1">Contact Info</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>

            <div className="mt-4 flex items-center gap-4 text-gray-500 dark:text-gray-400 text-lg">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-whatsapp" />
              <i className="fab fa-pinterest-p" />
              <i className="fab fa-linkedin-in" />
              <i className="fab fa-instagram" />
              <i className="fab fa-youtube" />
              <i className="fas fa-rss" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">Find It Fast</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {QUICK_LINKS.map((item) => (
                <li key={item}>
                  <Link href="/catalog" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <Link href="/catalog" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-3">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {CUSTOMER_LINKS.map((item) => (
                <li key={item}>
                  <Link href="/catalog" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">© Electro - All Rights Reserved</p>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-semibold tracking-wide text-center md:text-right">
              DISCOVER &nbsp; MASTERCARD &nbsp; PayPal &nbsp; Skrill &nbsp; VISA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
