import React from "react";
import { ReactComponent as CasesNext } from "../assets/arrow-right.svg";
import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "$1,600,000 - $1,700,000",
    title: "1991 Ferrari F40",
    img: "Ferrari F40",
  },
  {
    id: 2,
    subtitle: "$€300,000 - €500,000",
    title: "1984 Lamborghini Countach LP500 S",
    img: "Lamborghini Countach",
  },
  {
    id: 3,
    subtitle: "$2,600,000 - $2,900,000",
    title: "2019 Koenigsegg Regera",
    img: "Koenigsegg Regera",
  },


  
];

function Cases() {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.jpg`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;
