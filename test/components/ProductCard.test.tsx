import * as React from 'react';
import rendered from 'react-test-renderer'
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductCard', ()=>{

    test('Debe mostrar el componente correctamente', ()=>{
        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <h1>Product card</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
    
    test('Debe fucnionar el contador', ()=>{
        const wrapper = rendered.create(
            <ProductCard product={product2}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Productcard</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON()
        expect(tree).toMatchSnapshot()

        // (tree as any).children[2].pops.onClick()

        // tree = wrapper.toJSON()

        // expect((tree as any).children[1].children[0].toBe('1'))
    })
    
})
