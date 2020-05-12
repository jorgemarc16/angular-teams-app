import { Component, OnInit} from '@angular/core';
import { FootballteamsService} from '../../services/footballteams.service'
import { Team } from '../../models/team';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
  allTeams: any[] = [];
  selectedTeam: Team = { id: null, nombre: null, estadio: null, nacionalidad: null, sitioWeb: null, entrenador: null, 
                         fundacion: null, capacidad: null, valor: null};

  constructor(private service:FootballteamsService) {}
  
  ngOnInit(){
    this.service.getTeams().subscribe((teams: Team[])=>{
      this.allTeams = teams;
      console.log(this.allTeams);
    })
  }

  update(id, form){
    this.service.updateTeam(id, form.value).subscribe((team: Team)=>{
      console.log("Equipo actualizado ", team);
      window.alert("Equipo actualizado");
    })
    this.selectedTeam = new Team();
  }
 
  selectTeam(team: Team){
    this.selectedTeam = team;
  }


}
