"use client";

import Link from "next/link";
import { ROUTES } from "@/core/constants/routes";
import { appConfig } from "@/core/config/app.config";

export function Header() {
  return (
    <header className="border-bottom">
      <nav className="navbar navbar-expand-lg navbar-light bg-white container">
        <Link className="navbar-brand fw-bold" href={ROUTES.HOME}>
          {appConfig.name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" href={ROUTES.CATALOG}>
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={ROUTES.CART}>
                Cart
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href={ROUTES.LOGIN}>
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={ROUTES.REGISTER}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
