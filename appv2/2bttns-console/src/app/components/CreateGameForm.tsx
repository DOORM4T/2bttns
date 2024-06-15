import React from "react";
import Button from "./Button";
import AutoCompleteInput from "./AutoCompleteInput";

import classNames from "classnames";
import { useMemo, useState } from "react";

export type Tag = {
  id: string;
  description: string;
  name: string;
};

export enum GameModeType {
  "Normal" = "classic",
}

export type GameModePolicy = {
  item: GameModeItemPolicy;
  replace: GameModeReplacePolicy;
};

export enum GameModeItemPolicy {
  "preload" = "preload",
}

export enum GameModeReplacePolicy {
  "keep picked" = "keep-picked",
}

export type GameMode = { policy: GameModePolicy };

export type GameConfig = {
  rounds?: number;
  type: GameModeType;
};

export type Game = {
  id?: string;
  name: string;
  config: GameConfig;
  css?: string;
  description: string;
  mode: GameMode;
  question?: string;
  tags: Tag[];
};

export type LoginFormProps = {
  error?: string;
  initialValue?: Game;
  loading: boolean;
  onSubmit: (payload: Game) => void;
  tags: Tag[];
};

export type ToggleSwitchProps = {
  active: boolean;
  label: string;
};

const ToggleSwitch = ({ active = true, label }: ToggleSwitchProps) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-4 justify-end">
        <span className="label-text text-base-content">{label}</span>
        <input
          checked={active}
          className={"toggle toggle-success"}
          type="checkbox"
        />
      </label>
    </div>
  );
};

export type TextInputProps = {
  id: string;
  initialValue?: string;
  placeholder?: string;
  tabIndex?: number;
  type?: React.HTMLInputTypeAttribute;
};

const TextInput = ({
  initialValue,
  placeholder,
  tabIndex,
  type,
}: TextInputProps) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        className="grow"
        placeholder={placeholder}
        tabIndex={tabIndex}
        type={type ?? "text"}
      />
    </label>
  );
};

export type TextAreaProps = {
  placeholder?: string;
};

const TextArea = ({ placeholder }: TextAreaProps) => {
  return (
    <textarea
      className="textarea textarea-bordered"
      placeholder={placeholder}
    ></textarea>
  );
};

const CreateGameForm = ({
  error,
  initialValue,
  loading,
  onSubmit,
  tags,
}: LoginFormProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(
    initialValue?.tags.map(({ name }) => name) || []
  );

  const formInput: TextInputProps[] = [
    {
      id: "name",
      initialValue: initialValue?.name,
      placeholder: "Name",
      type: "text",
    },
    {
      id: "description",
      initialValue: initialValue?.description,
      placeholder: "Description",
      type: "textarea",
    },
    {
      id: "tags",
      initialValue: initialValue?.description,
      placeholder: "Tags",
      type: "multiselect",
    },
  ];

  const handleSelectTag = (tag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      }

      return [...prev, tag].sort();
    });
  };

  return (
    <div className="card w-100 bg-base-100 shadow-xl outline outline-zinc-600 outline-1">
      <div className="card-body">
        <div className="flex gap-6 flex-col">
          {formInput.map((input, index) => {
            if (input.type === "textarea") {
              return (
                <TextArea
                  key={`Form_${input.id}`}
                  placeholder={input.placeholder}
                />
              );
            }

            if (input.type === "multiselect") {
              return (
                <AutoCompleteInput
                  items={tags.map(({ name }) => name)}
                  label="Tags"
                  active={true}
                  onChange={() => {}}
                  onSelect={handleSelectTag}
                  onSubmit={() => {}}
                  key={`Form_${input.id}`}
                  value={selectedTags.join(", ")}
                />
              );
            }

            return (
              <TextInput key={`Form_${input.id}`} {...input} tabIndex={index} />
            );
          })}
          <ToggleSwitch active={true} label="Color Bar on Buttons" />
          <Button onClick={() => {}}>Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateGameForm;
