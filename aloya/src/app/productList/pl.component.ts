import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'product-list',
  template: `
  <span>this is {{componentName}}</span>
  <div *ngFor="let product of productsArr">{{product.name}}</div>
  `
})
export class PLComponent implements OnInit {
  public componentName: string;
  public productsArr: any[] = [{
    name: 'coca-cola'
  }, {
    name: 'pepsi'
  }];
  public ngOnInit() {
    this.componentName = 'product list';
  }
}
