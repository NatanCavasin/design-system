import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

//Configuração global, com o titulo e o componente que está sendo feito a documentação
export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account'
    },
    argTypes: {}
} as Meta<ButtonProps>

//Necessário exportar pelo menos uma variante, para funcionar corretamente
export const Default: StoryObj<ButtonProps> = {}
