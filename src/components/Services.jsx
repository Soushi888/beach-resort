import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default function Services() {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: "free cockctails",
      info:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tenetur, repellendus temporibus quo aspernatur autem accusamus ad, mollitia dolores animi voluptatem cupiditate dignissimos qui doloribus eaque laboriosam voluptas debitis placeat!",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tenetur, repellendus temporibus quo aspernatur autem accusamus ad, mollitia dolores animi voluptatem cupiditate dignissimos qui doloribus eaque laboriosam voluptas debitis placeat!",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free shuttle",
      info:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tenetur, repellendus temporibus quo aspernatur autem accusamus ad, mollitia dolores animi voluptatem cupiditate dignissimos qui doloribus eaque laboriosam voluptas debitis placeat!",
    },
    {
      icon: <FaBeer />,
      title: "fStrongest beer",
      info:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tenetur, repellendus temporibus quo aspernatur autem accusamus ad, mollitia dolores animi voluptatem cupiditate dignissimos qui doloribus eaque laboriosam voluptas debitis placeat!",
    },
  ]);

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {services.map((s, i) => {
          return (
            <article key={i} className="service">
              <span>{s.icon}</span>
              <h6>{s.title}</h6>
              <p>{s.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
