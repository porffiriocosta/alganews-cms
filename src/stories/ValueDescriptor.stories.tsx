import { Story, Meta } from "@storybook/react";
import ValueDescriptor, { ValueDescriptorProps } from "../app/components/ValueDescriptor/ValueDescriptor";

export default{
    title: 'Example/ValueDescription',

    component: ValueDescriptor,
} as Meta;

const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />

export const Default = Template.bind({})

Default.args = {
    description: 'Ganhos na Semana',
    value: 560322.02
}

export const Primary = Template.bind({})

Primary.args = {
    description: 'Ganhos na Semana',
    value: 560322.02
}

export const DefaultCurrency = Template.bind({})

DefaultCurrency.args = {
    description: 'Ganhos na Semana',
    value: 560322.02
}

export const PrimaryCurrency = Template.bind({})

PrimaryCurrency.args = {
    description: 'Ganhos na Semana',
    value: 560322.02
}