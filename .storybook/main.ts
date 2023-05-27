import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: [
    // "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // https://github.com/ben-rogerson/twin.examples/blob/master/storybook-emotion-typescript/.storybook/main.ts#L21
  // Twin recommends adding the babel config here as Next.js disables SWC when .babelrc is added to the root.
  babel: async (options) => {
    const presets = [...(options.presets ?? [])];
    const plugins = [...(options.plugins ?? [])];

    return {
      ...options,
      presets: [...presets, "@emotion/babel-preset-css-prop"],
      plugins: [...plugins, "babel-plugin-twin", "babel-plugin-macros"],
    };
  },
};
export default config;
