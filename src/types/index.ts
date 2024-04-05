export interface Device {
    id: number;
    ipV4: string;
    hostname: string;
    macAddress: string;
    operationSystem: 'Linux' | 'Mac' | 'Windows' | 'Unix';
    manufacturer: string;
    model: string;
    openPorts:  string[];
}