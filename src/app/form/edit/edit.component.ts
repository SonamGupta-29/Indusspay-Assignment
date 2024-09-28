import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserForm } from 'src/app/interface/form';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  

  constructor(private formService: FormService, private router: Router, private route: ActivatedRoute) { }

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

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'))
      this.getByid(id)
    })
  }

  getByid(id:number){
    this.formService.edit(id).subscribe((data)=>{
       this.formdata = data;
    });
  }

  update(){
    this.formService.update(this.formdata).subscribe({
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

}
