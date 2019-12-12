import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-routerlink',
  templateUrl: './routerlink.component.html',
  styleUrls: ['./routerlink.component.sass']
})
export class RouterlinkComponent {
  @Input() href: string;

  constructor() { }
}
