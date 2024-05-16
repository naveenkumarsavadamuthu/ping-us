import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   openpop:boolean=false
   openpop1:boolean=false
   openpop2:boolean=false




   exportPopup() {
    this.openpop = !this.openpop;
  }
  exportPopup1() {
    this.openpop1 = !this.openpop1;
  }
  exportPopup2() {
    this.openpop2 = !this.openpop2;
  }


 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToBlockchainDevelopment() {
    this.router.navigateByUrl('/block-chain'); 
  }

  navigateToAiDevelopment() {
    this.router.navigateByUrl('/ai'); 
  }

  navigateTometaverse() {
    this.router.navigateByUrl('/metaverse'); 
  }
}
