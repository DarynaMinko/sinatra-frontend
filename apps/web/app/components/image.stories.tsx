//  MyComponent.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import imageFile from './img/image.webp';

import { Navbar } from './navbar';

const meta: Meta<typeof Navbar> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'img',
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const image = {
    src: imageFile,
    alt: 'my image',
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
// export const WithAnImage: Story = {
//     render: () => <img src={image.src} alt={image.alt} />,
// };
