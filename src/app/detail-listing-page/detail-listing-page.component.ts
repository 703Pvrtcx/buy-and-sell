import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
@Component({
  selector: 'app-detail-listing-page',
  templateUrl: './detail-listing-page.component.html',
  styleUrls: ['./detail-listing-page.component.css']
})
export class DetailListingPageComponent implements OnInit {
  listing: Listing | undefined;
  constructor(
    private route: ActivatedRoute
  ) {
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }

}
