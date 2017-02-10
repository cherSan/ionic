import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

import {
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapsLatLng,
  GoogleMapsMarkerOptions,
  GoogleMapsMarker,
  Geolocation, LaunchNavigator
} from 'ionic-native';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  private map: GoogleMap;
  private me: GoogleMapsMarker;

  constructor(private _navController: NavController, private platform: Platform) {}

// Load map only after view is initialize
  ngAfterViewInit() {
    this.platform.ready().then(() => this.loadMap());
  }

  loadMap() {
    GoogleMap.isAvailable().then(() => {
      let element: HTMLElement = document.getElementById('map');

      this.map = new GoogleMap(element, {
        'backgroundColor': 'white',
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true,
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        }
      });

      this.map.one(GoogleMapsEvent.MAP_READY).then((d) => {
        let markerOptions: GoogleMapsMarkerOptions = {
          title: 'Me',
          icon: 'red'
        };

        this.map.addMarker(markerOptions).then((marker: GoogleMapsMarker) => {
          this.me = marker;
          this.me.setVisible(true);
          this.me.showInfoWindow();
        });

        Geolocation.watchPosition().subscribe(position => {
          let target: GoogleMapsLatLng = new GoogleMapsLatLng(position.coords.latitude,position.coords.longitude);
          this.map.animateCamera({
            'target': target,
            'tilt': 5,
            'zoom': 13,
            'bearing': 0,
            'duration': 3000 // = 3 sec.
          }).then(() =>{
            this.me.setPosition(target);
          });
        });

        this.map.setClickable(true);
        this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((val) => {
          LaunchNavigator.navigate(val)
        })
      });
    });
  }
}
