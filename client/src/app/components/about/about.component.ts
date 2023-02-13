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
    let me =this.service.aboutMe();
    document.getElementsByTagName("button")[0].addEventListener("click", function(){
      me.then((data)=>{
      document.getElementsByTagName("h3")[0].innerText = "Logged in user: "+data.name;
      document.getElementById("mePic").setAttribute("src", data.imageURL);
      document.getElementById("openProfile").setAttribute("href", data.spotifyProfile)
      //console.log(document.getElementsByTagName("a")[0])
      })
      .catch((error: any) => console.log(error));
    })
    
  }


  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */

}
