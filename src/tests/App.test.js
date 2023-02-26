import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import emojiList from "../emojiList.json";
import userEvent from "@testing-library/user-event";

test("render header test", () => {
  render(<App />);
  const headerElement = screen.getByText(/Emoji Search/i);
  expect(headerElement).toBeInTheDocument();
});

test("render list at first run test", () => {
  render(<App />);
  const firstEmojiList = emojiList.slice(0, 20);
  firstEmojiList.map((emoji) => {
    expect(screen.getByText(emoji.title)).toBeInTheDocument();
  });
});

test("emoji filter test", () => {
  render(<App />);
  let filterTextbox = screen.getByLabelText("Search");
  userEvent.type(filterTextbox, "Joy");
  expect(screen.getByText("Joy")).toBeInTheDocument();
});

test("emoji copy test", () => {
  render(<App />);
  const testEmoji = screen.getByText("Joy");
  userEvent.click(testEmoji);
  expect(testEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😂");
});
