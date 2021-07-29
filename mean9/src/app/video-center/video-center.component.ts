import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos:Video[] = [
    {"_id":"1", "title":"title1", "url":"url1", "description":"description"},
    {"_id":"2", "title":"title2", "url":"url1", "description":"description"},
    {"_id":"3", "title":"title3", "url":"url1", "description":"description"}
  ];

  selectedVideo: Video;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectVideo(video:Video){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
