import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatToolbarModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ShowPostComponentComponent } from './show-post-component/show-post-component.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.guard';
import { FrontPageComponent } from './front-page/front-page.component';
import { BlogTileComponent } from './blog-tile/blog-tile.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent, children: [
    {path: 'allPosts', canActivate: [AuthGuard],component: ShowPostComponentComponent},
    {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
    {path: 'frontPage', canActivate: [AuthGuard], component: FrontPageComponent}
  ]}
];

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponentComponent,
    AddPostComponent,
    RegisterComponent,
    FrontPageComponent,
    BlogTileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  exports:[RouterModule],
  providers: [AuthGuard],
  bootstrap: [RootComponent],
  entryComponents: [
    AddPostComponent,
    RegisterComponent
  ]
})
export class AppModule { }
