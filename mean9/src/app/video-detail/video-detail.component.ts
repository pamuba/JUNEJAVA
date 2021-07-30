import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  public editTitle: boolean = false;
  @Input() public video;
  @Output() updateVideoEvent = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.editTitle = false;
  }
  onTitleClick(){
    this.editTitle = true;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video)
  }

}
