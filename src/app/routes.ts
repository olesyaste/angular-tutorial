import { Routes } from '@angular/router';
import { 
    EventDetailsComponent,
    EventsListComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
 } from './events/index'

import { Error404Component } from "./errors/404.component";


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: [ 'CanDeactivateCreateEvent' ] },
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]