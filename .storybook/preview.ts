import type { Preview } from "@storybook/vue3";
import { themes } from '@storybook/theming';

const preview: Preview = {
    parameters: {
        docs: {
            theme: themes.dark,
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;