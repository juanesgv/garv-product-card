import * as React from 'react';
import rendered from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', ()=>{

    test('Debe mostrar el componente correctamente con la imagen personalizado', ()=>{
        const wrapper = rendered.create(
            <ProductImage img='https://hola.jpg'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe de mostrar el componente la imagen del producto', () => {
        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    ()=> (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
    
})
