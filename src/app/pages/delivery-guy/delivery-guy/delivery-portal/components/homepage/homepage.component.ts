import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleProductsService } from 'src/app/services/sample-products.service';
import SwiperCore, { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  isLoading: boolean = false;
  constructor(
    private productService: SampleProductsService,
    private router: Router
  ) {}

  data: Array<any> = [];
  ngOnInit(): void {
    this.getData();
  }
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  getData() {
    this.isLoading = true;
    this.productService.getStore().subscribe((res: any) => {
      console.log(res);

      this.data = res;
      // this.data = this.data.filter(
      //   (item: any) =>
      //     item.title !==
      //     "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
      // );
      this.isLoading = false;
    });
  }

  goToPreview(id: any) {
    this.router.navigate(['/deligo-ecommerce/product-preview', id]);
  }
}
