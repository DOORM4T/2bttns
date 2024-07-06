"use client";

import ThemeSwitcher from "./ThemeSwitcher";

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  const {} = props;
  return (
    <footer className="footer p-10 bg-base-100 text-base-content relative">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button
              className="btn btn-primary join-item"
              onClick={(e) => {
                e.preventDefault();
                window.alert("Not implemented");
              }}
            >
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
      <div className="absolute bottom-4 right-4">
        <ThemeSwitcher />
      </div>
    </footer>
  );
}