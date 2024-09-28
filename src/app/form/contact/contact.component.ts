import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForm } from 'src/app/interface/form';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  allformdata: UserForm[] = [];
  item: any;

  constructor(private formService: FormService, private router: Router) {}

  ngOnInit(): void {
    this.formService.getAll().subscribe((data) => {
      this.allformdata = data;
    });
  }

  deleteItem(id: number) {
    this.formService.delete(id).subscribe(
      () => {
        // Update the component's data to reflect the deletion
        const filteredItems = this.item.filter((item: { id: number; }) => item.id !== id);
        this.item = filteredItems;
        this.router.navigate(["form/contact"]);
        console.log('Item deleted successfully');
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }


  
}
