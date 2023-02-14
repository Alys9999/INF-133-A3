import { Component, Injector, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [SpotifyService]
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;

  //TODO: inject the Spotify service
  constructor(private service: SpotifyService) { }
  
  ngOnInit() {
    this.name = "???";
    this.getAboutMe();
  }


  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  getAboutMe() {
    let aboutMe = this.service.aboutMe();
    let _self = this;
    document.getElementsByTagName("button")[0].addEventListener("click", function() {
      aboutMe.then((data) => {
        _self.name = data.name;
        _self.profile_pic = data.imageURL;
        _self.profile_link = data.spotifyProfile;
      }).catch((error: any) => console.log(error));
    });
  }
}
