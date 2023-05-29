import { Component, OnInit } from '@angular/core';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit{
  contrats:any
  constructor(public srv:SrvService) {}
  contrat ={
    code_contrat:'',
    date_debut:'',
    date_fin:'',
    duree:'',
    montant:'',
    id_client:''
  };
ajoutcontrat(){
  const id_client = this.contrat.id_client;
  console.log(id_client);
  this.srv.createContrat(this.contrat,id_client).subscribe(
    (res)=>{
      console.log(this.contrat);
      this.ngOnInit();
    },
    (err)=>{
      console.log("jjjjj");
    }
  );
  
}
deletecontrat(id_contrat:any){
  this.srv.deteteContrat(id_contrat).subscribe(
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
    this.contrat = { 
    code_contrat:'',
    date_debut:'',
    date_fin:'',
    duree:'',
    montant:'',
    id_client:''
    };
    this.srv.getAllContrats().subscribe(
      (res)=>{
        console.log(res);
        this.contrats=(res);} 
    );
  }
}
