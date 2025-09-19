import React from "react";
import { LinkListItem, List, ListItem } from "design-react-kit";
import { HowToListCard, type HowToListCardProps } from "./HowToListCard";

type HowToListProps = {
  howToList: HowToListCardProps[];
};

export const HowToList: React.FC<HowToListProps> = ({ howToList }) => (
  // <ul className="flex-fill px-4 flex-horizontal d-flex list-group-flush list-inline">
  <ul className="px-4 list-group list-group-horizontal">
    {howToList.map((card, index) => (
      <li
        key={card.title}
        className="flex-fill list-group-item bg-transparent"
        style={{
          border: "none",
          borderRight:
            index !== howToList.length - 1 ? "1px solid #BFDFFF" : "none",
        }}
      >
        <HowToListCard {...card} />
      </li>
    ))}
  </ul>
);
