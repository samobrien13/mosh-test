import { useState } from "react";
import ChevronUp from "../assets/chevron-up.svg";
import ChevronDown from "../assets/chevron-down.svg";
import cn from "classnames";
import { Loading } from "./loading";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isLoading,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className}>
      <div className="w-full inline-flex items-center justify-between mb-2 lg:mb-4">
        <h2>{title}</h2>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? ChevronUp : ChevronDown} />
        </button>
      </div>
      <div
        className={cn("lg:block", {
          hidden: !isOpen,
        })}
      >
        {isLoading ? <Loading /> : children}
      </div>
    </div>
  );
};

export { Accordion };
