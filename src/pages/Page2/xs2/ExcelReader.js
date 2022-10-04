import axios, { AxiosRequestConfig } from 'axios';
import fs from 'fs';

export const downloadXLSFile = async () => {
    
    // Its important to set the 'Content-Type': 'blob' and responseType:'arraybuffer'.
    const headers = {'Content-Type': 'blob'};
    //const config: AxiosRequestConfig = {method: 'GET', url: URL, responseType: 'arraybuffer', headers};
    
    try {
        const response = await axios(config);
        
        const outputFilename = `${Date.now()}.xls`;

        // If you want to download file automatically using link attribute.
        const url = URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', outputFilename);
        document.body.appendChild(link);
        link.click();

        // OR you can save/write file locally.
        fs.writeFileSync(outputFilename, response.data);
    } catch (error) {
        throw Error(error);
    }
}