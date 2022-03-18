import { Component, OnInit } from '@angular/core';
import { PasswordOption } from 'src/app/model/PasswordOption';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {
  passwordOptions: PasswordOption[] = [
    {
      type: 'Uppercase',
      isChecked: false
    },
    {
      type: 'Lowercase',
      isChecked: true
    },
    {
      type: 'Numeric',
      isChecked: false
    },
    {
      type: 'Special_Characters',
      isChecked: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getPassword(): void {

  }

}
