import { Component, OnInit } from '@angular/core';
import { TailorService } from '../tailor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [TailorService]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
