import React, { Fragment, useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Button from "../../UI/Button/Button";

const ProjectsMobile = ({ items, isLoading }) => {
  const [visible, setVisible] = useState(3);
  const [mobCards, setMobCards] = useState([]);

  useEffect(() => {
    if (items?.length > 3) {
      setMobCards(items?.slice(0, visible));
    } else {
      setMobCards(items);
    }
  }, [visible, items]);

  const showMoreItems = () => {
    setVisible((prevVisible) => prevVisible + 3);
  };

  return (
    <>
      <div
        data-testid={"mobile-slider"}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {mobCards?.map((item, index) => (
          <Fragment key={index}>
            <ProjectCard
              image={item.image}
              title={item.title}
              dates={item.period}
              age={item.age_category}
              description={item.description}
              isLoading={isLoading}
              isActive={item["is_active"]}
              url={item.url}
            />
          </Fragment>
        ))}
        {items && visible < items.length && (
          <Button
            variant={"tertiary"}
            style={{ width: "100%" }}
            onClick={showMoreItems}
          >
            Дивитись більше
          </Button>
        )}
      </div>
    </>
  );
};

export default ProjectsMobile;
