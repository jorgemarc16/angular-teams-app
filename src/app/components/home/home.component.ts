import { Component } from '@angular/core';
import { FootballteamsService } from '../../services/footballteams.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  team = new Team();
  allTeams: any[] = [];
  
  selectedTeam: Team = new Team();

  constructor(private service:FootballteamsService) {
    this.service.getTeams().subscribe((data:any) => {
      this.allTeams = data;
    })
   }

   getById(id){
    this.service.getTeamById(id).subscribe((data:any) =>{
      console.log(data)
      this.team = data;
    }, error=>{console.log("Id inexistente ", error), window.alert("Id inexistente verifique la informacion")})
   }
}
