import { Component, OnInit } from '@angular/core';
import { TailorService } from '../tailor.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  providers: [TailorService]
})
export class NewUserComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
