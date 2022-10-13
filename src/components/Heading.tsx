import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
    //propriedade opcional
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

//define o size como md, quando não for informado
export function Heading({ size = 'md', children, asChild }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';


    return (
        //Componente documentado no storybook
        //Configuração das classes css usando clsx
        <Comp 
            className={clsx(
                'text-gray-100 font-bold font-sans', 
                { 
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                }
            )}
        >
            {children}
        </Comp> 
    )
}