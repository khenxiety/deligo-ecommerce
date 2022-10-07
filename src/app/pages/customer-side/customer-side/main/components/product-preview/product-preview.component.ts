import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleProductsService } from 'src/app/services/sample-products.service';
@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss'],
})
export class ProductPreviewComponent implements OnInit {
  product: Array<any> = [];
  isLoading: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: SampleProductsService
  ) {}

  ngOnInit(): void {
    this.getProducts();

    window.scroll({
      top: 0,
      left: 0,
    });
  }

  getProducts() {
    this.isLoading = true;
    const id = '';
    this.activatedRoute.params.subscribe((params) => {
      let id: string = params['id'];
      id = id;

      this.productService.getStore().subscribe((res: any) => {
        this.product = res;
        this.product = this.product.filter((res: any) => res.id == id);
        console.log(this.product);
        this.isLoading = false;
      });
    });
  }
}
