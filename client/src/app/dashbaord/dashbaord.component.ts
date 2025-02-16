import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {
  // Data arrays
 
  constructor(
    private authService: AuthService,
    private httpService: HttpService,
    private router: Router
  ) { } 

  ngOnInit(): void {

  }

}

