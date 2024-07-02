import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'ethers',
        loadComponent: () => import('./modules/connect-ethers/connect-ethers.component').then(m => m.ConnectEthersComponent)
    },
    {
        path: 'tron',
        loadComponent: () => import('./modules/connect-tron/connect-tron.component').then(m => m.ConnectTronComponent)
    },
    {
        path: 'combined',
        loadComponent: () => import('./modules/connect-combined/connect-combined.component').then(m => m.ConnectCombinedComponent)
    }
];
