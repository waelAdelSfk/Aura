import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

// import { MatRippleModule} from '@angular/material/core';
// import {A11yModule} from '@angular/cdk/a11y';
// import {CdkAccordionModule} from '@angular/cdk/accordion';
// import {ClipboardModule} from '@angular/cdk/clipboard';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {PortalModule} from '@angular/cdk/portal';
// import {ScrollingModule} from '@angular/cdk/scrolling';
// import {CdkStepperModule} from '@angular/cdk/stepper';
// import {CdkTableModule} from '@angular/cdk/table';
// import {CdkTreeModule} from '@angular/cdk/tree';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatCardModule} from '@angular/material/card';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatListModule} from '@angular/material/list';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatSortModule} from '@angular/material/sort';
// import {MatTableModule} from '@angular/material/table';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatTreeModule} from '@angular/material/tree';
// import {OverlayModule} from '@angular/cdk/overlay';

const modules = [
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  // NgxMatTimepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatDialogModule,
  // MatRippleModule,
  // A11yModule,
  // CdkAccordionModule,
  // ClipboardModule,
  // CdkStepperModule,
  // CdkTableModule,
  // CdkTreeModule,
  // DragDropModule,
  // MatAutocompleteModule,
  // MatBadgeModule,
  // MatBottomSheetModule,
  // MatButtonToggleModule,
  // MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatStepperModule,
  // MatExpansionModule,
  // MatGridListModule,
  // MatListModule,
  // MatMenuModule,
  // MatPaginatorModule,
  // MatProgressBarModule,
  // MatProgressSpinnerModule,
  // MatRadioModule,
  // MatSidenavModule,
  // MatSliderModule,
  // MatSlideToggleModule,
  // MatSnackBarModule,
  // MatSortModule,
  // MatTableModule,
  // MatTabsModule,
  // MatToolbarModule,
  // MatTooltipModule,
  // MatTreeModule,
  // OverlayModule,
  // PortalModule,
  // ScrollingModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
