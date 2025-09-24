import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Banner } from './banner/banner';
import { About } from './about/about';
import { Skill } from './skill/skill';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Education } from './education/education';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [Navbar, Banner, About, Skill, Experience, Projects, Education, Footer, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('madhu-portfolio');
}
