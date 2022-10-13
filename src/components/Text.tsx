import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
    //propriedade opcional
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

//define o size como md, quando não for informado
export function Text({ size = 'md', children, asChild }: TextProps) {
    const Comp = asChild ? Slot : 'span';


    return (
        //Componente documentado no storybook
        //Configuração das classes css usando clsx
        <Comp 
            className={clsx(
                'text-gray-100 font-sans', 
                { 
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}
        >
            {children}
        </Comp> 
    )
}