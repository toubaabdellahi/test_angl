import { Component ,OnInit} from '@angular/core';
import { SrvService } from '../srv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit{
  constructor(private act:ActivatedRoute,public srv:SrvService,private router :Router) {}
id_client:any;
client:any;
cl ={
  name:'',
  numero:'',
  mail:''
};
updateclient(){
this.srv.updateClient(this.id_client,this.client).subscribe(
  (res)=>{
    console.log(this.client);
   this.router.navigate(['']);
  },
  (err)=>{
    console.log(err);
  });
}
ngOnInit(): void {
  this.id_client= this.act.snapshot.paramMap.get('id_client');
  // console.log( this.id_client);
  this.srv.getClientById(this.id_client).subscribe(
    (res)=>{
      console.log(res);
      this.client=res;
      console.log(this.client);
    },
    (err)=>{
      console.log(err);
      this.ngOnInit();
    }
  );
  

}

}
