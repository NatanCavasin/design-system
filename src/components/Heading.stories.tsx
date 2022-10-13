import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

//Configuração global, com o titulo e o componente que está sendo feito a documentação
export default {
    title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingProps>

//Necessário exportar pelo menos uma variante, para funcionar corretamente
export const Default: StoryObj<HeadingProps> = {
    argTypes: {
        asChild:{
            table: {
                disable: true
            } 
        }
    }
}

export const Small: StoryObj<HeadingProps> = {
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

export const Large: StoryObj<HeadingProps> = {
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
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Hading with H1</h1>
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