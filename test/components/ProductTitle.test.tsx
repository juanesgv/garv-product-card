import * as React from 'react';
import rendered from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', ()=>{

    test('Debe mostrar el componente correctamente con el título personalizado', ()=>{
        const wrapper = rendered.create(
            <ProductTitle title='Custom product' className='custom-classu'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

    test('debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = rendered.create(
            <ProductCard product={product1}>
                {
                    ()=> (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
    
})
