import { Component } from '@angular/core';
import { Team } from '../../models/team';
import { FootballteamsService } from '../../services/footballteams.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  
  teamArray: Team[] = [];

  selectedTeam: Team = new Team();

  constructor(private service:FootballteamsService){}

  add(form){
    this.service.createTeam(form.value).subscribe((team: Team)=>{
      console.log("Equipo creado ", team)
    })
    this.selectedTeam = new Team();
  }
}
