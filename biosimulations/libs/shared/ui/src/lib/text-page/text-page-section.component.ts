import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'biosimulations-text-page-section',
  templateUrl: './text-page-section.component.html',
  styleUrls: ['./text-page-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPageSectionComponent implements OnInit {
  @Input()
  heading = '';

  @Input()
  icon = '';

  @Input()
  iconRouterLink!: any[] | string | null;

  @Input()
  iconHref!: string | null;

  @Input()
  iconClick!: () => void | null;

  constructor() {}

  ngOnInit(): void {}
}
