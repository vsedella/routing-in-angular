import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingTest';
  ids= [1,2,3,4];

  constructor(private router: Router, private route: ActivatedRoute ){

  }
  
  clickHandler(id: any){
    // console.log(id);
    // this.router.navigateByUrl('second/'+id);
    this.router.navigate(['second', id] , {queryParams: {key1: 'val1', 'key2': 'val2'}});
  }
}
