import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() public videos;

  @Output() SelectVideo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(vid:Video){
    this.SelectVideo.emit(vid)
  }

}
