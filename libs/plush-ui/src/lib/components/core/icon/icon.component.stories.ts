import { Meta } from '@storybook/angular';
import { IconComponent } from './icon.component';

export default {
    title: 'Components/Core/Icon',
    component: IconComponent,
} as Meta<IconComponent>;

export const Primary = {
    render: (args: IconComponent) => ({
        props: args,
    }),
    args: {
        icon: 'chevron-selector-vertical',
        iconSize: 'md',
    },
};
