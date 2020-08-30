import { Project } from './../../shared/project.model';
import { ProjectsService } from './../../shared/projects.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit {
  public loadedProject: Project;
  public newProjectName: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('projectId')) {
        // redirect
        this.router.navigate(['/projects']);
        return;
      }
      const projectId = paramMap.get('projectId');
      this.loadedProject = this.projectsService.getProjectById(projectId);
      console.log(this.loadedProject);
    });
  }

  onSaveProject() {
    this.projectsService.updateProject(this.loadedProject);
    this.router.navigate(['/projects']);
  }

}
