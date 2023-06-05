import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {

  name: string = '';
  description: string = '';
  price: string ='';
  constructor(

    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    alert('Updating listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
