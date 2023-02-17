import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  @Input() resource:ResourceData;
  localName: string = "???"
  localUrl: string;
  localSrc: string;

  constructor() { }

  ngOnInit() {
    this.localName=this.resource["name"]
    this.localUrl=this.resource["imageURL"]
    this.localSrc=this.resource["category"]+"/"+this.resource["id"]
    }

}
