import { NgModule } from "@angular/core";
import { PostListComponent } from '../posts/post-list/post-list.component';
import { PostCreateComponent } from '../posts/post-create/post-create.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AngularMaterialModule } from "../angular-material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    PostListComponent,
    PostCreateComponent
  ], 
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class PostsModule {}