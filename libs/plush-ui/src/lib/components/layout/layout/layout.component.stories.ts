import { Meta } from '@storybook/angular';
import { LayoutComponent } from './layout.component';

export default {
    title: 'Components/Layout/Layout',
    component: LayoutComponent,
} as Meta<LayoutComponent>;

export const Primary = {
    render: (args: LayoutComponent) => ({
        props: args,
    }),
    args: {},
};