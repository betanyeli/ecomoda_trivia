import Amplify from 'aws-amplify';
import awsmobile from '../../src/aws-exports';

Amplify.configure(awsmobile);

export const getData = await 