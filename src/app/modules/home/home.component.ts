import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public data: any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route
      .data
      .subscribe(v => console.log(v));

    this.data = this.route.snapshot.data;
  }

  ngOnDestroy() {
    this.data.unsubscribe();
  }

}
