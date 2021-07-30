import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  public hidenewVideo: boolean = true;

  videos:Video[] = [];

  selectedVideo: Video;


  constructor(private _videoService:VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
        .subscribe((resVideoData) => {
          for(const v of(resVideoData as any)){
            this.videos.push(v)
          }
        })
  }

  onSelectVideo(video:Video){
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video)
        .subscribe(resNewVidedo => {
          this.videos.push(resNewVidedo);
          this.hidenewVideo = true;
          this.selectedVideo = resNewVidedo;
        })
  }

  onUpdateVideoEvent(video:any){
    this._videoService.updateVideo(video)
        .subscribe(resNewVideo => video = resNewVideo);
    this.selectedVideo = null;
  }

  newVideo(){
    this.hidenewVideo = false;
  }

}
