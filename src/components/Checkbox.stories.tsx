import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <label htmlFor="checkbox" className="flex items-center gap-2">
          {Story()}
          <Text size="sm" className="text-gray-200">Texto do checkbox</Text>
        </label>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}