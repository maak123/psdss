import { Component, OnInit } from '@angular/core';

import { AClubMemberService } from '../shared/a-club-member.service';
import { AClubMember } from '../shared/a-club-member.model';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-a-club-member-list',
  templateUrl: './a-club-member-list.component.html',
  styleUrls: ['./a-club-member-list.component.css']
})


export class AClubMemberListComponent implements OnInit {
  
  AClubMemberList : AClubMember[];
  constructor(private aClubMemberService : AClubMemberService,private tostr:ToastrService) { }

  ngOnInit() {
  	var x = this.aClubMemberService.getData();
    x.snapshotChanges().subscribe(item => {
      this.aClubMemberList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.aClubMemberList.push(y as AClubMember);
      });
    });
  }

  onEdit(aClubMember: AClubMember){

  	this.aClubMemberService.selectedAClubMember = Object.assign({},aClubMember);

  }

  onDelete(key : string){
  	if (confirm('Are you sure to delete this record ?') == true) {
      this.aClubMemberService.deleteAClubMember(key);
      this.tostr.warning("Deleted Successfully", "AClubMember register");
    }
  }

   onItemClick(aClubMember : AClubMember){

    this.aClubMemberService.selectedAClubMember = Object.assign({},aClubMember);

   }

}
