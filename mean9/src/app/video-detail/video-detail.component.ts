import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  public editTitle: boolean = false;
  @Input() public video;
  
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.editTitle = false;
  }
  onTitleClick(){
    this.editTitle = true;
  }

}
