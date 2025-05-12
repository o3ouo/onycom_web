import React, { useState } from "react";
import ButtonGroup from "../components/ButtonGroup";
import PartnerGroup from "../components/PartnerGroup";
import { partnerData } from "../data/partnerData";

const CustomerStories = () => {
  const [selectedCategory, setSelectedCategory] = useState("Manufacturing");

  const filteredPartners = partnerData.filter(
    (item) =>
      item.category &&
      item.category.trim().toLowerCase() ===
        selectedCategory.trim().toLowerCase()
  );

  return (
    <section className="customer-stories">
      <div className="inner">
        <h2>
          <span>Customer Stories</span>
          Leaders in business place their trust in Onycom
        </h2>

        <ButtonGroup setSelectedCategory={setSelectedCategory} />

        <div className="partner-wrap">
          {filteredPartners.map((item, index) => (
            <PartnerGroup
              key={index}
              title={item.title}
              text={item.text}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
