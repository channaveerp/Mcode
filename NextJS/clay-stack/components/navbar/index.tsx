"use client";

import Link from "next/link";
import "./index.scss";
import Image from "next/image";
import { useRef } from "react";
import More from "@/icons/more";
import Close from "@/icons/close";
export default function Navbar() {
  const navRef: any = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <main className="navbar">
        <Link href="" className="main-logo">
          <div
            style={{
              aspectRatio: "16/36",
              width: "16px",
              position: "relative",
              objectFit: "fill",
              marginRight: "8px",
            }}
          >
            <Image className="logo" src="/img/logo-small.svg" alt="logo" fill />
          </div>
          <h1 className="heading03">ClayStack</h1>
        </Link>
        {/* desk top nav-bar */}
        <ul className="nav-item-container">
          <li>
            <Link href="" className="nav-item">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="" className="nav-item">
              BLOG
            </Link>
          </li>
          <li>
            <Link href="" className="nav-item">
              NODE OPERATORS
            </Link>
          </li>
          <li>
            <Link href="" className="nav-item">
              CAREERS
            </Link>
          </li>
          <li>
            <Link href="" className="nav-item">
              MORE
            </Link>
          </li>
          <li>
            <button className="get-started-btn">Get Started</button>
          </li>
        </ul>
        {/* small screen nav bar */}
        <div onClick={showNavbar} className="show-more-nav-items-btn">
          <More width={36} height={36} />
        </div>
      </main>
      <main className="navbar mobile-nav">
        <nav ref={navRef}>
          <Link href="" className="main-logo">
            <div
              style={{
                aspectRatio: "16/36",
                width: "16px",
                position: "relative",
                objectFit: "fill",
                marginRight: "8px",
              }}
            >
              <Image
                className="logo"
                src="/img/logo-small.svg"
                alt="logo"
                fill
              />
            </div>
            <h1 className="heading03">ClayStack</h1>
          </Link>
          <div className="mobile-nav-items">
            <div className="get-started-btn">
              <button>Get Started</button>
            </div>
            <div className="mobile-nav-item">
              <div className="show-bg">
                <Link href="">ABOUT US</Link>
              </div>
              <div className="show-border">
                <Link href="">BLOG</Link>
              </div>
              <div className="show-border">
                <Link href="">NODE OPERATORS</Link>
              </div>
              <div className="show-border">
                <Link href="">CAREERS</Link>
              </div>
              <div className="show-border">
                <Link href="">MORE</Link>
              </div>
            </div>
            <div className="update-form">
              <h4 className="heading03">Stay Updated</h4>
              <div className="form-container">
                <input placeholder="Enter Email" type="text" />
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div onClick={showNavbar} className="close-nav-items-btn">
            <Close width={36} height={36} />
          </div>
        </nav>
      </main>
    </>
  );
}
