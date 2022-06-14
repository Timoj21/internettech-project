import { Component } from '@angular/core';
import { Exercise, MuscleGroup } from '../models/exercise.models';

import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})

export class HomepageComponent {

  muscleGroups: MuscleGroup[] = [];
  selectedMuscleGroups: MuscleGroup[] = [];  

  temp: MuscleGroup = {
    name: ''
  }

  exercises: Exercise[] = [];
  selectedExercise: Exercise = {
    name: '',
    description: '',
    group: this.temp
  };

  constructor(
    private exerciseService: ExerciseService,
  ) 
  {
    this.getMuscleGroups();
    this.getExercises();
  }

  getMuscleGroups(): void {
    this.exerciseService.getExerciseGroups().subscribe((data) => {
      for(var group of data.data) {
        this.muscleGroups.push({
          name: group.Name
        });
      }
    });
  }

  getExercises(): void {
    this.exerciseService.getExercises().subscribe((data) => {
      for(var exercise of data.data ) {
        this.exercises.push({
          name: exercise.Name,
          description: exercise.Description,
          group: ({
            name: exercise.MuscleGroup
          })
        });
      }
    })
  }

  onGenerateExercise() {
    if(this.selectedMuscleGroups.length > 0){
      var toChooseExercise: Exercise[] = [];
      for (var exercise of this.exercises ) {
        for( var group of this.selectedMuscleGroups) {
          if(exercise.group.name == group.name) {
            toChooseExercise.push(exercise);
          }
        }

        // if(this.selectedMuscleGroups.includes(exercise.group)) {
        //   console.log("kom ik hier");
        //   toChooseExercise.push(exercise);
        // }
      }
      var number = this.getRandomInt(toChooseExercise.length)
      this.selectedExercise = toChooseExercise[number];
    }
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  onCheck(group: MuscleGroup) {
    if(!this.selectedMuscleGroups.includes(group)) {
      this.selectedMuscleGroups.push(group);
    } else {
      var index = this.selectedMuscleGroups.indexOf(group, 0);
      this.selectedMuscleGroups.splice(index, 1);
    }
  }
}