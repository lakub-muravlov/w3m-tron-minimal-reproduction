import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { W3MEthersService } from '../../services/w3m-ethers.service';
import { W3mEthersConnectComponent } from '../shared/w3m-ethers-connect/w3m-ethers-connect.component';

@Component({
    selector: 'app-connect-ethers',
    standalone: true,
    imports: [
        CommonModule,
        W3mEthersConnectComponent
    ],
    templateUrl: './connect-ethers.component.html',
    styleUrl: './connect-ethers.component.scss',
    providers: [
        W3MEthersService
    ]
})
export class ConnectEthersComponent { }
