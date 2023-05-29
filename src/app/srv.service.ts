import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SrvService {

  constructor(private http:HttpClient) { }
readonly url='http://127.0.0.1:8000/';
//client
 createClient(client:Object){
   return this.http.post(this.url + 'clients/create',client);

 }
  getAllClients(){
    return this.http.get(this.url +'clients/liste');
  }

  deteteClient(id_client:any){
    return this.http.delete(this.url+ 'clients/delete/'+id_client);
  }
  getClientById(id_client:any){
    return this.http.get(this.url +'clients/getClientById/'+id_client);
  }
  updateClient(id_client:any,client:Object){
    return this.http.put(this.url + 'clients/update/'+id_client,client);
  }


  //contrats
  // createContrat(contrat:Object,id_client:any){
  //   // const params = new HttpParams().set('id_client', id_client);
  //   // return this.http.post(this.url + 'contrats/create', contrat, { params });
  //   return this.http.post(this.url + 'contrats/create?id_client=' + id_client,contrat);

  // }
  createContrat(contrat: Object, id_client: any) {
    return this.http.post(this.url + 'contrats/create/' + id_client, contrat);
  }
  
   getAllContrats(){
     return this.http.get(this.url +'contrats/liste');
   }
 
   deteteContrat(id_contrat:any){
     return this.http.delete(this.url+ 'contrats/delete/'+id_contrat);
   }
   getContratById(id_contrat:any){
     return this.http.get(this.url +'contrats/getContratById/'+id_contrat);
   }
   updateContrat(id_contrat:any,contrat:Object,id_client:any){
     return this.http.put(this.url + 'contrats/update/'+id_contrat+'/'+id_client,contrat);
   }
 //depenses
 createDepense(depense: Object,Beneficiare_id: any,Rubrique_id: any, id_contrat: any,Etats_id: any) {
  return this.http.post(this.url + 'depenses/create/' + Beneficiare_id+'/'+Rubrique_id+'/'+id_contrat+'/'+Etats_id, depense);
}

 getAllDepenses(){
   return this.http.get(this.url +'depenses/liste');
 }

 deteteDepense(id_depense:any){
   return this.http.delete(this.url+ 'depenses/delete/'+id_depense);
 }
 getDepenseById(id_depense:any){
   return this.http.get(this.url +'depenses/getDepenseById/'+id_depense);
 }
 updateDepense(id_depense:any,depense: Object,Beneficiare_id: any,Rubrique_id: any, id_contrat: any,Etats_id: any){
   return this.http.put(this.url + 'depenses/update/'+id_depense+'/'+Beneficiare_id+'/'+Rubrique_id+'/'+id_contrat+'/'+Etats_id, depense);
 }
}
