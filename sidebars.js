/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "category",
      label: "はじめに",
      collapsed: true,
      link: { type: "doc", id: "README" },
      items: ["README"],
    },
    {
      type: "category",
      label: "準備",
      collapsed: true,
      link: { type: "doc", id: "ready/README" },
      items: ["ready/prior-knowledge", "ready/setup"],
    },
    {
      type: "category",
      label: "チュートリアル",
      collapsed: true,
      link: { type: "doc", id: "tutorials/README" },
      items: [
        "tutorials/day1",
        "tutorials/day2",
        "tutorials/day3",
        "tutorials/day4",
        "tutorials/day5",
      ],
    },
    {
      type: "category",
      label: "トラブルシューティング",
      collapsed: true,
      link: { type: "doc", id: "troubles/README" },
      items: [],
    },
    {
      type: "category",
      label: "関連資料",
      collapsed: true,
      link: { type: "doc", id: "resources/README" },
      items: [],
    },
  ],
};

module.exports = sidebars;
