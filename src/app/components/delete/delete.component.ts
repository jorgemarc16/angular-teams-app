import { Component } from '@angular/core';
import { FootballteamsService } from '../../services/footballteams.service';
import { Team } from '../../models/team';
import { Router } from '@angular/router'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  
  allTeams: any[] = [];

  constructor(private router:Router ,private service:FootballteamsService) {
    this.service.getTeams().subscribe((data:any) => {
      this.allTeams = data;
   });
  }
  
  delete(id){
    this.service.deleteTeam(id).subscribe((team: Team)=>{
      console.log("Equipo eliminado ", team);
      window.alert("Equipo borrado");  
    });
    this.router.navigate(["/delete"]);
  }
}
