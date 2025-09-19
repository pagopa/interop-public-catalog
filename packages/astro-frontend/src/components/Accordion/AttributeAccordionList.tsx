import { Accordion } from "design-react-kit";
import React, { useState } from "react";
import { AttributeAccordion } from "./AttributeAccordion";

type AttributeAccordionListProps = {
  attributes: Array<{ name: string; description: string }>;
};

export const AttributeAccordionList: React.FC<AttributeAccordionListProps> = ({
  attributes,
}) => {
  const [collapseElementOpen, setCollapseElement] = useState("");

  const handleToggle = (index: string): void => {
    if (collapseElementOpen === index) {
      setCollapseElement("");
    } else {
      setCollapseElement(index);
    }
  };

  return (
    <Accordion>
      {attributes.map((attribute, index) => (
        <AttributeAccordion
          attributeName={attribute.name}
          attributeDescription={attribute.description}
          isOpen={collapseElementOpen === `${index}`}
          onToggle={(): void => handleToggle(`${index}`)}
        />
      ))}
    </Accordion>
  );
};
