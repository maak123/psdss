import { Injectable } from '@angular/core';
import { AClubMember } from '../shared/a-club-member.model';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';


@Injectable({
  providedIn: 'root';
})
export class AClubMemberService {
  aClubMemberList : AngularFireList<any>;  
  selectedAClubMember : AClubMember = new AClubMember();

  constructor(private firebase : AngularFireDatabase) {}

  getData(){
  	this.aClubMemberList = this.firebase.list('aClubMembers'){
  		return this.aClubMemberList;
  	}
  }

  insertAClubMember(aClubMember : AClubMember){
  	this.aClubMemberList.push({
  		name : aClubMember.name,
	    indexNo : aClubMember.indexNo,
	    regNo : aClubMember.regNo,
	    nic : aClubMember.nic,
	    telephone : aClubMember.telephone,
	    email : aClubMember.email,
	    positions:aClubMember.positions,
	    sport:aClubMember.sport
  });
  }


  updateAClubMember(aClubMember : AClubMember){
    this.aClubMemberList.update(aClubMember.$key,
      {
        name : aClubMember.name,
	    indexNo : aClubMember.indexNo,
	    regNo : aClubMember.regNo,
	    nic : aClubMember.nic,
	    telephone : aClubMember.telephone,
	    email : aClubMember.email,
	    positions:aClubMember.positions,
	    sport:aClubMember.sport
      });
  }

  deleteAClubMember($key : string){
    this.aClubMemberList.remove($key);
  }




}
