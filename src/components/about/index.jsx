import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Painter Of This Piece Of Art
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am Aditya Chauhan, a passionate developer currently exploring the realms of Web and App Development, Machine Learning, and Competitive Programming. As a B.Tech student at the prestigious Indraprastha Institute of Information Technology, Delhi, I am continually refining my skills in various domains like Data Structures, Algorithms, Electronics, and VLSI Engineering.

My toolkit includes an array of languages and frameworks, from C++ and Java to React.js, Node.js, and Kotlin, allowing me to build scalable and efficient systems. Whether it’s crafting dynamic, user-friendly websites with React.js, creating cross-platform mobile apps with React Native, or diving deep into the world of machine learning with TensorFlow and Keras, I aim to blend technical precision with creativity.

I thrive on challenges and take pride in tackling complex problems—be it in the form of algorithmic puzzles or in developing systems that span from decentralized file storage solutions to advanced image segmentation models. With an ever-growing curiosity and a commitment to learning, I am excited to shape the future of technology while continuously honing my craft.

Let’s connect and explore how we can collaborate on the next groundbreaking project!
          </p>
        </ItemLayout>

        
        
      </div>
    </section>
  );
};

export default AboutDetails;
