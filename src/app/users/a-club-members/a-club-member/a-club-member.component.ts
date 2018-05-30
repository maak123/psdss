import { Component, OnInit } from '@angular/core';

import { AClubMemberService } from '../shared/a-club-member.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-a-club-member',
  templateUrl: './a-club-member.component.html',
  styleUrls: ['./a-club-member.component.css']
})
export class AClubMemberComponent implements OnInit {

  constructor(private aClubMemberService : AClubMemberService,private tostr: ToastrService) { }

  ngOnInit() {
  	this.resetForm();
  }

   onSubmit(aClubMemberform :NgForm){
    if (aClubMemberform.value.$key == '')
      this.aClubMemberService.insertAClubMember(aClubMemberform.value);
  	else
      this.aClubMemberService.updateAClubMember(aClubMemberform.value);


    this.resetForm(aClubMemberform);
    this.tostr.success('Submitted Succcessfully', 'Amalgamated Club member Register');
  }

  resetForm(aClubMemberform? : NgForm){
  	if (aClubMemberform != null)  	
  	  aClubMemberform.reset();
  	this.aClubMemberService.selectedAClubMember = {
  		$key : '',
  		name : '',
	    indexNo : '',
	    regNo : '',
	    nic : '',
	    telephone : '',
	    email : '',
	    positions: '',
	    sport: ''
  	}
  }

  onDelete(aClubMemberform : NgForm){
    if(confirm('Are you sure to delete this record ?') == true){
      this.aClubMemberService.deleteAClubMember(aClubMemberform.value.$key);
      this.resetForm(aClubMemberform);
    }
  }

}
