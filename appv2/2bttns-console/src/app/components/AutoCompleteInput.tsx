import classNames from "classnames";
import { memo, useEffect, useRef, useState } from "react";

export type AutoCompleteInputProps = {
  active: boolean;
  label: string;
  items: string[];
  onChange(val: string): void;
  onSelect: (val: string) => void;
  onSubmit: () => void;
  value: string;
};

const AutoCompleteInput = ({
  active,
  items,
  label,
  onSelect,
  value,
  onChange,
  onSubmit,
}: AutoCompleteInputProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (activeIndex > 0 && activeIndex > items.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex, items]);

  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [activeRef.current]);

  return (
    <div
      className={classNames("dropdown-top", {
        "dropdown w-full": true,
        "dropdown-open": open && active,
      })}
      ref={ref}
    >
      <input
        type="text"
        className={classNames(
          "input input-bordered p-5 input-sm rounded-xl w-full bg-black"
        )}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (active) {
              if (activeIndex >= 0 && activeIndex < items.length) {
                onSelect(items[activeIndex]);
                setOpen(false);
              }
            } else {
              onSubmit();
            }
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (active) {
              setActiveIndex((prev) =>
                prev === items.length - 1 ? 0 : prev + 1
              );
            }
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (active) {
              setActiveIndex((prev) =>
                prev === 0 ? items.length - 1 : prev - 1
              );
            }
          } else if (e.key === "Escape") {
            setOpen(false);
            onChange("");
          }
        }}
        placeholder={label}
        tabIndex={0}
      />
      <div
        className={classNames(
          "bg-zinc-950",
          "dropdown-content",
          "flex-col",
          { hidden: !active },
          "max-h-96",
          "overflow-auto",
          "overflow-x-hidden",
          "rounded-md",
          "top-14"
        )}
      >
        <ul
          className="menu menu-compact"
          style={{ width: ref.current?.clientWidth }}
        >
          {items.map((item, index) => {
            return (
              <li
                className={classNames(
                  { "bg-base-100": index === activeIndex },
                  "border-b",
                  "border-b-base-content/10",
                  "w-full"
                )}
                key={index}
                onMouseOver={() => setActiveIndex(index)}
                tabIndex={index + 1}
                onClick={() => {
                  onSelect(item);
                  setOpen(false);
                }}
                ref={index === activeIndex ? activeRef : undefined}
              >
                <button>{item}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default memo(AutoCompleteInput);
