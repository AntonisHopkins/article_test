import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent implements OnInit {
  @Input() title: string = "Default Title";
  @Input() body: string = "Default Body";
  @Input() OkBtn: boolean = true;
  
  /**
   *
   */
  constructor(private activeModal: NgbActiveModal) {
  }
  ngOnInit(): void {
    console.log("modal on init");
  }
  success(success:boolean){
    this.activeModal.close(success);
  }
}
