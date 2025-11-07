import { useEffect, useRef } from "react";
import {
  BootstrapItaliaIcon,
  type BootstrapItaliaIconProps,
} from "./BootstrapItaliaIcon.js";
import { initPopover } from "../../config/bootstrap-italia.js";

interface PopoverIconProps {
  title: string;
  content: string;
  iconName: BootstrapItaliaIconProps["name"];
  iconColor?: BootstrapItaliaIconProps["color"];
  iconSize?: BootstrapItaliaIconProps["size"];
  ariaLabel?: string;
}

export const PopoverIcon: React.FC<PopoverIconProps> = ({
  title,
  content,
  iconName,
  iconColor,
  iconSize,
  ariaLabel,
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let popover = null;
    if (ref.current) {
      popover = initPopover(ref.current);
    }

    return () => {
      if (popover) {
        popover.dispose();
      }
    };
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      className="btn btn-link p-0 d-inline-flex align-items-center ms-2"
      data-bs-toggle="popover"
      data-bs-placement="bottom"
      data-bs-title={title}
      data-bs-content={content}
      aria-label={ariaLabel || title}
    >
      <BootstrapItaliaIcon name={iconName} color={iconColor} size={iconSize} />
    </button>
  );
};
