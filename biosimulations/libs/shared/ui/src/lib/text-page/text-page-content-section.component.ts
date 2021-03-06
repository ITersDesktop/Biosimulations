import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'biosimulations-text-page-content-section',
  templateUrl: './text-page-content-section.component.html',
  styleUrls: ['./text-page-content-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextPageContentSectionComponent {
  @Input()
  heading = '';

  _icon = 'toTop';

  @Input()
  set icon(icon: string) {
    this._icon = icon;
    this.setIconAction();
  }

  get icon(): string {
    return this._icon;
  }

  _iconAction!: any;

  @Input()
  set iconAction(iconAction: any) {
    this._iconAction = iconAction;
    this.setIconAction();
  }

  get iconAction(): any {
    return this._iconAction;
  }

  iconRouterLink: any = null;
  iconHref: string | null = null;
  iconClick: () => void = this.scrollToTop;

  setIconAction(): void {
    if (this._icon === 'top') {
      this.iconRouterLink = null;
      this.iconHref = null;
      this.iconClick = this.scrollToTop;
    } else if (this._icon === 'internalLink') {
      this.iconRouterLink = this._iconAction;
      this.iconHref = null;
      this.iconClick = () => {};
    } else if (this._icon === 'link') {
      this.iconRouterLink = null;
      this.iconHref = this._iconAction;
      this.iconClick = () => {};
    }
  }

  scrollToTop(): void {
    const scrollContainer = document.getElementsByTagName('mat-sidenav-content')[0];
    scrollContainer.scrollTo({top: 64 + 1, behavior: 'smooth'});
  }
}
