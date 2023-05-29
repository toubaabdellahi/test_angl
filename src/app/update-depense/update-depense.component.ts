import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-update-depense',
  templateUrl: './update-depense.component.html',
  styleUrls: ['./update-depense.component.css']
})
export class UpdateDepenseComponent implements OnInit {
  constructor(private act:ActivatedRoute,public srv:SrvService,private router :Router) {}
  id_depense:any;
  depense:any;
 
  updatdepense(){
  this.srv.updateDepense(this.id_depense,this.depense,this.depense.Beneficiare_id,this.depense.Rubrique_id,this.depense.id_contrat,this.depense.Etats_id).subscribe(
    (res)=>{
      console.log(this.depense);
     this.router.navigate(['/depenses']);
    },
    (err)=>{
      console.log(err);
    });
  }
  ngOnInit(): void {
    this.id_depense= this.act.snapshot.paramMap.get('id_depense');
    // console.log( this.id_client);
    this.srv.getDepenseById(this.id_depense).subscribe(
      (res)=>{
        console.log(res);
        this.depense=res;
        console.log(this.depense);
      },
      (err)=>{
        console.log(err);
        this.ngOnInit();
      }
    );
    
  
  }
}
