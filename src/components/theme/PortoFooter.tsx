"use client";

import Link from "next/link";
import { ROUTES } from "@/core/constants/routes";
import { appConfig } from "@/core/config/app.config";

export function PortoFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="font-bold text-white text-sm uppercase">Sign Up to Newsletter</h4>
            </div>
            <div>
              <p className="text-sm">Get all the latest information on Events, Sales and Offers.</p>
              <span className="text-sm font-semibold text-white block">Receive $10 coupon for first shopping.</span>
            </div>
            <form action="#" className="flex gap-2 w-full md:max-w-md">
              <input
                type="email"
                placeholder="Enter your Email address..."
                className="flex-1 rounded border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button type="submit" className="rounded bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href={ROUTES.HOME}>
              <img
                className="logo h-12 w-auto brightness-0 invert opacity-90"
                src="/images/logo-black.png"
                alt={`${appConfig.name} Logo`}
                width={220}
                height={80}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/logo-placeholder.svg";
                }}
              />
            </Link>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-white uppercase text-xs mb-1">Address</h4>
                <a href="#" className="hover:text-white">123 Street Name, City, England</a>
              </div>
              <div>
                <h4 className="font-semibold text-white uppercase text-xs mb-1">Phone</h4>
                <a href="#">Toll Free (123) 456-7890</a>
              </div>
              <div>
                <h4 className="font-semibold text-white uppercase text-xs mb-1">Email</h4>
                <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a>
              </div>
              <div>
                <h4 className="font-semibold text-white uppercase text-xs mb-1">Hours</h4>
                <span>Mon - Sun / 9:00AM - 8:00PM</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white uppercase text-sm mb-3">Account</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.ACCOUNT} className="hover:text-white">My Account</Link></li>
              <li><a href="#" className="hover:text-white">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white">Payment Methods</a></li>
              <li><Link href={ROUTES.ACCOUNT_ORDERS} className="hover:text-white">Orders History</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white uppercase text-sm mb-3">About</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Terms And Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="hover:text-white">Return Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white uppercase text-sm mb-3">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.CATALOG} className="hover:text-white">Catalog</Link></li>
              <li><Link href={ROUTES.CART} className="hover:text-white">Cart</Link></li>
              <li><Link href={ROUTES.LOGIN} className="hover:text-white">Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 mt-8 border-t border-gray-700">
          <span className="text-sm text-gray-400">© {appConfig.name}. {currentYear}. All Rights Reserved</span>
          <img src="/images/demoes/demo22/payment-icon.png" alt="Payment methods" width={200} height={27} className="opacity-80" />
        </div>
      </div>
    </footer>
  );
}
