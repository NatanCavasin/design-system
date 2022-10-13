import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

//Configuração global, com o titulo e o componente que está sendo feito a documentação
export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className="felx items-center gap-2"> 
                    {Story()}
                    <Text size='sm'>Texto do checkbox</Text>
                </div>
            )
        }
    ],
} as Meta<CheckboxProps>

//Necessário exportar pelo menos uma variante, para funcionar corretamente
export const Default: StoryObj<CheckboxProps> = {}
