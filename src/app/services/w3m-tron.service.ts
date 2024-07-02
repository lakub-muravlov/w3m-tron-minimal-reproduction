import { Injectable, signal } from "@angular/core";
import { WalletConnectAdapter } from '@tronweb3/tronwallet-adapters';


@Injectable()
export class W3MTronService
{
    public address = signal<string | undefined>(undefined);

    private modal = new WalletConnectAdapter({
        network: 'Mainnet',
        options: {
            relayUrl: 'wss://relay.walletconnect.com',
            // example walletconnect app project ID
            projectId: 'e899c82be21d4acca2c8aec45e893598',
            metadata: {
                name: 'Example App',
                description: 'Example App',
                url: 'https://yourdapp-url.com',
                icons: [ 'https://yourdapp-url.com/icon.png' ],
            },
        }
    });

    public async connect()
    {
        await this.modal.connect();
        this.address.set(this.modal.address || undefined);
    }
}