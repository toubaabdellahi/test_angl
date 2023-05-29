import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {
  constructor(private act:ActivatedRoute,public srv:SrvService,private router :Router) {}
  id_contrat:any;
  contrat:any;
 
  updatecontrat(){
  this.srv.updateContrat(this.id_contrat,this.contrat,this.contrat.id_client).subscribe(
    (res)=>{
      console.log(this.contrat);
     this.router.navigate(['/contrats']);
    },
    (err)=>{
      console.log(err);
    });
  }
  ngOnInit(): void {
    this.id_contrat= this.act.snapshot.paramMap.get('id_contrat');
    // console.log( this.id_client);
    this.srv.getContratById(this.id_contrat).subscribe(
      (res)=>{
        console.log(res);
        this.contrat=res;
        console.log(this.contrat);
      },
      (err)=>{
        console.log(err);
        this.ngOnInit();
      }
    );
    
  
  }
}
