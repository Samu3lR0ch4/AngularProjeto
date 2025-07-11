import { Routes } from '@angular/router';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
    { 
    path:"", 
    pathMatch: "full",
    loadComponent: () => {
        return import("./pages/login/login").then (C => C.Login)
        
    }

    },
    { 
    path:"home", 
    pathMatch: "full",
    loadComponent: () => {
        return import("./pages/home/home").then (C => C.Home)
        
    }

    },
    { 
    path:"dashboard", 
    pathMatch: "full",
    loadComponent: () => {
    return import("./pages/dashboard/dashboard").then (C => C.Dashboard)
        
    }

    },








];
