"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";

const Header = () => (
  <>
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
          <div className="content">
            <div className="title">MUSIC FESTIVAL</div>
            <div className="topic">EVOLVING</div>
            <div className="des">
              EVOLVING redefines the music festival experience, offering a
              unique investment opportunity. Inspired by globally renowned
              events like Afterlife, EVOLVING curates an immersive journey that
              transcends the ordinary. Our carefully selected lineup of
              international and local artists, combined with cutting-edge
              production and a breathtaking outdoor setting, creates an
              unparalleled atmosphere for attendees.
            </div>
            {/* <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div> */}
          </div>
        </div>
        <div className="item">
          <img src="/2.jpg" />
          <div className="content">
            <div className="title">MUSIC FESTIVAL</div>
            <div className="topic">EVOLVING</div>
            <div className="des">
              EVOLVING redefines the music festival experience, offering a
              unique investment opportunity. Inspired by globally renowned
              events like Afterlife, EVOLVING curates an immersive journey that
              transcends the ordinary. Our carefully selected lineup of
              international and local artists, combined with cutting-edge
              production and a breathtaking outdoor setting, creates an
              unparalleled atmosphere for attendees. Yes! EVOLVING is more than
              just a festival; it's a brand that fosters a loyal community and
              generates revenue through diverse channels, including ticketing,
              merchandise, and brand partnerships. Investing in EVOLVING means
              tapping into a thriving market and aligning with a concept that
              resonates with music enthusiasts worldwide.
            </div>
            {/* <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div> */}
          </div>
        </div>
        <div className="item">
          <img src="/3.jpg" />
          <div className="content">
            <div className="title">MUSIC FESTIVAL</div>
            <div className="topic">EVOLVING</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            {/* <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div> */}
          </div>
        </div>
        <div className="item">
          <img src="/4.jpg" />
          <div className="content">
            <div className="title">MUSIC FESTIVAL</div>
            <div className="topic">EVOLVING</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            {/* <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div> */}
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
          <img src="/3.jpg" />
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
  </>
);

export default Header;
