import readFile from '../src/read-file';
import {expect} from 'chai';
import path from 'path';

describe('hello', function () {

  it('should return hello words for a given name', async () => {
    const response = await readFile(path.resolve(__dirname, 'package.json'));
    console.log(response);
  })

})
