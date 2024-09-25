import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {

  queryForm = this.formBuilder.group({q:''});

  constructor(private clientService: ClientService,  private formBuilder: FormBuilder,) {}

  onClickQuery(): void {
    if (this.queryForm.value.q) {
      console.log(this.queryForm.value.q)
      this.clientService.getQuery(this.queryForm.value.q).subscribe(_ => console.log(_))
    }
    else{
      console.log('missing query input')
    }
    
  }

}
