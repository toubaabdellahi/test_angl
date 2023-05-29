import { Component ,OnInit} from '@angular/core';
import { SrvService } from '../srv.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers:[SrvService]
})
export class ClientComponent implements OnInit{
  clients:any
  constructor(public srv:SrvService) {}
  client ={
    name:'',
    numero:'',
    mail:''
  };
ajoutclient(){
  this.srv.createClient(this.client).subscribe(
    (res)=>{
      console.log(this.client);
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    }
  );
  
}
deleteclient(id_client:any){
  this.srv.deteteClient(id_client).subscribe(
    (res)=>{
      console.log(res);
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);
      this.ngOnInit();
    }
  );
}

  ngOnInit(): void {
    this.client = { 
      name: '',
      numero: '',
      mail: ''
    };
    this.srv.getAllClients().subscribe(
      (res)=>{
        console.log(res);
        this.clients=(res);} 
    );
  }
}
