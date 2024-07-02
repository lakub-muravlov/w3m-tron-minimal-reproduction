import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { W3MTronService } from '../../../services/w3m-tron.service';

@Component({
    selector: 'app-w3m-tron-connect',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './w3m-tron-connect.component.html',
    styleUrl: './w3m-tron-connect.component.scss',
})
export class W3mTronConnectComponent
{
    address = computed(() => this.w3mTron.address());
    public error: string | undefined;

    constructor(
        private w3mTron: W3MTronService
    )
    {

    }

    public async connect(): Promise<void>
    {
        try
        {
            await this.w3mTron.connect();
        }
        catch (e: any)
        {
            this.error = e.message;
        }
    }
}
