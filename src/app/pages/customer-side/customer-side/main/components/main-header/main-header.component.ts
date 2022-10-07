import { Component, OnInit } from '@angular/core';
import { SampleProductsService } from 'src/app/services/sample-products.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  isCartClosed: boolean = true;
  categories: Array<any> = [];

  constructor(private categoriesService: SampleProductsService) {}

  ngOnInit(): void {
    this.getCategoriesList();
  }

  toggleCart() {
    this.isCartClosed = this.isCartClosed ? false : true;
  }

  getCategoriesList() {
    this.categoriesService.getcategories().subscribe((res: any) => {
      console.log(res);

      this.categories = res;
    });
  }
}
