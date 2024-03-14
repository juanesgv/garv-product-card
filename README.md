# GARV-Product-card

Este es un paquete de pruebas de despliegue en NPM

### Juan Esteban García

## Ejemplo

```
  import {ProductCard, ProductImage, ProductButtons } from 'garv-product-card'
```

```
<ProductCard
    key={product.id}
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({reset, isMaxCountReached, count ,maxCount, increaseBy}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
        
</ProductCard>
``` 