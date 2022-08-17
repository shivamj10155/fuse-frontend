import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import {MatTableModule} from '@angular/material/table'
import { MatPaginatorModule} from '@angular/material/paginator'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
const exampleRoutes: Route[] = [
    {path : '',component: ExampleComponent},
    {path : 'data',component: DatatableComponent}
];

@NgModule({
    declarations: [
        ExampleComponent,
        DatatableComponent
    ],
    imports     : [
        MatTableModule,
        MatPaginatorModule,
        FormsModule,
        MatSelectModule,
        ReactiveFormsModule, 
        CommonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
      //  BrowserAnimationsModule,
        RouterModule.forChild(exampleRoutes)
    ]
})
export class ExampleModule
{
}
