import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForm } from 'src/app/interface/form';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private formService: FormService, private router: Router) { }

  formdata: UserForm = {
    id: 0,
    createdAt: '',
    first_name: '',
    last_name: '',
    emailId: '',
    age: 0,
    gender: '',
    pan_no: '',
    adhaar_no: '',
    mobilenumber: '',
    status: ''
  }

  create() {
    this.formService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(["form/contact"]);
        // Optionally reset the form data
        this.formdata = { ...this.formdata }; // Create a new object to avoid reference issues
      },
      error: (err) => {
        console.error('Error creating form:', err);
        // Show an error message to the user
      }
    });
  }

  ngOnInit(): void {
  }

}
