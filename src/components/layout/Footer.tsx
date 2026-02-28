import Link from "next/link";
import { ROUTES } from "@/core/constants/routes";
import { appConfig } from "@/core/config/app.config";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold">{appConfig.name}</h5>
            <p className="text-secondary small mb-0">
              {appConfig.description}
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase text-secondary">Shop</h6>
            <ul className="list-unstyled">
              <li>
                <Link href={ROUTES.CATALOG} className="text-light text-decoration-none">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href={ROUTES.CART} className="text-light text-decoration-none">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase text-secondary">Account</h6>
            <ul className="list-unstyled">
              <li>
                <Link href={ROUTES.ACCOUNT} className="text-light text-decoration-none">
                  My account
                </Link>
              </li>
              <li>
                <Link href={ROUTES.ACCOUNT_ORDERS} className="text-light text-decoration-none">
                  Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <p className="text-secondary small mb-0">
          © {currentYear} {appConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
