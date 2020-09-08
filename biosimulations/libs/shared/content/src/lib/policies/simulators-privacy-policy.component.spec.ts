import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUiModule } from '@biosimulations/shared/ui';
import { BiosimulationsIconsModule } from '@biosimulations/shared/icons';
import { ConfigService } from '@biosimulations/shared/services';
import { SimulatorsPrivacyPolicyComponent } from './simulators-privacy-policy.component';

describe('SimulatorsPrivacyPolicyComponent', () => {
  let component: SimulatorsPrivacyPolicyComponent;
  let fixture: ComponentFixture<SimulatorsPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimulatorsPrivacyPolicyComponent,
      ],
      imports: [
        SharedUiModule,
        BiosimulationsIconsModule,
      ],
      providers: [
        ConfigService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorsPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
