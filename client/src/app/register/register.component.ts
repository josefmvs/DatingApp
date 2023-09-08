import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {}

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: err => console.log(err),
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
