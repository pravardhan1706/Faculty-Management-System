import { Product } from '../product.models.ts/product.models';
@Component({
 selector: 'app-product',
 templateUrl: './product.component.html',
 styleUrls: ['./product.component.css']
})
export class ProductComponent {
 products:Product[]=[
 
]
}