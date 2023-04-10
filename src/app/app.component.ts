import {Component, ViewChild} from '@angular/core';
import {ModalManager} from "ngb-modal";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-mgmt';
  currentRoute = "/home";

  @ViewChild('myModal') myModal: any;
  private modalRef: any;
  constructor(private modalService: ModalManager,
              private router: Router){}

  openModal(){
    this.modalRef = this.modalService.open(this.myModal, {
      size: "md",
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    })
  }
  closeModal(){
    this.modalService.close(this.modalRef);
    //or this.modalRef.close();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
/*
  displayStyle = "none";

  openPopup() {
   this.displayStyle = "block";
   }
  closePopup() {
     this.displayStyle = "none";
   }*/
}

