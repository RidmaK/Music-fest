"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CountDown } from "../sections";

const Header = () => {
  useEffect(() => {
    // JavaScript code to handle the carousel functionality
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    let timeDom = document.querySelector(".carousel .time");

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []);

  return (
    <div className="relative">
      <header>
        <nav>
          <a href="">Home</a>
          <a href="">Contacts</a>
          <a href="">Info</a>
        </nav>
      </header>

      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src="/1.jpg" />
            <div className="overlay"></div>
            <div className="content">
              <div className="title">MUSIC FESTIVAL</div>
              <div className="topic">EVOLVING</div>
              <div className="des">
                EVOLVING redefines the music festival experience, offering a
                unique investment opportunity. Inspired by globally renowned
                events like Afterlife, EVOLVING curates an immersive journey
                that transcends the ordinary. Our carefully selected lineup of
                international and local artists, combined with cutting-edge
                production and a breathtaking outdoor setting, creates an
                unparalleled atmosphere for attendees.
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/2.jpg" />
            <div className="overlay"></div>
            <div className="content">
              <div className="title">Organizing by Noiyse</div>
              <div className="topic">EVOLVING</div>
              <div className="des">
                iIt’s about to be electrified by Sri Lanka's very own DJ Noiyse!
                A master at igniting the dance floor, Noiyse has shared the
                stage with top local and international talent. His signature
                sound is guaranteed to keep you moving all night long at
                EVOLVING!
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/3.jpeg" />
            <div className="overlay"></div>
            <div className="content">
              <div className="title">The Target Audience</div>
              <div className="topic">EVOLVING</div>
              <div className="des">
                Music enthusiasts aged 18-40, seeking immersive experiences and
                passionate about electronic music, drawn to both international
                and local talent. We anticipate a vibrant crowd of 3,000
                attendees, united by a love for music and a desire to connect
                with others through shared passions.
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/4.jpg" />
            <div className="overlay"></div>
            <div className="content">
              <div className="title">Location - Ibeach</div>
              <div className="topic">EVOLVING</div>
              <div className="des">
                iBeach is a place where the music meets the waves! With stunning
                sea views, versatile event spaces, and a reputation for
                unforgettable parties, iBeach is the perfect backdrop to elevate
                EVOLVING into an epic experience.
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail">
          <div className="item">
            <img src="/1.jpg" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src="/2.jpg" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src="/3.jpeg" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
            <img src="/4.jpg" />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        </div>

        <div className="arrows">
          <button id="prev">{`<`}</button>
          <button id="next">{`>`}</button>
        </div>
        <div className="time"></div>
      </div>
      <div className="countdown-section absolute top-0 right-0 p-4">
        <CountDown />
      </div>
    </div>
  );
};

export default Header;
