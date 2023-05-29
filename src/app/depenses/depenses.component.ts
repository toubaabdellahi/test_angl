import { Component, OnInit } from '@angular/core';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent implements OnInit {

  depenses:any
  constructor(public srv:SrvService) {}
  depense ={
    date_creation:'',
    detail:'',
    montant:'',
    Beneficiare_id:'',
    Rubrique_id:'',
    id_contrat:'',
    Etats_id:''
  };
ajoutdepense(){
  const id_contrat = this.depense.id_contrat;
  console.log(id_contrat);
  const Beneficiare_id = this.depense.Beneficiare_id;
  console.log(Beneficiare_id);
  const Rubrique_id = this.depense.Rubrique_id;
  console.log(Rubrique_id);
  const Etats_id = this.depense.Etats_id;
  console.log(Etats_id);
  this.srv.createDepense(this.depense,Beneficiare_id,Rubrique_id,id_contrat,Etats_id).subscribe(
    (res)=>{
      console.log(this.depense);
      this.ngOnInit();
    },
    (err)=>{
      console.log("jjjjj");
    }
  );
  
}
deletedepense(id_depense:any){
  this.srv.deteteDepense(id_depense).subscribe(
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
    this.depense ={
      date_creation:'',
      detail:'',
      montant:'',
      Beneficiare_id:'',
      Rubrique_id:'',
      id_contrat:'',
      Etats_id:''
    };
    this.srv.getAllDepenses().subscribe(
      (res)=>{
        console.log(res);
        this.depenses=(res);} 
    );
  }

}
