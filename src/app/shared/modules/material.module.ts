import { NgModule } from '@angular/core';
import { MatExpansionModule, MatIconModule, MatDialogModule,
    MatButtonModule, MatCardModule, MatTableModule, MatPaginatorModule } from '@angular/material';

import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material';
import {
    MatFormFieldModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
 } from '@angular/material';



@NgModule({
    imports: [
        CommonModule,
        MatExpansionModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,MatFormFieldModule,MatInputModule,

        //material
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDividerModule,
        MatGridListModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        //----------
        BrowserAnimationsModule,
        NoopAnimationsModule

    ],
    exports: [
        MatExpansionModule,
        MatAutocompleteModule,
        MatIconModule,
        CommonModule,
        MatDialogModule,
        MatButtonModule,MatTabsModule,MatCardModule,
        MatTableModule,
        MatPaginatorModule,MatFormFieldModule,MatInputModule,

             //material
             MatBadgeModule,
             MatBottomSheetModule,
             MatButtonToggleModule,
             MatCheckboxModule,
             MatChipsModule,
             MatDatepickerModule,
             MatDividerModule,
             MatGridListModule,
             MatListModule,
             MatMenuModule,
             MatNativeDateModule,
             MatProgressBarModule,
             MatProgressSpinnerModule,
             MatRadioModule,
             MatRippleModule,
             MatSelectModule,
             MatSidenavModule,
             MatSliderModule,
             MatSlideToggleModule,
             MatSnackBarModule,
             MatSortModule,
             MatStepperModule,
             MatToolbarModule,
             MatTooltipModule,
             MatTreeModule,
             //----------
             BrowserAnimationsModule,
             NoopAnimationsModule


    ],
    declarations: [
    ],
})
export class MaterialModule { }
