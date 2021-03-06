import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products: any[] = [];
constructor(private apiService: ApiService) { }
// tslint:disable-next-line:typedef
ngOnInit() {
this.apiService.get().subscribe((data: any[]) => {
this.products = data;
console.log(data);
});
}
}
