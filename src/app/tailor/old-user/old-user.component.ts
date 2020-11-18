import { Component, OnInit } from '@angular/core';
import { TailorService } from '../tailor.service';

@Component({
  selector: 'app-old-user',
  templateUrl: './old-user.component.html',
  styleUrls: ['./old-user.component.scss'],
  providers: [TailorService]
})
export class OldUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
