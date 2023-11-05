// product.state.ts

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Product } from '../models/product.model';



export interface ProductState extends EntityState<Product> {}

export const productAdapter = createEntityAdapter<Product>();

export const initialProductState: ProductState = productAdapter.getInitialState();
