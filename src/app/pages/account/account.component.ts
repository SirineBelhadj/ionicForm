import { Component, OnInit ,} from '@angular/core';
import { modérateur } from 'src/app/models/modérateur';
import {user} from 'src/app/models/user';
import {utilisateur} from 'src/app/models/Utilisateur';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

person:modérateur=null
utilisateur:utilisateur=null
user:user=null 



  modeUpdate=false
  constructor() { }

  ngOnInit() {
    this.user=JSON.parse( localStorage.getItem('user'))
    console.log('user : ',this.user)
    if(this.user)
    if(this.user.isAdmin){
    this.person=new modérateur()
    this.person.name=this.user.name
    this.person.firstname=this.user.email
      }else{
    this.utilisateur=new utilisateur()
    this.utilisateur.nom=this.user.name
    this.utilisateur.prénom=this.utilisateur.prénom
    this.utilisateur.sexe=this.utilisateur.sexe 
    this.utilisateur.dateDeNaissance=this.utilisateur.dateDeNaissance 
    this.utilisateur.email=this.user.email
    this.utilisateur.motDePasse=this.utilisateur.motDePasse
    this.utilisateur.tel=this.utilisateur.tel
    this.utilisateur.zoneGéographique=this.utilisateur.zoneGéographique
    this.utilisateur.domaineDactivité=this.utilisateur.domaineDactivité 
    this.utilisateur.MatriculeFiscale=this.utilisateur.MatriculeFiscale
    this.utilisateur.active=this.utilisateur.active
    this.utilisateur.suspendu=this.utilisateur.suspendu 
    }
  }
  
  updateMode(){
  this.modeUpdate=!this.modeUpdate
}
}
