import React, { useRef } from "react";
import "./index.css";

export default function NestedScroll() {
  // const parentRef = useRef(null);
  // const ulRef = useRef(null);

  // const handleScroll = () => {
  //   if (parentRef.current && ulRef.current) {
  //     const parent = parentRef.current;
  //     const ul = ulRef.current;

  //     if (parent.scrollTop + parent.clientHeight >= parent.scrollHeight) {
  //       ul.style.overflowY = "auto";
  //     }
  //     // else {
  //     //   ul.style.overflowY = "hidden";
  //     // }
  //   }
  // };
  return (
    <div
      style={{
        width: "700px",
        overflowY: "scroll",
        margin: "auto",
        height: "98vh",
        padding: "20px",
      }}
      // ref={parentRef}
      // onScroll={handleScroll}
    >
      <p>Hello</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.{" "}
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.{" "}
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.{" "}
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.{" "}
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s.Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.{" "}
      </p>

      <div>
        <p style={{ height: "400px" }}> test</p>
        <ul
          style={{
            height: "600px",
            // overflowY: "unset",
            overscrollBehavior: "contain",
          }}
          // ulRef={ulRef}
        >
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.{" "}
          </li>

          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.{" "}
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.{" "}
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.{" "}
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.{" "}
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.{" "}
          </li>
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
