import { log } from 'node:console';
import * as fs from 'node:fs/promises';

import {copyFile, constants } from 'node:fs/promises';

try{
    await copyFile('text.txt','text1.txt');
    console.log('source file has been copied to destination file');
} catch{
    console.log('file couldnt be copied');
}

