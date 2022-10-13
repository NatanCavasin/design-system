import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

//Configuração global, com o titulo e o componente que está sendo feito a documentação
export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem Ipsum.',
        size: 'md'
    },
    argTypes: {
        size: {
            opttions: ['sm', 'md', 'lg'],
            control: {
                type:'inline-radio',
            }
        }
    }
} as Meta<TextProps>

//Necessário exportar pelo menos uma variante, para funcionar corretamente
export const Default: StoryObj<TextProps> = {
    argTypes: {
        asChild:{
            table: {
                disable: true
            } 
        }
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    },
    argTypes: {
        asChild:{
            table: {
                disable: true
            } 
        }
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    },
    argTypes: {
        asChild:{
            table: {
                disable: true
            } 
        }
    }
}

//Com personalização do componente de texto
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Custom tag text p</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild:{
            table: {
                disable: true
            } 
        }
    }
}