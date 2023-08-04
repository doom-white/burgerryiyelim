import React from "react";
import "../styles/About.css";
import BannerImage from "../assets/banneryeni.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt
          corrupti quis amet iste, omnis nisi totam dignissimos eligendi nihil
          repellat numquam exercitationem provident atque quidem, qui quam
          perspiciatis debitis fugiat impedit cupiditate ex ut accusamus.
          Sapiente optio labore dignissimos vero possimus debitis sunt magnam
          corporis sequi. Possimus magni nisi odit quia, recusandae harum minus
          maxime quos fuga explicabo quas voluptatibus. Inventore amet
          consequatur assumenda alias ullam. Nihil ex eaque laborum voluptatum
          dolore voluptas itaque eos. Sequi voluptatem sit, consequuntur tenetur
          ab explicabo fugiat porro, consequatur deserunt nostrum natus quas
          minus architecto error quos molestias voluptas quo nesciunt, ipsum hic
          molestiae quisquam. Nihil inventore porro reiciendis ex amet saepe,
          cupiditate nisi, accusamus vero sint quis odio quidem magnam ipsam
          libero. Quas iste, ipsa voluptas ducimus ipsam facilis accusantium
          ipsum quasi quam dignissimos inventore expedita vel nulla ab aliquid
          architecto amet quibusdam? Reiciendis maxime voluptatem quod hic at
          ullam autem blanditiis est. Est expedita labore unde autem nostrum
          quisquam incidunt quos molestiae nam ut. Debitis autem voluptate,
          magnam ea nemo eligendi vel? Iusto cum impedit amet consequatur atque
          labore! Libero vero dicta veritatis voluptate numquam totam ad
          voluptatum doloremque, ex esse modi ullam minima iste earum officiis
          mollitia nulla eligendi quisquam distinctio. Rem unde distinctio
          voluptas, vitae a eius saepe, id quas asperiores ab veniam dolore
          obcaecati laborum rerum dolorum aliquam corrupti vel, necessitatibus
          beatae eos nemo ut! Nisi, praesentium deleniti. Accusantium corrupti
          eaque aperiam aspernatur? Voluptatem, ad voluptas accusantium
          blanditiis libero assumenda aliquam dignissimos exercitationem
          officia. Nemo itaque iste optio.
        </p>
      </div>
    </div>
  );
};

export default About;
