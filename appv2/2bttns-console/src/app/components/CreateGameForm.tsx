"use client";

import React from "react";
import Button from "./Button";
import classNames from "classnames";
import { useMemo } from "react";

export type InputTag = {
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
  tags: InputTag[];
};

export type LoginFormProps = {
  error?: string;
  initialValue?: Game;
  loading: boolean;
  onSubmit: (payload: Game) => void;
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

const TextArea = () => {
  return (
    <textarea
      className="textarea textarea-bordered"
      placeholder="Bio"
    ></textarea>
  );
};

const CreateGameForm = ({
  error,
  initialValue,
  loading,
  onSubmit,
}: LoginFormProps) => {
  const formInput: TextInputProps[] = [
    {
      id: "name",
      initialValue: initialValue?.name,
      placeholder: "Name",
      type: "text",
    },
    {
      id: "description",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      initialValue: initialValue?.description,
      placeholder: "Description",
      type: "textarea",
    },
    {
      id: "tags",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      initialValue: initialValue?.description,
      placeholder: "Tags",
      type: "textarea",
    },
  ];

  return (
    <div className="card w-100 bg-base-100 shadow-xl outline outline-zinc-600 outline-1">
      <div className="card-body">
        <div className="flex gap-6 flex-col">
          {formInput.map((input, index) => (
            <TextInput key={`Form_${input.id}`} {...input} tabIndex={index} />
          ))}
          <ToggleSwitch active={true} label="Color Bar on Buttons" />
          <Button onClick={() => {}}>Start game</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateGameForm;
