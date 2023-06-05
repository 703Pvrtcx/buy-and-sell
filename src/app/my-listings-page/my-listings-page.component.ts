import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {

  listings: Listing[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listings = fakeListings;
  }
  onDeleteClicked(listingId:any):void{
    alert(`Deleting your listing with id ${listingId}!`);
    this.router.navigateByUrl('/my-listings');
  }


}
