import { Accordion } from "design-react-kit";
import React, { useState } from "react";
<<<<<<< HEAD
import AttributeAccordion from "./AttributeAccordion.js"; // TODO check why getting an error
=======
import { AttributeAccordion } from "./AttributeAccordion";
>>>>>>> 0292c9d (Implemented AttributeAccordionList and AttributeAccordionItem)

type AttributeAccordionListProps = {
  attributes: Array<{ name: string; description: string }>;
};

<<<<<<< HEAD
const AttributeAccordionList: React.FC<AttributeAccordionListProps> = ({
=======
export const AttributeAccordionList: React.FC<AttributeAccordionListProps> = ({
>>>>>>> 0292c9d (Implemented AttributeAccordionList and AttributeAccordionItem)
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
          key={index}
          attributeName={attribute.name}
          attributeDescription={attribute.description}
          isOpen={collapseElementOpen === `${index}`}
          onToggle={(): void => handleToggle(`${index}`)}
        />
      ))}
    </Accordion>
  );
};

export default AttributeAccordionList;
