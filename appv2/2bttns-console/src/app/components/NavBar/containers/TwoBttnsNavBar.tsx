"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import NavBar from "../views/NavBar";
import { getAvatarLetterFromSession } from "@/lib/utils";

export type TwoBttnsNavBarProps = {};

export default function TwoBttnsNavBar(props: TwoBttnsNavBarProps) {
  const {} = props;
  const { data: session } = useSession({ required: false });

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      <NavBar
        title="2bttns"
        navbarEndContent={
          <>
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            {session?.user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar placeholder"
                >
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <span>{getAvatarLetterFromSession(session)}</span>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <p>Logged in as: {session.user.email}</p>
                  <div className="divider"></div>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button
                      className="btn btn-sm btn-ghost"
                      onClick={handleSignOut}
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {!session?.user && (
              <button className="btn btn-sm" onClick={() => signIn("keycloak")}>
                Login
              </button>
            )}
          </>
        }
      />
    </div>
  );
}
