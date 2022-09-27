import { version } from '../../../../package.json';
import Stripe from 'stripe';


export const stripe = new Stripe(
  process.env.STRIPE_API_KEY,
  {
    apiVersion: '2022-08-01',
    appInfo: {
      name: 'Ignews',
      version
    }
  }
) 